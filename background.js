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

                    chrome.storage.sync.set({ user_id: response.data.user_id });

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
            chrome.storage.sync.get("user_id", data => {
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

            chrome.storage.sync.get(domain, data => {
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
    chrome.storage.sync.clear();
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

                    chrome.scripting.insertCSS({ // Inject the css of the foreground script into the page
                            target: { tabId: tabId },
                            files: ["css/foreground.css"]
                        })
                        .then(() => {
                            console.log(`Injected stylesheet for foreground in "${domain}".`);

                            chrome.scripting.executeScript({ // Inject the script 
                                    target: { tabId: tabId },
                                    files: ["js/foreground.js"]
                                })
                                .then(() => {
                                    console.log(`Injected foreground script in "${domain}".`);
                                });
                        })
                        .catch(err => console.log(err));

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
 * @return {Promise} All info regarding current project or '{}}' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >= 500)
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

        if (response.status >= 200 && response.status < 300)
            return await response.json();

        if (response.status >= 500)
            throw `Server error code: ${response.status}!`;

    throw "Not a good response from server";
}

/**
 * Check if the URL belong to a project and return the details with local storage check and cache if info received from remote
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} All info regarding current project or 'null' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >= 500)
 */
function getProjectWithCache(projectURL) { //TODO need somekind of check if the in memory data is still the same as remote(in case a project is deleted from remote but it's still in local)
    return new Promise(function(resolve, reject) {

        checkIfProjectInCache(projectURL) // Check if project in storage.sync
            .then(response => {
                let domain = (new URL(projectURL)).hostname; // Get domain name of the current page

                // If it is in storage return it
                if (response[domain])
                    return response[domain];

                // If the URL doesn't have a project but was cached return it
                if (response[domain] === null)
                    return response[domain];

                // Else get the data from server
                return getProject(projectURL).then(response => {
                    return response.data;
                });

            }).then(response => {

                let domain = (new URL(projectURL)).hostname; // Get domain name of the URL
                let obj = {};
                obj[domain] = response;

                chrome.storage.sync.set(obj); // Save in memory the domain + prioject info

                resolve(response);
            }).catch(err => {
                // cache the sites that doesn't have project info on remote
                let domain = (new URL(projectURL)).hostname; // Get domain name of the URL
                let obj = {};
                obj[domain] = null;

                chrome.storage.sync.set(obj); // Save in memory the domain + prioject info (null)

                reject(err)
            });
    }).catch(err => {
        throw err;
    });
}

/**
 * Check if the project is registred in storage
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} All info regarding current project from storage or '{}' if not found
 */
function checkIfProjectInCache(projectURL) {
    let domain = (new URL(projectURL)).hostname; // Get domain name of the URL

    return new Promise(function(resolve, reject) {
        chrome.storage.sync.get(domain, data => {
            resolve(data);
        });
    });
}







/**
 * Get the stage list and their bug list associated with a project
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} Array with all the curent stages (columns) and their respective list of bugs
 * @throws Will throw an error messaje in case of non-existance (codes >= 500) from remote, and one error if not in sorage
 */
async function getBugs(projectURL) {
    project = await getProjectWithCache(projectURL); // Will throw error if project not in remote

    if (project === null) throw "No project for this URL"; // In case the project was taken from storage and no info is given

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