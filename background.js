chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    switch (request.message) {

        case "login": //TODO validate inputs
            logIn(request.payload)
                .then(response => {
                    /*
                        response data structure


                        response.data {
                            token: string,
                            user_id: int
                        }
                        response.message: string
                        response.success: boolean
                    */

                    //TODO save the relevant info for other API calls

                    chrome.storage.local.set({ user_id: response.data.user_id });

                    sendResponse({
                        message: "login"
                    });

                })
                .catch(err => {
                    console.log(err);

                    sendResponse({
                        message: "error",
                        error: err
                    });


                });

            return true; // needed to keep the conection alive while the function runs asyncronus
            break;

        case "logout":
            logOut()
                .then(() => {
                    sendResponse({
                        message: "logout"
                    });
                })
                .catch(err => {
                    console.log(err);
                    sendResponse({
                        message: "error",
                        error: err
                    });
                });

            return true; // needed to keep the conection alive while the function runs asyncronus

            break;

        case "logged": //TODO somehow extract method from this
            chrome.storage.local.get("user_id", data => {
                if (chrome.runtime.lastError) {
                    sendResponse({
                        message: 'error',
                        error: chrome.runtime.lastError
                    });
                    return;
                }

                if (data.user_id > 0)
                    sendResponse({
                        message: "logged"
                    });
                sendResponse({});
            })

            return true;
            break;

        case "test":
            console.log(`I arrived from foreground.js!`);
            chrome.runtime.sendMessage({
                message: "run"
            });
            sendResponse({ message: "ok" })
            break;

        case "checkProject": //TODO validate inputs //** determine if necessary or use direct calls on actions */
            console.log({ request, sender })
            getProject(sender.tab.url)
                .then(response => {
                    sendResponse({
                        message: "ok",
                        project: response
                    });
                })
                .catch(err => {
                    console.log(err);
                    sendResponse({
                        message: "error",
                        error: err
                    });
                });

            return true;
            break;

        case "getBugs":

            getBugs(sender.tab.url)
                .then(response => {

                    if (response === null)
                        sendResponse({
                            message: "empty",
                        });
                    else
                        sendResponse({
                            message: "ok",
                            payload: response
                        });


                }).catch(err => {
                    sendResponse({
                        message: "error",
                        error: err
                    });
                });

            return true;
            break;

        case "openAdminPannel":
            chrome.tabs.create({
                url: `http://bugshot.view4all.de/`
            });

            sendResponse({
                message: "ok"
            });
            break;

        case "openProjectPannel":
            let domain = (new URL(sender.tab.url)).hostname; // Get domain name of the sender 

            chrome.storage.local.get(domain, data => {
                let project = Object.values(data)[0];
                chrome.tabs.create({
                    url: `http://bugshot.view4all.de/companies/${project.company_id}/projects/${project.id}/statuses`
                });

                sendResponse({
                    message: "ok"
                });
            });

            return true;
            break;

        case "takeScreenshot":
            takeScreenshot(sender.tab.windowId)
                .then(response => {
                    sendResponse({
                        message: "ok",
                        payload: response
                    });
                })
                .catch(err => {
                    console.log(err);

                    sendResponse({
                        message: "error",
                        error: err
                    });
                });
            return true;
            break;


        case "sendBug":
            bug_details = {
                screenshot: request.payload.screenshot,
                designation: request.payload.designation,
                description: request.payload.description,
                url: sender.tab.url,
                priority_id: request.payload.priority_id,
                selector: request.payload.selector,
                resolution: request.payload.resolution, // this is an object {width, height}
                mark_coords: request.payload.mark_coords // this is an object {x, y}
            };

            console.log({ bug_details_from_back: bug_details });

            sendBugDetails(bug_details).then(response => {

                    sendBugScreenshot(bug_details, response.id).then(() => {
                        sendResponse({
                            message: "ok"
                        });
                    });

                })
                .catch(err => {
                    console.log(err);

                    sendResponse({
                        message: "error",
                        error: err
                    });

                });

            return true;
            break;


        default:
            sendResponse({
                message: "Message not recognized as a command!"
            });
            break;
    }


});


