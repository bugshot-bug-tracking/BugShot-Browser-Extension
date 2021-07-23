var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;

if (location.ancestorOrigins.contains(extensionOrigin))
    throw "";


var bugshot_container = "";

var sidebar = "";
var bug_list = "";
var bug_menu = "";

var logo = "";
var bug_list_button = "";
var admin_button = "";
var project_button = "";
var add_button = "";

var overlay = "";
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


// Get the base HTML code from another file and create a new element with the code 
fetch(chrome.runtime.getURL("html/content.html"))
    .then(stream => stream.text())
    .then(htmlTXT => initialize(htmlTXT));


function initialize(htmlData) {

    class BugShot extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });

            this.shadowRoot.innerHTML = htmlData;
            setVariables(this.shadowRoot);
            setCSS(this.shadowRoot);

        }

        // After the element was appended to DOM initialize the action listeners
        connectedCallback() {
            defaultState();
            closeSidebar();

            logo.addEventListener('click', logoClick);
            bug_list_button.addEventListener('click', bugListButtonClick);
            admin_button.addEventListener('click', adminButtonClick);
            project_button.addEventListener('click', projectButtonClick);
            add_button.addEventListener('click', addButtonClick);
            overlay.addEventListener('click', overlayClick);

            bug_form.addEventListener("submit", bugFormSubmit);
            bug_form.addEventListener("reset", bugFormReset);
        }

    }

    window.customElements.define("bug-shot", BugShot);
}

function setVariables(dom) {

    bugshot_container = dom.getElementById("bugshot-container");

    sidebar = dom.getElementById("sidebar")

    bug_list = dom.getElementById("bug-list")
    bug_menu = dom.getElementById("bug-menu")

    logo = dom.getElementById("logo")
    bug_list_button = dom.getElementById("bug-list-button")
    admin_button = dom.getElementById("admin-button")
    project_button = dom.getElementById("project-button")
    add_button = dom.getElementById("add-button")

    overlay = dom.getElementById("overlay");
    bug_form = dom.getElementById("bug-form");

    /** <----- Templates ----->*/

    bug_group_template = dom.getElementById("bug-group-template");
    bug_card_template = dom.getElementById("bug-card-template");

    /** -^-^-^- Templates -^-^-^- */

}

function setCSS(dom) {
    let styleSheet = [
        chrome.runtime.getURL("css/content_class.css"),
        chrome.runtime.getURL("css/content.css"),
        chrome.runtime.getURL("libraries/bootstrap-5.0.2-dist/css/bootstrap.min.css")
    ];

    styleSheet.forEach(sheet => {
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', sheet);
        dom.prepend(link);
    });
}


/**  <----- Action Listeners implementation -----> */

function logoClick(event) {

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        closeSidebar();
        return;
    }

    sidebar.classList.add("open");
    openSidebar();

}

function bugListButtonClick(event) {
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

        // For each bug group/stage
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
                let bug_copy = bug_card_template.content.cloneNode(true).firstElementChild;

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

                // TODO Add event listener for each card to display in a separate tab the details based on bug id
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
}

function adminButtonClick(event) {

    chrome.runtime.sendMessage({
        message: "openAdminPannel"
    }, response => {
        if (response.message === "ok")
            console.log("Oppened admin pannel in new tab.");
    });

}

function projectButtonClick(event) {

    chrome.runtime.sendMessage({
        message: "openProjectPannel"
    }, response => {
        if (response.message === "ok")
            console.log("Oppened project pannel in new tab.");
    });

}

function addButtonClick(event) {
    /**
     * 1. Hide sidebar
     * 2. Take Screenshot
     * 3. Show overlay to get mark location
     */

    try { // TODO  !!!IMPORTANT!!! block the scroll

        // 1
        defaultState();
        sidebar.classList.add("hide");

        // 2
        chrome.runtime.sendMessage({
            message: "takeScreenshot"
        }, response => {

            if (response.message === "error")
                throw response.error;

            if (response.message !== "ok")
                throw "Something went wrong with the screenshot!";

            bug_details.screenshot = response.payload;

            // 3
            overlay.className = "";
        });

    } catch (err) {
        console.error(err);
        defaultState();

        if (sidebar.classList.contains("hide"))
            sidebar.classList.remove("hide");

    }
}

function overlayClick(event) {

    event.stopImmediatePropagation();

    // Prevent more than 1 click event while registering a bug report
    if (overlay.classList.contains("lock"))
        return;
    overlay.classList.add("lock");

    if (sidebar.classList.contains("hide")) // show sidebar again
        sidebar.classList.remove("hide"); // TODO disable sidebar controls maybe????


    overlay.classList.add("marked");

    // NEXT add a marker to the overlay just for show

    // coordinates relative to what user sees on screen
    let clientX = event.clientX;
    let clientY = event.clientY;

    // coordinates relative to the top of the page(it considers scroll)
    // ? this will be usefull when adding a mark of bug later and well need absolute coordonates to page position
    let pageX = event.pageX;
    let pageY = event.pageY;

    addMark({ x: clientX, y: clientY });

    // NEXT oppen bug form
    bug_menu.className = "";

    bug_details.mark_coords = { x: clientX, y: clientY };

    bug_details.selector = getSelector({ x: pageX, y: pageY });

}

function bugFormSubmit(event) {

    // Stop any other possible action outside of this
    event.preventDefault();

    // Get all the information from the form
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
            bug_form.reset(); // the default reset function not the new one
        });

    } catch (error) {
        console.error(error);
    }

}

function bugFormReset(event) {
    defaultState();
}

/** -^-^-^- Action Listeners implementation -^-^-^- */


/**  <----- Helper Functions -----> */

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

function addMark(coord) {
    if (!!overlay.querySelector("mark")) //prevent multiple marks
        return;

    let mark = document.createElement('div');
    mark.id = "mark";

    // the values are moddified because it renders the image from top-left so an offset is needed to align the arrow where the mouse pointer realy was
    // the offset values represent the full height of the image and half the width
    mark.style.cssText = `top: ${coord.y - 56}px; left: ${coord.x - 16}px`;

    mark.classList.add("normal");
    overlay.appendChild(mark);
}

function getScreenInfo() {
    return {
        width: screen.width * window.devicePixelRatio,
        height: screen.height * window.devicePixelRatio
    };
}

function getSelector(pageCoord) {
    // ? this is a work in progeress to get the element from page at the requested coordinates
    return "/";
    // ? post a message to the current tab and as response get the selector postMessage()


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

    defaultStateView();
}

function defaultStateView() {
    overlay.className = "hide";
    overlay.innerHTML = "";
    bug_menu.className = "hide";
    bug_list.className = "hide";
    bug_list.innerHTML = "";
}

/** -^-^-^- Helper Functions -^-^-^-a */



// After the preparations are done append the new element to the DOM
div = document.createElement("div");

div.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    background-color: transparent;
    z-index: 10000;`;

div.appendChild(document.createElement("bug-shot"));

document.body.append(div);