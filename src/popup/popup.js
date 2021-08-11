var div = document.createElement('div'),
    out = document.createElement('div'),
    log = document.createElement('div'),
    loginForm = document.createElement('form');


div.id = "main";

log.id = 'login';
log.innerHTML = 'login';

out.id = 'logout';
out.innerHTML = 'logout';

loginForm.id = 'loginForm';


loginForm.innerHTML =
    "<input type='text' name='username' id='username' class='input' placeholder='username' required/>" +
    "<input type='password' name='password' id='password' placeholder='password' class='input' required/>" +
    "<input type='submit' id='loginButton' value='Login' />";


// append the buttons and form on main-div
div.appendChild(log);
div.appendChild(loginForm);

// append main-div on the body
document.body.appendChild(out);
document.body.appendChild(div);


// On button click send a message to the service worker for login and update popup interface
document.querySelector('#loginButton').addEventListener('click', event => {
    event.preventDefault();

    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    chrome.runtime.sendMessage({
        message: "login",
        payload: {
            username: uname,
            password: pass
        }
    }, response => {

        switch (response.message) {

            case "login":
                loginForm.innerHTML = "Successfully logged in!";
                out.style.display = 'block';
                log.style.display = "none";
                break;

            case "error":
                loginForm.innerHTML += `Error: ${response.error}.`;
                break;

            default:
                loginForm.innerHTML += "Something went wrong, try again!";
                break;
        }

    });


});


// On button click send a message to the service worker for logout and update popup interface
document.querySelector('#logout').addEventListener('click', () => {

    chrome.runtime.sendMessage({
        message: "logout"
    }, response => {

        switch (response.message) {

            case "logout":
                out.style.display = 'none';
                break;

            case "error":
                loginForm.innerHTML += `Error: ${response.error}.`;
                break;
        }

        log.style.color = '#888';
        loginForm.innerHTML = "Successfully logged out!";
        location.reload();

    });

});

// Check the status of login, if a session is active modify the interface otherwise do nothing
chrome.runtime.sendMessage({
        message: "logged"
    },
    response => {
        switch (response.message) {

            case "logged":
                loginForm.innerHTML = "You are logged in!";
                out.style.display = 'block';
                log.style.display = "none";
                return;
                break;

            case "error":
                loginForm.innerHTML += `Error ${response.error}.`;
                break;

            default:
                out.style.display = 'none';
                break;
        }
    });