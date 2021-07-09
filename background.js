'use strict';

let id;
let comment;
let title;
let pageid = 11;
let pageurl;
let xxpos;
let yypos;
let system;
let bearer_token;
let prioid;
let selector;
let xpos1;
let ypos1;

var physicalScreenWidth = screen.width * window.devicePixelRatio;
var physicalScreenHeight = screen.height * window.devicePixelRatio;
let resolution = (physicalScreenWidth + " x " + physicalScreenHeight)

var browserarr = get_browser();
let browser = (browserarr.name + " " + browserarr.version);

var screenshot = {
    content: document.createElement("canvas"),
    data: ''
};

chrome.runtime.getPlatformInfo(function(info) {
    system = (info.os + " " + info.arch);
});


function get_browser() {
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



        case "attachment":
            var project = JSON.parse(localStorage['project'])
            var bugId = localStorage['bugId']
            var url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects/${project.id}/bugs/${bugId}/attachments`;
            var bearer = 'Bearer ' + localStorage['bearer_token'];
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': bearer,
                        'Content-type': 'application/json',
                        'clientId': "5",
                        'version': "1.0.0",
                    },
                    body: JSON.stringify({
                        designation: request.name,
                        base64: request.b64,

                    })
                }).then(response => {
                    // return response.json()
                    console.log(response)
                })
                .catch(err => {
                    console.log(err);
                })
            return true; // Will respond asynchronously.

        case "capture":
            pageurl = request.url;
            comment = request.comment;
            title = request.title;
            pageid = 33;
            prioid = request.prio;
            // refactor this section to be async because we need to know if data was saved or not
            // if (sendbug()){
            //   addmarker();
            // }
            sendbug().then((response) => {
                    // console.log(response)
                    if (response.success) {
                        addmarker()
                        return true
                    } else {
                        sendFail()
                            // chrome.tabs.sendMessage(tabs[0].id, {action:'bugresult', error: 'SUCCESS'})
                        return false

                    }
                })
                // maybe this will be suspended
            break;

        case "screen": // save the screenshot to storage            
            makeShot();
            sendResponse({
                farewell: "saved"
            });
            break;
        case "capturepos": // capture mouse position 
            xxpos = request.xpos;
            yypos = request.ypos;
            selector = request.tagPath;
            xpos1 = request.xpos1;
            ypos1 = request.ypos1;
            sendResponse({
                farewell: "saved"
            });
            break;
        case "fetchpro":
            // HERE WE NEED TO PICK NOT THE PROJECT BUT THE BUGS AND LIST THEM IN TEMPLATE NOT IN THE SELECT DROPDOWN LIKE HOW IS NOW ON THE TEMPLATE ON MY TASK
            var project = JSON.parse(localStorage['project'])
            var url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects`;
            var bearer = 'Bearer ' + localStorage['bearer_token'];

            fetch(url, {
                    method: 'GET',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                        'Authorization': bearer,
                        'clientId': "5",
                        'version': "1.0.0",
                    }
                }).then(response => {
                    return response.json()
                })
                .then(data => sendResponse(data))
                .catch(err => {
                    console.log(err);
                })
            return true; // Will respond asynchronously.

        case "fetchbug":

            var project = JSON.parse(localStorage['project'])
            var url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects/${project.id}/bugs`;
            var bearer = 'Bearer ' + localStorage['bearer_token'];

            fetch(url, {
                    method: 'GET',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                        'Authorization': bearer,
                        'clientId': "5",
                        'version': "1.0.0",
                    }
                }).then(response => {
                    return response.json()
                })
                .then(data => sendResponse(data))
                .catch(err => {
                    console.log(err);
                })
            return true; // Will respond asynchronously.

        case "fetchscreenshots":

            // var bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGJmMmE0YTdkODNiMWIyZTk5YmU2NzY0YzA5ZDJiZDI1YTc2OWRiYWNlMWJlMDAxMDJiOTNkOTc2YjU0NWY2MGY1ZGZiMTAyMjkwYTliOWEiLCJpYXQiOjE1OTI4OTYzOTEsIm5iZiI6MTU5Mjg5NjM5MSwiZXhwIjoxNjI0NDMyMzkxLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.t6zyqsg8MfFVRsf3NEGl1XmC7Ewu__Tiwq4NGL4Tkbl3u4WvKlJHVE59WMdzr1-58fOoyz-eh16S0Uvk_di1wglX_ebJBBDpLsbcxXuBFKXnJdSSjoCmJiAtQi-Nf7aOwb0lYJK5b8_MW_ey8PpVzop4bm1npAt-T9bznYNUd31SMHZeAggHDHz0GTfE4xuwghTmJQtVlgM2WcuCO2_GFSxpOJbdqA7TSZFcCjf_qfLadKlXQq6Y-l2wfRQgyeqU8M70vgBnSvAJGaLmquGt9aB963Ne9eybBpOdgvXrsJnjVKdHlNglm5O9xY7c3lZASFYjMxvbLwkA2ksBihxz1zZSymPKvE3Jbois7bul4sn4DQJZiQ_61HPyVYsfznC-L0kFFEQRjlq2UllhkR8qhxqGubEfGHTETdYk1BKEFOurRUEH5t504mzyQcwnukld2IvdUq4Ijn286usCn31uzgfPVEIVKEqK5gYgUcHzg3o5_mNOlaEpVIktdxWGW9KtCxursWcXxkyqar2q-1VTNFXU-PioEKMh6hsSgTc8WhnbeIGUEQcuHKPEELoVcfjTuafGHZAgY5lS4Zg0MjXYLHzxW0GXxXCx5NPMOdavF-EX0MMcVp93tDWAJvlfhp2IBB2kXseuQ6DZsjgbIkvTkU1EBYsM45B3JtofkBYKCHU';
            var url = "https://bugshot.view4all.de/api/companies/ed76dad0-d009-11eb-a6b2-6dc45fd46f39/projects/" + request.project + "/bugs/" + request.bugid + "/screenshots";
            var bearer = 'Bearer ' + localStorage['bearer_token'];
            console.log(url);
            fetch(url, {
                    method: 'GET',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                        'Authorization': bearer,
                        'clientId': "5",
                        'version': "1.0.0",
                    }
                }).then(response => {
                    return response.json()
                })
                .then(data => sendResponse(data))
                .catch(err => {
                    console.log(err);
                })
            return true; // Will respond asynchronously.

        case "fetchbase64":

            // var bearer_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGJmMmE0YTdkODNiMWIyZTk5YmU2NzY0YzA5ZDJiZDI1YTc2OWRiYWNlMWJlMDAxMDJiOTNkOTc2YjU0NWY2MGY1ZGZiMTAyMjkwYTliOWEiLCJpYXQiOjE1OTI4OTYzOTEsIm5iZiI6MTU5Mjg5NjM5MSwiZXhwIjoxNjI0NDMyMzkxLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.t6zyqsg8MfFVRsf3NEGl1XmC7Ewu__Tiwq4NGL4Tkbl3u4WvKlJHVE59WMdzr1-58fOoyz-eh16S0Uvk_di1wglX_ebJBBDpLsbcxXuBFKXnJdSSjoCmJiAtQi-Nf7aOwb0lYJK5b8_MW_ey8PpVzop4bm1npAt-T9bznYNUd31SMHZeAggHDHz0GTfE4xuwghTmJQtVlgM2WcuCO2_GFSxpOJbdqA7TSZFcCjf_qfLadKlXQq6Y-l2wfRQgyeqU8M70vgBnSvAJGaLmquGt9aB963Ne9eybBpOdgvXrsJnjVKdHlNglm5O9xY7c3lZASFYjMxvbLwkA2ksBihxz1zZSymPKvE3Jbois7bul4sn4DQJZiQ_61HPyVYsfznC-L0kFFEQRjlq2UllhkR8qhxqGubEfGHTETdYk1BKEFOurRUEH5t504mzyQcwnukld2IvdUq4Ijn286usCn31uzgfPVEIVKEqK5gYgUcHzg3o5_mNOlaEpVIktdxWGW9KtCxursWcXxkyqar2q-1VTNFXU-PioEKMh6hsSgTc8WhnbeIGUEQcuHKPEELoVcfjTuafGHZAgY5lS4Zg0MjXYLHzxW0GXxXCx5NPMOdavF-EX0MMcVp93tDWAJvlfhp2IBB2kXseuQ6DZsjgbIkvTkU1EBYsM45B3JtofkBYKCHU';
            var url = "https://bugshot.view4all.de/api/companies/ed76dad0-d009-11eb-a6b2-6dc45fd46f39/projects/" + request.project + "/bugs/" + request.bugid + "/screenshots/" + request.screenid;
            var bearer = 'Bearer ' + localStorage['bearer_token'];
            console.log(url);
            fetch(url, {
                    method: 'GET',
                    withCredentials: true,
                    credentials: 'include',
                    headers: {
                        'Authorization': bearer,
                        'clientId': "5",
                        'version': "1.0.0",
                    }
                }).then(response => {
                    return response.json()
                })
                .then(data => sendResponse(data))
                .catch(err => {
                    console.log(err);
                })
            return true; // Will respond asynchronously.




        case "checkProject": //TODO validate inputs //** determine if necessary or use direct calls on actions */
            console.log({ request, sender })
            getProject(sender.url)
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

        case "openAdminPannel":
            chrome.tabs.create({
                url: `http://bugshot.view4all.de/`
            });

            sendResponse({
                message: "ok"
            });
            break;

        case "openProjectPannel":
            let domain = (new URL(sender.url)).hostname; // Get domain name of the sender 

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



