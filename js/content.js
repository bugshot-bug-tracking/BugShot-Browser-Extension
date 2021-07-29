var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;

if (location.ancestorOrigins.contains(extensionOrigin))
    throw "";


/** <----- Element references ----->*/

var bugshot_container = "";

var sidebar = "";

var bug_list = "";
var bug_info = "";
var bug_menu = "";

var logo = "";
var bug_list_button = "";
var admin_button = "";
var project_button = "";
var add_button = "";

var overlay = "";
var bug_form = "";

/** -^-^-^- Element references -^-^-^- */


/** <----- Templates ----->*/

var bug_group_template = "";
var bug_card_template = "";

/** -^-^-^- Templates -^-^-^- */


/** <----- Bug report details ----->*/

var bug_details = {
    screenshot: "", // URI encoded image
    designation: "", // Name of the bug
    description: "", // Description of the bug
    priority_id: "", // priority value of the bug 1 -> 4
    selector: "", // Path from doc root to the element where the marker was placed "1 > 2 > 3"
    resolution: "", // Client display resolution {width, height}
    mark_coords: "" // Coordonates of the mark made by the user {x, y}
};

/** -^-^-^- Bug report details -^-^-^- */


var bugs = {
    status: [],
    info: []
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

// Set references to relevant elements added in the provided DOM
function setVariables(dom) {

    bugshot_container = dom.getElementById("bugshot-container");

    sidebar = dom.getElementById("sidebar");

    bug_list = dom.getElementById("bug-list");
    bug_info = dom.getElementById("bug-info");
    bug_menu = dom.getElementById("bug-menu");

    logo = dom.getElementById("logo");
    bug_list_button = dom.getElementById("bug-list-button");
    admin_button = dom.getElementById("admin-button");
    project_button = dom.getElementById("project-button");
    add_button = dom.getElementById("add-button");

    overlay = dom.getElementById("overlay");
    bug_form = dom.getElementById("bug-form");

    /** <----- Templates ----->*/

    bug_group_template = dom.getElementById("bug-group-template");
    bug_card_template = dom.getElementById("bug-card-template");

    /** -^-^-^- Templates -^-^-^- */

}

// Add CSS stylesheet links in the provided DOM
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
        closeSidebar();
        defaultState();
    } else
        openSidebar();
}

