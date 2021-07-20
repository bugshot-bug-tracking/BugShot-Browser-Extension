//** Sidebar and buttons */

sidebar = document.getElementById("sidebar")

bug_menu = document.getElementById("bug-menu")

logo = document.getElementById("logo")
admin_button = document.getElementById("admin-button")
project_button = document.getElementById("project-button")
add_button = document.getElementById("add-button")

overlayxy = document.getElementById("overlay");
bug_form = document.getElementById("bug-form");



bug_details = {
    screenshot: "", // URI encoded image
    designation: "", // Name of the bug
    description: "", // Description of the bug
    priority_id: "", // priority value of the bug 1 -> 4
    selector: "", // Path from doc root to the element where the marker was placed "1 > 2 > 3"
};

















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


    console.log("This is not doen yet so i disabled it.");

    } else {
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






            stage.bugs.forEach(bug => {







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

        });

        bug_details.screenshot = "";

        if (sidebar.classList.contains("hide"))
            sidebar.classList.remove("hide");
    }

});

overlayxy.addEventListener('click', event => {

    event.stopImmediatePropagation();

    if (overlayxy.classList.contains("lock"))
        return;


    if (sidebar.classList.contains("hide")) // show sidebar again
        sidebar.classList.remove("hide"); // TODO disable sidebar controls maybe????



    // NEXT add a marker to the overlay just for show
    let clientX = event.clientX; // coordinates relative to what user sees on screen
    let clientY = event.clientY;

    let pageX = event.pageX; // coordinates relative to the top of the page(it considers scroll)
    let pageY = event.pageY;

    addMark({ x: clientX, y: clientY });

    // NEXT oppen bug form



});


bug_form.addEventListener("submit", event => {

    Array.prototype.forEach.call(event.target.elements, (element) => {




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
        });

    } catch (error) {
        console.error(error);
    }

});

bug_form.addEventListener("reset", event => {








function openSidebar() {
    logo.classList.add("open");

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


    mark.classList.add("normal");
    overlayxy.appendChild(mark);
}

function getSelector(pageCoord) {
    // this is a work in progeress to get the element from page at the requested coordinates
    return "/";
    // post a message to the current tab and as response get the selector postMessage()


}