function makeShot() {
    chrome.tabs.captureVisibleTab(null, {
        format: "jpeg",
        quality: 100
    }, function(data) {
        screenshot.data = data;
        saveScreenshot();
    });
};

function blobToCanvas(blob, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function() {
            const canvas = document.createElement('canvas')
            const scale = Math.min(
                1,
                maxWidth ? maxWidth / img.width : 1,
                maxHeight ? maxHeight / img.height : 1,
            )
            canvas.width = img.width * scale
            canvas.height = img.height * scale
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height)
            resolve(canvas)
        }
        img.onerror = () => {
            reject(new Error('Error load blob to Image'))
        }
        img.src = URL.createObjectURL(blob)
    })
};

function addmarker() {

    var image = new Image();
    image.onload = function() {
        var canvas = document.createElement('canvas')
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);

        chrome.storage.local.get(['color'], async function(data) {
            var blob = new Blob(['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="37.759" height="55.243" viewBox="0 0 37.759 55.243"><defs><style>.a{fill:#' + data.color + ';}.b{filter:url(#a);}</style><filter id="a" x="0" y="0" width="37.759" height="55.243" filterUnits="userSpaceOnUse"><feOffset dx="5" input="SourceAlpha"/><feGaussianBlur stdDeviation="1.5" result="b"/><feFlood flood-opacity="0.322"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(0 4.5)"><g class="b" transform="matrix(1, 0, 0, 1, 0, -4.5)"><path class="a" d="M29.038,2H17.349L9,10.221V21.91L23.13,48.243l14.13-26.2V10.221Zm4.367,15.414h-2.7a7.638,7.638,0,0,1-6.294,6.294v2.7H21.845v-2.7a7.638,7.638,0,0,1-6.294-6.294h-2.7V14.845h2.7a7.638,7.638,0,0,1,6.294-6.294v-2.7h2.569v2.7a7.638,7.638,0,0,1,6.294,6.294h2.7Z" transform="translate(-9 2.5)"/></g><path class="a" d="M26.119,12.825A5.433,5.433,0,0,0,22.394,9.1v2.441H19.825V9.1A5.433,5.433,0,0,0,16.1,12.825h2.441v2.569H16.1a5.433,5.433,0,0,0,3.725,3.725V16.679h2.569v2.441a5.433,5.433,0,0,0,3.725-3.725H23.679V12.825Z" transform="translate(-6.98 0.02)"/></g></svg>'], {
                type: "image/svg+xml;charset=utf-8"
            });
            var blob2 = await blobToCanvas(blob, 38, 56);
            context.drawImage(blob2, (xxpos - 14), (yypos - 52));


            var link = canvas.toDataURL('image/jpeg');
            var img = link.replace(/^data:image\/[a-z]+;base64,/, "");
            localStorage['screen'] = img;

            connect();
        });
    }
    image.src = localStorage['screenshot'];
};

