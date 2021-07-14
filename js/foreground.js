//TODO need to integrate in an iframe


//** Sidebar and buttons */

sidebar = document.getElementById("sidebar")


add_menu = document.getElementById("add-menu")
task_details = document.getElementById("task-details")
task_list = document.getElementById("task-list")
logo = document.getElementById("logo")
task_button = document.getElementById("task-button")
admin_button = document.getElementById("admin-button")
project_button = document.getElementById("project-button")
add_button = document.getElementById("add-button")
overlayxy = document.getElementById("overlay");

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
    //return;

    if (task_list.classList.contains("open")) {
        task_list.classList.remove("open");
        return;
    } else {
        task_list.classList.add("open");
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

    if (sidebar.classList.contains("hide"))
        sidebar.classList.remove("hide");
    else
        sidebar.classList.add("hide");


    chrome.runtime.sendMessage({
        message: "takeScreenshot"
    }, response => {

        if (response.message === "error") {
            console.error(response);
            return;
        }

        // let screenshot = response.payload;


        overlayxy.classList.add("show");














    });


});

overlayxy.addEventListener('click', event => {

    console.log(event);

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