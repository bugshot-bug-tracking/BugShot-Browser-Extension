/** This script is only for injecting an iframe into the page
    and link it to the inground.html
*/
console.log("here");
iframe = document.createElement('iframe');

var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
    // Must be declared at web_accessible_resources in manifest.json
    iframe.src = chrome.runtime.getURL('html/inground.html');

    // Some styles for a fancy sidebar
    iframe.style.cssText = `
        display: block;
        position: fixed;
        overflow: hidden;
        background-color: transparent;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 9990;
        `;



    iframe.id = "bugshot-iframe";
    // document.body.appendChild(iframe);
}

window.addEventListener("message", function(event) {
    if (event.origin !== extensionOrigin)
        return;

    var size = JSON.parse(event.data);
    iframe.style.height = size.height + "px";
    iframe.style.width = size.width + "px";
    iframe.style.top = (50 - (size.height / this.window.innerHeight) * 50) + "%"
});



fetch(extensionOrigin + "/../html/inground.html")
    .then(stream => stream.text())
    .then(txt => initialize(txt));


var bugshot_container = "";

var sidebar = "";
var bug_list = "";
var bug_menu = "";

var logo = "";
var bug_list_button = "";
var admin_button = "";
var project_button = "";
var add_button = "";

var overlayxy = "";
var bug_form = "";



/** <----- Templates ----->*/

var bug_group_template = "";
var bug_card_template = "";

/** -^-^-^- Templates -^-^-^- */

var bug_details = {
    screenshot: "", // URI encoded image
    designation: "", // Name of the bug
    description: "", // Description of the bug
    priority_id: "", // priority value of the bug 1 -> 4
    selector: "", // Path from doc root to the element where the marker was placed "1 > 2 > 3"
    resolution: "", // Client display resolution {width, height}
    mark_coords: "" // Coordonates of the mark made by the user {x, y}
};

function initialize(htmlData) {
    class BugShot extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });


            this.shadowRoot.innerHTML = htmlData;

            bugshot_container = this.shadowRoot.getElementById("bugshot-container");

            sidebar = this.shadowRoot.getElementById("sidebar")

            bug_list = this.shadowRoot.getElementById("bug-list")
            bug_menu = this.shadowRoot.getElementById("bug-menu")

            logo = this.shadowRoot.getElementById("logo")
            bug_list_button = this.shadowRoot.getElementById("bug-list-button")
            admin_button = this.shadowRoot.getElementById("admin-button")
            project_button = this.shadowRoot.getElementById("project-button")
            add_button = this.shadowRoot.getElementById("add-button")

            overlayxy = this.shadowRoot.getElementById("overlay");
            bug_form = this.shadowRoot.getElementById("bug-form");



            /** <----- Templates ----->*/

            bug_group_template = this.shadowRoot.getElementById("bug-group-template");
            bug_card_template = this.shadowRoot.getElementById("bug-card-template");

            /** -^-^-^- Templates -^-^-^- */



        }
        connectedCallback() {


            defaultState();
            closeSidebar();

            logo.addEventListener('click', event => {
                if (sidebar.classList.contains("open")) {
                    sidebar.classList.remove("open");
                    closeSidebar();
                } else {
                    sidebar.classList.add("open");
                    openSidebar();
                }

            });

            bug_list_button.addEventListener('click', event => {

                console.log("This is not doen yet so i disabled it.");
                // return;

                if (bug_list.classList.contains("hide")) {
                    bug_list.classList.remove("hide");
                } else {
                    bug_list.classList.add("hide");
                    bug_list.innerHTML = ""
                    return;
                }



                chrome.runtime.sendMessage({
                    message: "getBugs"
                }, response => {

                    if (response.message === "error") {
                        console.log(response.error);
                        return;
                    }

                    if (response.message === "empty") {
                        console.log("No project buggs");
                        return;
                    }

                    if (response.message !== "ok") {
                        console.log("What was the message?");
                        return;
                    }


                    response.payload.forEach(stage => {

                        // Make a deep copy of the tamplate
                        let group_copy = bug_group_template.content.cloneNode(true).firstElementChild;

                        // Add the new group to the bug-list
                        bug_list.appendChild(group_copy);

                        // Get reference to elements in the group
                        let group_name = group_copy.querySelector(".group-name");
                        let group_bugs = group_copy.querySelector(".group-bugs");


                        // Assign a name to the group
                        group_name.innerHTML = stage.designation;

                        // Empty the bugs container
                        group_bugs.innerHTML = "";

                        // Create bug cards for each bug and append them to group-bugs
                        stage.bugs.forEach(bug => {

                            // Make a deep copy of the tamplate
                            let bug_copy = bug_card_template.content.cloneNode(true).firstElementChild

                            // Add the new card to the group-bugs
                            group_bugs.appendChild(bug_copy);

                            // Get reference to elements in the group
                            let bug_id = bug_copy.querySelector(".bug-id");
                            let bug_title = bug_copy.querySelector(".bug-title");
                            let bug_deadline = bug_copy.querySelector(".bug-deadline");
                            let bug_priority = bug_copy.querySelector(".bug-priority");


                            // Insert data in apropriate fields
                            bug_id.innerHTML = bug.id;

                            bug_title.innerHTML = bug.designation;

                            if (bug.deadline === null)
                                bug.deadline = "dd.MM.yyyy";

                            bug_deadline.innerHTML = bug.deadline;

                            bug_priority.classList.add(`p${bug.priority_id}`);



                            bug_title.addEventListener("click", event => {
                                let bug_id = event.path.find(element => element.className === "bug-card").querySelector(".bug-id").innerHTML;
                                if (bug_id === "0")
                                    console.log("value is 0");
                                else
                                    console.log(`Value is ${bug_id}`);

                            });

                        });






                    });


                });


            });

            admin_button.addEventListener('click', event => {

                chrome.runtime.sendMessage({
                    message: "openAdminPannel"
                }, response => {
                    if (response.message === "ok")
                        console.log("Oppened admin pannel in new tab.");
                });

            });

            project_button.addEventListener('click', event => {

                chrome.runtime.sendMessage({
                    message: "openProjectPannel"
                }, response => {
                    if (response.message === "ok")
                        console.log("Oppened project pannel in new tab.");
                });

            });

            add_button.addEventListener('click', event => {

                /**
                 * 1. Hide sidebar
                 * 2. Take Screenshot
                 * 3. Show overlay to get mark location
                 */

                try { // TODO !!!IMPORTANT!!! block the scroll

                    // default overlay
                    overlayxy.className = "hide";
                    overlayxy.innerHTML = "";
                    bug_menu.className = "hide";

                    if (!bug_list.classList.contains("hide")) {
                        bug_list_button.click(); // close the bug list view by triggering click event;
                    }

                    sidebar.classList.add("hide");

                    chrome.runtime.sendMessage({
                        message: "takeScreenshot"
                    }, response => {

                        if (response.message === "error")
                            throw response.error;

                        if (response.message !== "ok")
                            throw "Something went wrong with the screenshot!";

                        bug_details.screenshot = response.payload;

                        overlayxy.className = "";
                    });

                } catch (err) {
                    console.error(err);
                    bug_details.screenshot = "";

                    if (sidebar.classList.contains("hide"))
                        sidebar.classList.remove("hide");
                }

            });

            overlayxy.addEventListener('click', event => {

                event.stopImmediatePropagation();

                if (overlayxy.classList.contains("lock"))
                    return;

                overlayxy.classList.add("lock"); // lock so it can't triggered again unintentionally

                if (sidebar.classList.contains("hide")) // show sidebar again
                    sidebar.classList.remove("hide"); // TODO disable sidebar controls maybe????


                overlayxy.classList.add("mark");

                // NEXT add a marker to the overlay just for show
                let clientX = event.clientX; // coordinates relative to what user sees on screen
                let clientY = event.clientY;

                let pageX = event.pageX; // coordinates relative to the top of the page(it considers scroll)
                let pageY = event.pageY;

                addMark({ x: clientX, y: clientY });

                // NEXT oppen bug form
                bug_menu.className = "";

                bug_details.mark_coords = { x: clientX, y: clientY };

                bug_details.selector = getSelector({ x: pageX, y: pageY });

            });


            bug_form.addEventListener("submit", event => {
                event.preventDefault();

                Array.prototype.forEach.call(event.target.elements, (element) => {

                    if (element.id === "bug-name")
                        bug_details.designation = element.value;


                    if (element.id === "bug-description")
                        bug_details.description = element.value;


                    if (element.type === "radio") // bug-priority
                        if (element.checked == true)
                            bug_details.priority_id = element.value;

                });

                bug_details.resolution = getScreenInfo();

                console.log(bug_details);

                try {
                    chrome.runtime.sendMessage({
                        message: "sendBug",
                        payload: bug_details
                    }, response => {

                        if (response.message === "error")
                            throw response.error;

                        if (response.message !== "ok")
                            throw "Something went wrong with the screenshot!";

                        console.log("Screenshot saved!");

                        defaultState();
                        bug_form.reset();
                    });

                } catch (error) {
                    console.error(error);
                }

            });

            bug_form.addEventListener("reset", event => {
                defaultState();
            });



        }
    }

    window.customElements.define("bug-shot", BugShot);



}