function bugListButtonClick(event) {

    // if the list transitioned to hidden
    if (toggleHidden(bug_list) === false) {
        bug_list.innerHTML = "";
        return;
    }

    addLoadingAnimation(bug_list);

    chrome.runtime.sendMessage({
        message: "getBugs"
    }, response => {

        removeLoadingAnimation(bug_list);

        if (response.message === "error") {
            addStateAnimation(bug_list, "error");
            console.error(response.error);
            return;
        }

        if (response.message === "empty") {
            console.log("No project buggs");
            return;
        }

        if (response.message !== "ok") {
            console.error("What was the message?");
            return;
        }

        bugs.status = [];
        bugs.info = [];

        // For each bug group/stage
        response.payload.forEach(stage => {

            let obj = {};
            obj[stage.id] = stage.designation;
            bugs.status.push(obj);

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
                bugs.info.push(bug);

                // Make a deep copy of the tamplate
                let bug_copy = bug_card_template.content.cloneNode(true).firstElementChild;

                // Add the new card to the group-bugs
                group_bugs.appendChild(bug_copy);

                // Get reference to elements in the group
                let bug_title = bug_copy.querySelector(".bug-title");
                let bug_deadline = bug_copy.querySelector(".bug-deadline");
                let bug_priority = bug_copy.querySelector(".bug-priority");


                // Insert data in apropriate fields
                bug_title.innerHTML = bug.designation;
                if (bug.deadline === null)
                    bug.deadline = "no deadline";
                bug_deadline.innerHTML = bug.deadline;
                bug_priority.classList.add(`p${bug.priority_id}`);

                // TODO Add event listener for each card to display in a separate tab the details based on bug id
                bug_title.addEventListener("click", event => bugInfo(event, bug.id));

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
     * 2. Show overlay to get mark location and take screenshot
     */

    // 1
    defaultState();
    toggleHidden(sidebar);

    // 2 
    toggleHidden(overlay);
}

function overlayClick(event) {

    event.stopImmediatePropagation();

    // Prevent more than 1 click event while registering a bug report
    if (overlay.classList.contains("lock"))
        return;
    overlay.classList.add("lock");

    // hide overlay for screenshot
    toggleHidden(overlay);

    setTimeout(() => {
        // Take screenshot
        chrome.runtime.sendMessage({
            message: "takeScreenshot"
        }, response => {
            // Show overlay again
            toggleHidden(overlay);

            if (response.message === "error") {
                defaultState();
                console.error(response.error);
                return;
            }

            if (response.message !== "ok") {
                defaultState();
                console.error("Something went wrong with the screenshot!");
                return;
            }


            console.log("Screenshot taken!");

            // Save screenshot in memory
            bug_details.screenshot = response.payload;

            // Show sidebar again
            toggleHidden(sidebar); // TODO disable sidebar controls maybe????

            // Change the overlay style as marked state
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
            toggleHidden(bug_menu);
            bug_details.mark_coords = { x: clientX, y: clientY };

            bug_details.selector = getSelector({ x: pageX, y: pageY });

        });
    }, 100);



}

function bugFormSubmit(event) {

    // Stop any other possible action outside of this
    event.preventDefault();

    addLoadingAnimation(bug_menu);
    toggleHidden(bug_form);

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


    chrome.runtime.sendMessage({
        message: "sendBug",
        payload: bug_details
    }, response => {

        removeLoadingAnimation(bug_menu);

        if (response.message === "error") {
            addStateAnimation(bug_menu, "error");

            setTimeout(function() {
                defaultState();
                bug_form.reset(); // the default reset function not the new one
            }, 3800);

            console.error(response.error);
            return;
        }

        if (response.message !== "ok") {
            defaultState();
            console.error("Something went wrong with the the bug report!");
            return;
        }

        console.log("Bug report sent!");

        addStateAnimation(bug_menu, "success");

        setTimeout(function() {
            defaultState();
            bug_form.reset(); // the default reset function not the new one
        }, 3800);


    });

}

function bugFormReset(event) {
    defaultState();
}

function bugInfo(event, bug_id) {
    let bug = bugs.info.find(elem => elem.id = bug_id)

    // TODO add a X button
    if (toggleHidden(bug_info) === false)
        toggleHidden(bug_info);


}

/** -^-^-^- Action Listeners implementation -^-^-^- */


/**  <----- Helper Functions -----> */

function closeSidebar() {
    sidebar.className = "";

    bug_list_button.setAttribute("hidden", "");
    admin_button.setAttribute("hidden", "");
    project_button.setAttribute("hidden", "");
    add_button.setAttribute("hidden", "");
}

function openSidebar() {
    sidebar.className = "open";

    bug_list_button.removeAttribute("hidden");
    admin_button.removeAttribute("hidden");
    project_button.removeAttribute("hidden");
    add_button.removeAttribute("hidden");

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

    bug_form.removeAttribute("hidden");
    sidebar.removeAttribute("hidden");

    overlay.setAttribute("hidden", "");
    overlay.innerHTML = "";
    overlay.className = "";

    bug_menu.setAttribute("hidden", "");
    removeLoadingAnimation(bug_menu);
    removeStateAnimation(bug_menu); // Same state for both success and error

    bug_list.setAttribute("hidden", "");
    bug_list.innerHTML = "";

    bug_info.setAttribute("hidden", "");

}

function toggleHidden(element) {
    // if the element is visible hide it else show
    if (element.getAttribute("hidden") == null) {
        element.setAttribute("hidden", "");
        return false; // false is hidden
    }
    element.removeAttribute("hidden");
    return true; // true is visible
}

function addLoadingAnimation(element) {
    let loading = document.createElement('div');
    loading.className = "loading";
    element.prepend(loading);
}

function removeLoadingAnimation(element) {
    if (element.querySelector(".loading") === null) return;
    let loading = element.querySelector(".loading");
    loading.remove();
}

function addStateAnimation(element, animation) {
    let state = document.createElement('div');
    let logo = document.createElement('div')
    let message = document.createElement('div');

    state.className = `state ${animation}`
    logo.className = "logo";
    message.className = "message";

    element.prepend(state);
    state.append(logo);
    state.append(message);
}

function removeStateAnimation(element) {
    if (element.querySelector(".state") === null) return;
    let state = element.querySelector(".state");
    state.remove();
}


/** -^-^-^- Helper Functions -^-^-^-a */



// After the preparations are done append the new element to the DOM
div = document.createElement("div");

div.style.cssText = `
    position: fixed;
    bottom: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    background-color: transparent;
    z-index: 10000;
    `;

div.appendChild(document.createElement("bug-shot"));

document.body.append(div);