function saveScreenshot() {
    var image = new Image();
    image.onload = function() {

        var canvas = screenshot.content;
        canvas.width = image.width;
        canvas.height = image.height;

        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);

        localStorage['canvas'] = screenshot.content;
        localStorage['screenshot'] = screenshot.data; //image without the marker on it
        screenshot.data = '';
    };

    //tell content screen is ready
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "taken"
        }, function(response) {
            var lastError = chrome.runtime.lastError;
            if (lastError) {
                console.log(lastError.message);
                // 'Could not establish connection. Receiving end does not exist.'
                return;
            }
        });
    });

    image.src = screenshot.data;
};

function connect() {
    var bugId = localStorage['bugId']
    var project = JSON.parse(localStorage['project'])
        // this was build for designation name to pick the different naming of the image
    var today = new Date();
    var time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    time = time + '.jpg'

    var url = `https://bugshot.view4all.de/api/companies/${project.company_id}/projects/${project.id}/bugs/${bugId}/screenshots`;
    var bearer = 'Bearer ' + localStorage['bearer_token'];
    fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': bearer,
                'Content-type': 'application/json',
                'clientId': "5",
                'version': "1.0.0",
            },
            body: JSON.stringify({
                base64: localStorage['screen'],
                designation: time,
                position_x: xxpos,
                position_y: yypos
            })
        })
        .then(response => response.json()) // get json response to can use it in the next
        .then((data) => {
            // console.log(data)
            // remove the marker from the page
            removeMarkerSign()
        })
        .catch(err => {
            console.log(err);
        })
    return true; // Will respond asynchronously.
};

