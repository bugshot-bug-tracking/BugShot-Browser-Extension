//** Sidebar and buttons */

sidebar = document.getElementById("sidebar")


bug_menu = document.getElementById("bug-menu")
task_details = document.getElementById("task-details")
task_list = document.getElementById("task-list")

logo = document.getElementById("logo")
task_button = document.getElementById("task-button")
admin_button = document.getElementById("admin-button")
project_button = document.getElementById("project-button")
add_button = document.getElementById("add-button")

overlayxy = document.getElementById("overlay");

bug_form = document.getElementById("bug-form");

bugshot_container = document.getElementById("bugshot-container");


bug_details = {
    screenshot: "", // URI encoded image
    designation: "", // Name of the bug
    description: "", // Description of the bug
    priority_id: "", // priority value of the bug 1 -> 4
    selector: "", // Path from doc root to the element where the marker was placed "1 > 2 > 3"
    resolution: "", // Client display resolution
    mark_coords: "" // Coordonates of the mark made by the user
};












closeSidebar();





//------ Event Listeners ------//

// add a click event listener on the logo for closing and opening the sidebar
logo.addEventListener('click', event => {

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        closeSidebar();
    } else {
        sidebar.classList.add("open");
        openSidebar();
    }
});

task_button.addEventListener('click', event => {

    console.log("This is not doen yet so i disabled it.");
    return;

    if (task_list.classList.contains("show")) {
        task_list.classList.remove("show");
        return;
    } else {
        task_list.classList.add("show");
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
            taskContainer = document.createElement('div');
            taskContainer.classList.add("task-container");
            task_list.appendChild(taskContainer);

            taskStage = document.createElement('div');
            taskCards = document.createElement('div');
            taskCards.classList.add("task-cards");
            taskStage.classList.add("task-stage");

            taskContainer.appendChild(taskStage);
            taskContainer.appendChild(taskCards);

            taskStage.innerHTML = stage.designation;



            console.log(stage);
            stage.bugs.forEach(bug => {


                taskCardTemplate = document.getElementById("task-card").content;

                copyTemplate = document.importNode(taskCardTemplate, true);
                taskTitle = copyTemplate.querySelector(".title");
                taskDeadline = copyTemplate.querySelector(".deadline");
                taskPriority = copyTemplate.querySelector(".priority");


                taskTitle.innerHTML = bug.designation; // this needs to be a title
                //taskDeadline.innerHTML = bug.deadline;
                taskPriority.classList.add(`p${bug.priority_id}`);

                taskCards.appendChild(copyTemplate);

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
        overlayxy.className = ""
        overlayxy.innerHTML = "";

        sidebar.classList.add("hide");

        chrome.runtime.sendMessage({
            message: "takeScreenshot"
        }, response => {

            if (response.message === "error")
                throw response.error;

            if (response.message !== "ok")
                throw "Something went wrong with the screenshot!";

            bug_details.screenshot = response.payload;

            overlayxy.classList.add("show"); // start to get mark details process
        });

    } catch (error) {
        console.error(error);
        bug_details.screenshot = "";

        if (sidebar.classList.contains("hide"))
            sidebar.classList.remove("hide");
    }

});

overlayxy.addEventListener('click', event => {

    event.stopImmediatePropagation();

    if (overlayxy.classList.contains("lock"))
        return;



    console.log(event);



    overlayxy.classList.add("lock"); // lock so it can't trigger again unintentionally


    if (sidebar.classList.contains("hide")) // show sidebar again
        sidebar.classList.remove("hide"); // TODO disable sidebar controls maybe????


    overlayxy.classList.add("mark")

    // NEXT add a marker to the overlay just for show
    let clientX = event.clientX; // coordinates relative to what user sees on screen
    let clientY = event.clientY;

    let pageX = event.pageX; // coordinates relative to the top of the page(it considers scroll)
    let pageY = event.pageY;

    addMark({ x: clientX, y: clientY });

    // NEXT oppen bug form
    bug_menu.classList.add("show");

    bug_details.mark_coords = { x: clientX, y: clientY }


    getSelector({ x: pageX, y: pageY })

});


bug_form.addEventListener("submit", event => {
    event.preventDefault()

    Array.prototype.forEach.call(event.target.elements, (element) => {

        if (element.id === "bug-name") {
            console.log({ name: element.value });
            bug_details.designation = element.value
        }

        if (element.id === "bug-description") {
            console.log({ desc: element.value });
            bug_details.description = element.value
        }

        if (element.type === "radio")
            if (element.checked == true) {
                console.log({ selected: element.value });
                bug_details.priority_id = element.value
            }

    });

    bug_details.resolution = getScreenInfo();

    bug_details.selector = getSelector();


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

            // Default state

            bug_details = {
                screenshot: "",
                designation: "",
                description: "",
                priority_id: "",
                selector: "",
                resolution: "",
                mark_coords: ""
            };

            sidebar.className = "open";
            overlayxy.className = "";
            overlayxy.innerHTML = "";
            bug_menu.className = "";
        });

    } catch (error) {
        console.error(error);
    }


});

bug_form.addEventListener("reset", event => {

    // Default state

    bug_details = {
        screenshot: "",
        designation: "",
        description: "",
        priority_id: "",
        selector: "",
        resolution: "",
        mark_coords: ""
    };

    sidebar.className = "open";
    overlayxy.className = "";
    overlayxy.innerHTML = "";
    bug_menu.className = "";

});




//------ Event Listeners ------//


function openSidebar() {
    logo.classList.add("open");
    task_button.classList.add("show");
    admin_button.classList.add("show");
    project_button.classList.add("show");
    add_button.classList.add("show");
}

function closeSidebar() {
    logo.classList.remove("open");
    task_button.classList.remove("show");
    admin_button.classList.remove("show");
    project_button.classList.remove("show");
    add_button.classList.remove("show");
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