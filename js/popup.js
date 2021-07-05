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
    "<input type='submit' id='loginb' value='Login' />";


// append the buttons and form on main-div
div.appendChild(log);
div.appendChild(loginForm);

// append main-div on the body
document.body.appendChild(out);
document.body.appendChild(div);


document.querySelector('#loginb').addEventListener('click', function(e) {
    e.preventDefault();
    var username = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    chrome.runtime.sendMessage({
        greeting: "login",
        username,
        pw
    }, function(response) {
        console.log(response.farewell);
        if (response.farewell) {

            loginForm.innerHTML = "Successfully logged in!";
            out.style.display = 'block';
            log.style.display = "none"

        } else if (response.error) {
            loginForm.innerHTML += "Something went wrong, try again!";
        } else {
            loginForm.innerHTML += "Something went wrong, try again!";
        }
    });
}, false);



out.onclick = function() {

    chrome.runtime.sendMessage({
        greeting: "logout",
    }, function(response) {
        if (response.farewell = "logout") {
            out.style.display = 'none';
        }
    });

    log.style.color = '#888';
    loginForm.innerHTML = "Successfully logged out!";
    location.reload();
};



chrome.runtime.sendMessage({
    greeting: "logged",
}, function(response) {
    console.log(response.farewell);
    if (response.farewell == "logged") {
        loginForm.innerHTML = "You are logged in!";
        out.style.display = 'block';
        log.style.display = "none"
    } else {
        out.style.display = 'none';
    }
});