// this fucntion has been refactored to be async 
async function sendbug() {

    var project = JSON.parse(localStorage['project'])
    var companyId = project.company_id

    var url = `https://bugshot.view4all.de/api/companies/${companyId}/projects/${project.id}/bugs`;
    var bearer = 'Bearer ' + localStorage['bearer_token'];
    if (!comment) {
        comment = "null";
    };

    const response = await fetch(url, {
        method: 'POST',
        // withCredentials: true,
        // redirect: 'follow',
        // credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-type': 'application/json',
            'clientId': "5",
            'version': "1.0.0",
        },
        body: JSON.stringify({
            // id: id,
            designation: "test",
            description: comment,
            url: pageurl,
            priority_id: prioid,
            // status_id: "test",
            // user_id: "test",
            operating_system: system,
            browser: browser,
            selector: selector,
            resolution: resolution,
            screenshot_url: "test",
            // deadline: "1987-12-23 00:00:00"
        })
    })

    const resp = await response.json()
        // console.log(resp)
    localStorage['bugId'] = resp.data.id
    return resp
        //  return async function 
        // var resp = storeBug().then(response => {
        //   if(response.status == 200) {
        //     console.log("in response async")

    //     return true
    //   }
    //   else {
    //     return false
    //   }
    // })
    //
    // if(localStorage['bugId']) {
    //   return true
    // } else {
    //   return false
    // }
    // .then(response => response.json()) // get json response to can use it in the next
    // .then((data) => {
    //   localStorage['bugId'] = data.data.id
    // })
    // .catch(err => {
    //   console.log(err);
    // })
    // return true;  // Will respond asynchronously.

};



function removeMarkerSign() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "remvoeMarkerSign"
        }, function(response) {
            // for the moment not used
        });
    });
}

function sendFail() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "resultFail"
        }, function(response) {
            // for the moment not used
        });
    });
}



/**
 * Authenticate user and get coocies for communication
 * @param  {{username, password}} credentials The credentials for authentication
 * @return {Promise} All info regarding the user or 'undefined' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >=500)
 */
async function logIn(credentials) {
    let url = "https://bugshot.view4all.de/api/user/login";

    return new Promise(function(resolve, reject) {

        fetch(url, {
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

        }).then(response => {

            if (response.status >= 200 && response.status < 300)
                resolve(response.json());

            if (response.status >= 500)
                reject(`Server error code: ${response.status}!`);
        }).catch(err => { throw err });

    }).catch(err => {
        throw err;
    });
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
 * @return {Promise} All info regarding current project or 'undefined' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >= 500)
 */
function getProject(projectURL) {

    let domain = (new URL(projectURL)).hostname; // Get domain name of the URL

    let requestURL = 'http://bugshot.view4all.de/api/check-project'
    let clientId = 5
    let verison = '1.0.0'

    return new Promise(function(resolve, reject) {

        fetch(requestURL, {
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
        }).then(response => {

            if (response.status >= 200 && response.status < 300)
                resolve(response.json());

            if (response.status >= 500)
                reject(`Server error code: ${response.status}!`);
        }).catch(err => { throw err });

    }).catch(err => {
        throw err;
    });

}

/**
 * Check if the URL belong to a project and return the details with local storage check and cache if info received from remote
 * @param  {String} projectURL The URL of the project (Ex: https://www.google.com/)
 * @return {Promise} All info regarding current project or '{}' if not found
 * @throws Will throw an error messaje in case of non-existance (codes >= 500)
 */
function getProjectWithCache(projectURL) { //TODO need somekind of check if the in memory data is still the same as remote(in case a project is deleted from remote but it's still in local)
    return new Promise(function(resolve, reject) {

        checkIfProjectInCache(projectURL) // Check if project in storage.sync
            .then(response => {
                let domain = (new URL(projectURL)).hostname; // Get domain name of the current page

                // If it is return it
                if (response[domain])
                    return response[domain];

                if (response[domain] === null)
                    return response[domain];

                // Else get the data from server
                return getProject(projectURL).then(response => {
                    return response;
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

                chrome.storage.sync.set(obj); // Save in memory the domain + prioject info

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