/**
 * Authenticate user and get coocies for communication
 * @param  {{username, password}} credentials The credentials for authentication
 * @return {Promise} All info regarding the user or '{}' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >=500)
 */
async function logIn(credentials) {
    let url = "https://bugshot.view4all.de/api/user/login";

    let response = await fetch(url, {
        method: "POST",
        redirect: 'follow',
        headers: {
            'Content-type': 'application/json',
            'clientId': "5",
            'version': "1.0.0",
        },
        body: JSON.stringify({
            email: credentials.username,
            password: credentials.password
        })

    });

    if (response.status >= 200 && response.status < 300)
        return await response.json();

    if (response.status >= 500)
        throw `Server error code: ${response.status}!`;

    throw "Not a good response from server";
}

/**
 * Reset the environment to default
 */
async function logOut() {
    //TODO Implement the cleanup of localStorage after saving something in it
    chrome.storage.local.clear();
}

/**
 * Check to see if the apropriate informations are available for comunication to consider the state as logged in
 * @return {Boolean} True if everything is ok, false otherwise
 */
async function logged() {
    // return new Promise((resolve, reject) => {
    //     chrome.storage.local.get("user_id", item => {
    //         if (chrome.runtime.lastError)
    //             console.log('Error getting');

    //         if (Object.values(item) != undefined) {
    //             resolve(Object.values(item).val);
    //         } else {
    //             reject();
    //         }

    //         console.log(item);
    //     })
    // })
    return true;

}



/** Event listener on page update; injects foreground.js and .css if there is a project for it */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    logged().then(response => {

        if (!response) return; // If not logged in exit

        if (changeInfo.status === 'complete' && /^http/.test(tab.url)) { // When tab finished loading and it's a legit one (http/https)

            let domain = (new URL(tab.url)).hostname; // Get domain name of the current page

            getProjectWithCache(tab.url) // Get the project info from storage or remote with cacheing if from remote
                .then(response => {
                    console.log({ domain, response });

                    if (!response) return; // If no project exit
                    //if (!response[domain]) return; // If no info about project exit




                    // chrome.scripting.insertCSS({ // Inject the css of the foreground script into the page
                    //         target: { tabId: tabId },
                    //         files: ["css/foreground.css"]
                    //     })
                    //     .then(() => {
                    //         console.log(`Injected stylesheet for foreground in "${domain}".`);

                    //         chrome.scripting.executeScript({ // Inject the script 
                    //                 target: { tabId: tabId },
                    //                 files: ["js/foreground.js"]
                    //             })
                    //             .then(() => {
                    //                 console.log(`Injected foreground script in "${domain}".`);
                    //             });
                    //     })
                    //     .catch(err => console.log(err));



                    chrome.scripting.executeScript({ // Inject the script 
                        target: { tabId: tabId },
                        files: ["js/iframe.js"]
                    });


                })
                .catch(err => {
                    console.log({ domain, result: err, location: "getProjectWithCacheing" });
                });
        }
    });

});



/**
 * Check if the URL belong to a project and return the details
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} All info regarding current project or 'null' if not found
 * @throws Will throw an error messaje in case of server problems (codes >= 500) 
 */
async function getProject(projectURL) {

    let domain = (new URL(projectURL)).hostname; // Get domain name of the URL

    let requestURL = 'http://bugshot.view4all.de/api/check-project'
    let clientId = 5
    let verison = '1.0.0'


    let response = await fetch(requestURL, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'clientId': clientId,
            'version': verison,
            'projectUrl': domain,
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
        }
    });

    if (response.status >= 200 && response.status < 300) {
        let json = await response.json();
        if (json.success === false)
            return null;
        else
            return json.data;
    }

    if (response.status >= 500)
        throw `Server error code: ${response.status}!`;

    throw "Not a good response from server";
}