div = document.createElement("div");
div.style.cssText = `    font-size: 14px;
font-family: arial,sans-serif;
color: #222;
position: fixed;
top: 0;
right: 0;
width: fit-content;
height: fit-content;
z-index: 9999;`;
div.appendChild(document.createElement("bug-shot"));
document.body.appendChild(div)







function closeSidebar() {
    logo.classList.remove("open");

    bug_list_button.classList.add("hide");
    admin_button.classList.add("hide");
    project_button.classList.add("hide");
    add_button.classList.add("hide");
}

function openSidebar() {
    logo.classList.add("open");

    bug_list_button.classList.remove("hide");
    admin_button.classList.remove("hide");
    project_button.classList.remove("hide");
    add_button.classList.remove("hide");
}

function getScreenInfo() {
    return {
        width: screen.width * window.devicePixelRatio,
        height: screen.height * window.devicePixelRatio
    };
}

function addMark(coord) {
    if (!!document.getElementById("mark")) //prevent multiple marks
        return;

    let mark = document.createElement('div');
    mark.id = "mark";

    mark.style.cssText = `top: ${coord.y - 53}px; left: ${coord.x - 14}px`; // the values are moddified because it renders the image from the top left so an offset is needed to align the arraw where the mouse pointer realy was

    mark.classList.add("normal");
    overlayxy.appendChild(mark);
}

function getSelector(pageCoord) {
    // this is a work in progeress to get the element from page at the requested coordinates
    return "/";
    // post a message to the current tab and as response get the selector postMessage()


}

function defaultState() {

    bug_details = {
        screenshot: "",
        designation: "",
        description: "",
        priority_id: "",
        selector: "",
        resolution: "",
        mark_coords: ""
    };

    overlayxy.className = "hide";
    overlayxy.innerHTML = "";
    bug_menu.className = "hide";
    bug_list.className = "hide";
}