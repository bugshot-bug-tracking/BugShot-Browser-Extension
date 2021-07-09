//TODO need to integrate in an iframe

// elements needed for sidebar
sidecont = document.createElement('div');
sidebar = document.createElement('div');
logo = document.createElement('div');

// elements used in sidebar
tasks = document.createElement('div');
adminPannel = document.createElement('div')
projectPannel = document.createElement('div')
add = document.createElement('div');

// initialize id for div's
sidecont.id = "sidecont";
sidebar.id = "sidebarbug";
logo.id = "bugshot-logo";

tasks.id = "tasks";
adminPannel.id = "adminPannel";
projectPannel.id = "projectPannel";
add.id = "add";


// add each div to apropriate location
document.body.appendChild(sidecont);
sidecont.appendChild(sidebar);
sidebar.appendChild(logo);


sidebar.appendChild(tasks);
sidebar.appendChild(adminPannel);
sidebar.appendChild(projectPannel);
sidebar.appendChild(add);

closeSidebar();


//TODO move image to css for consistency
logo.innerHTML = `
    <figure>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <defs>
                <style>
                    .x{fill:#18d992;}
                </style>
            </defs>
            <path class="x" d="M234.3,299.068a7.225,7.225,0,0,0-5.29-5.419v3.508h-3.266v-3.508a7.224,7.224,0,0,0-5.29,5.419h3.424v3.345h-3.424a7.224,7.224,0,0,0,5.29,5.419v-3.508h3.266v3.508a7.224,7.224,0,0,0,5.29-5.419h-3.424v-3.345Z" transform="translate(-207.375 -280.741)"/>
            <path class="x" d="M244.385,267.9A10.534,10.534,0,0,1,253,276.731h3.628v-3.907l5.644-5.782a1.7,1.7,0,0,0,0-2.365l-6.122-6.272-2.309,2.365,4.968,5.09L255,269.766l-4.968-5.09a1.612,1.612,0,0,0-1.154-.49h-4.49Z" transform="translate(-222.752 -258.404)"/>
            <path class="x" d="M256.63,321.488v-3.907H253a10.533,10.533,0,0,1-8.617,8.828v3.717h4.49a1.613,1.613,0,0,0,1.154-.49l4.968-5.09,3.814,3.907-4.968,5.09,2.309,2.366,6.122-6.272a1.7,1.7,0,0,0,0-2.366Z" transform="translate(-222.752 -295.909)"/>
            <path class="x" d="M202.237,326.409a10.533,10.533,0,0,1-8.617-8.828h-3.628v3.907l-5.645,5.782a1.7,1.7,0,0,0,0,2.366l6.122,6.272,2.309-2.366-4.968-5.09,3.814-3.907,4.968,5.09a1.614,1.614,0,0,0,1.155.49h4.49Z" transform="translate(-183.87 -295.909)"/>
            <path class="x" d="M189.992,272.824v3.907h3.628a10.533,10.533,0,0,1,8.617-8.828v-3.717h-4.49a1.613,1.613,0,0,0-1.155.49l-4.968,5.09-3.814-3.907,4.968-5.09L190.47,258.4l-6.122,6.272a1.7,1.7,0,0,0,0,2.365Z" transform="translate(-183.87 -258.404)"/>
        </svg>
    </figure>
    `


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

tasks.addEventListener('click', event => {

    chrome.runtime.sendMessage({
        message: "checkProject",
    }, response => {
        console.log(response);
        console.log("I received something!");
    });

})

adminPannel.addEventListener('click', event => {

    chrome.runtime.sendMessage({
        message: "openAdminPannel"
    }, response => {
        if (response.message === "ok")
            console.log("Oppened admin pannel in new tab.");
    });
})

projectPannel.addEventListener('click', event => {

    chrome.runtime.sendMessage({
        message: "openProjectPannel"
    }, response => {
        if (response.message === "ok")
            console.log("Oppened project pannel in new tab.");
    });

})

add.addEventListener('click', event => {

    chrome.runtime.sendMessage({
        message: "test"
    }, response => {
        console.log("I received something!");
    });

    // make sidecont hidden for the screenshot
})


//------ Event Listeners ------//




function openSidebar() {
    tasks.style.display = "block";
    adminPannel.style.display = "block";
    projectPannel.style.display = "block";
    add.style.display = "block";
}

function closeSidebar() {
    tasks.style.display = "none";
    adminPannel.style.display = "none";
    projectPannel.style.display = "none";
    add.style.display = "none";
}