/**
 * Check if the URL belong to a project and return the details with local storage check and cache if info received from remote
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} All info regarding current project or 'null' if not found
 * @throws Will throw an error messaje in case of server problems (codes >= 500) 
 */
async function getProjectWithCache(projectURL) { //TODO need somekind of check if the in memory data is still the same as remote(in case a project is deleted from remote but it's still in local)

    let domain = (new URL(projectURL)).hostname; // Get domain name of the URL

    let response = await checkIfProjectInCache(projectURL);

    // If it is in storage return it
    if (response[domain])
        return response[domain];

    // If the URL doesn't have a project but was cached return it
    if (response[domain] === null)
        return response[domain];

    // Else get the data from server
    let project = await getProject(projectURL);

    let obj = {};
    obj[domain] = project;

    chrome.storage.local.set(obj); // Save in memory the domain + prioject info

    return project;

}

/**
 * Check if the project is registred in storage
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} All info regarding current project from storage or '{}' if not found
 */
function checkIfProjectInCache(projectURL) {
    let domain = (new URL(projectURL)).hostname; // Get domain name of the URL

    return new Promise(function(resolve, reject) {
        chrome.storage.local.get(domain, data => {
            resolve(data);
        });
    });
}

/**
 * Get the stage list and their bug list associated with a project
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} Array with all the curent stages (columns) and their respective list of bugs, null otherwise
 * @throws Will throw an error messaje in case of server problems (codes >= 500) from remote
 */
async function getBugs(projectURL) {
    project = await getProjectWithCache(projectURL); // Will throw error if project not in remote

    if (project === null) return null; // In case the project was taken from storage and no info is given

    var url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects/${project.id}/bugs`;

    let response = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'clientId': "5",
            'version': "1.0.0",
        }
    });

    response = await response.json();

    return response.data;

}


async function takeScreenshot(windowID) {
    let screenshot = await chrome.tabs.captureVisibleTab(windowID, {
        format: "jpeg",
        quality: 100
    });

    console.log(screenshot);

    let obj = {};
    obj[windowID] = screenshot;
    chrome.storage.local.set(obj);

    return screenshot;
}

async function sendBugDetails(bug_details) {

    let project = await getProjectWithCache(bug_details.url);

    let url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects/${project.id}/bugs`;

    let osInfo = await getOS();
    let browser = getBrowser();


    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'clientId': "5",
            'version': "1.0.0",
        },
        body: JSON.stringify({
            designation: bug_details.designation,
            description: bug_details.description,
            url: bug_details.url,
            priority_id: bug_details.priority_id,
            operating_system: `${osInfo.os} ${osInfo.arch}`,
            browser: `${browser.name} ${browser.version}`,
            selector: bug_details.selector,
            resolution: `${bug_details.resolution.width}x${bug_details.resolution.height}`
        })
    });

    let json = await response.json();

    console.log({ bugDetails: json });

    return json.data;
}

async function sendBugScreenshot(bug_details, bugID) {

    let project = await getProjectWithCache(bug_details.url);

    let url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects/${project.id}/bugs/${bugID}/screenshots`;

    let today = new Date();
    let timestamp = today.toISOString();
    timestamp += '.jpg';

    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'clientId': "5",
            'version': "1.0.0",
        },
        body: JSON.stringify({
            base64: bug_details.screenshot.replace(/^data:image\/[a-z]+;base64,/, ""),
            designation: timestamp,
            position_x: bug_details.mark_coords.x,
            position_y: bug_details.mark_coords.y
        })
    });

    let json = await response.json();
    console.log({ bugScreen: json });

    console.log(json);

}


function getOS() {
    return new Promise((resolve, reject) => {
        chrome.runtime.getPlatformInfo(function(info) {
            resolve({ os: info.os, arch: info.arch })
        });
    });
}

function getBrowser() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return {
        name: M[0],
        version: M[1]
    };
}