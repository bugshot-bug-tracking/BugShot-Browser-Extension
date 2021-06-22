/* Create by Mohssine Aboutaj - 2017 */
// create the elements
var div = document.createElement('div'),
    out = document.createElement('div'),
		log = document.createElement('div'),
		reg = document.createElement('div'),
		loginForm = document.createElement('form'),
		registerForm = document.createElement('form');

// set body styles
document.body.style.color = '#fff';
document.body.style.textTransform = 'capitalize';
document.body.style.backgroundColor = "rgb(26, 32, 64)";

// set main-div styles
div.style.background = "rgba(0,0,0,0.7)";
div.style.width = '300px';
div.style.margin = '50px auto';
div.style.padding = '10px';
div.style.borderRadius = '10px';

log.style.width = "calc(50% - (5px * 2))";
log.style.padding = "5px";
log.style.textAlign = "center";
log.style.display = 'inline-block';
log.style.color = '#fff';
log.style.cursor = 'pointer';
log.id = 'login';
log.innerHTML = 'login';

reg.style.width = "calc(50% - (5px * 2))";
reg.style.padding = "5px";
reg.style.textAlign = "center";
reg.style.display = 'inline-block';
reg.style.color = '#888';
reg.style.cursor = 'pointer';
reg.id = 'register';
reg.innerHTML = 'register';

// out.style.width = "calc(50% - (5px * 2))";
out.style.margin = "10px";
out.style.padding = "5px";
out.style.textAlign = "right";
out.style.display = 'block';
out.style.color = '#fff';
out.style.cursor = 'pointer';
out.id = 'logout';
out.innerHTML = 'logout';


out.onclick = function(){

  chrome.runtime.sendMessage({
    greeting: "logout",
  }, function (response) {
    if (response.farewell = "logout")
    {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      out.style.display = 'none';
    }
    else
    {

    }
  });

	this.style.color = '#fff';
	log.style.color = '#888';
	loginForm.style.display = 'block';
  registerForm.style.display = 'none';
  loginForm.innerHTML = "Successfully logged out!";
};

// hide register form and show login form
reg.onclick = function(){
	this.style.color = '#fff';
	log.style.color = '#888';
	loginForm.style.display = 'none';
	registerForm.style.display = 'block';
};

// hide login form and show register form
log.onclick = function(){
	this.style.color = '#fff';
	reg.style.color = '#888';
	loginForm.style.display = 'block';
	registerForm.style.display = 'none';
};

// create some variables for styling
var inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#fff;padding:5px;margin:5px;",
    btnStyles = "background:red;border:none;width:100%;color:#fff;padding:5px;margin:5px;",
    forgetStyles = "color:#fff;",
    startYears = 10,
    endYears = 70,
    i;

// set loginForm styles
loginForm.style.margin = '50px 20px 20px 20px';
loginForm.id = 'loginForm';

// set the elements and styles on the form
loginForm.innerHTML = "<label>username</label><br/>" + 
                 "<input type='text' name='username' id='username' placeholder='type username' style='"+ inputStyles +"' required/><br/>" + 
                 "<label>password</label><br/>" + 
                 "<input type='password' name='pw' id='pw' placeholder='*************' style='"+ inputStyles +"' required/><br/>" + 
                 "<input type='submit' id='loginb' value='Login' style='"+ btnStyles +"' />" + 
                 "<p><a style='"+ forgetStyles +"' href='#'>forget password ?</a></p><br/>";

// set registerForm styles
registerForm.style.margin = '50px 20px 20px 20px';
registerForm.style.display = 'none';
registerForm.id = 'registerForm';

// set the elements and styles on the form
registerForm.innerHTML = "<label>first name</label><br/>" + 
			                 "<input type='text' id='first_name' placeholder='first name' style='"+ inputStyles +"' required/><br/>" + 
			                 "<label>last name</label><br/>" + 
			                 "<input type='text' id='last_name' placeholder='last name' style='"+ inputStyles +"' required/><br/>" + 
			                 "<label>e-mail</label><br/>" + 
			                 "<input type='email' id='email' placeholder='your email' style='"+ inputStyles +"' required/><br/>" + 
			                 "<label>password</label><br/>" + 
			                 "<input type='password' id='password' placeholder='*************' style='"+ inputStyles +"' required/><br/>" + 
			                 "<label>confirm password</label><br/>" + 
			                 "<input type='password' id='c_password' placeholder='*************' style='"+ inputStyles +"' required/><br/>" + 
			                 "<input type='submit' id='registerb' value='Register' style='"+ btnStyles +"' />";

// append the bottons and form on main-div

div.appendChild(log);
div.appendChild(reg);
div.appendChild(loginForm);
div.appendChild(registerForm);

// append main-div on the body
document.body.appendChild(out);
document.body.appendChild(div);


// document.getElementById("prospects_form").addEventListener('submit', function(event){event.preventDefault();});
document.querySelector('#loginb').addEventListener('click', function (e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var pw = document.getElementById("pw").value;
  chrome.runtime.sendMessage({
    greeting: "login",
    username,
    pw
  }, function (response) {
    console.log(response.farewell);
    if (response.farewell)
    {
      // loginForm.style.display = 'none';
      loginForm.innerHTML = "Successfully logged in!";
      out.style.display = 'block';
    }
    else if (response.error)
    {
      loginForm.innerHTML += "Something went wrong, try again!";
    }
    else
    {
      loginForm.innerHTML += "Something went wrong, try again!";
    }
  });
}, false);

document.querySelector('#registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var c_password = document.getElementById("c_password").value;
  chrome.runtime.sendMessage({
    greeting: "register",
    first_name,
    last_name,
    email,
    password,
    c_password
  }, function (response) {
    console.log(response.farewell);
    if (response.farewell)
    {
      // registerForm.style.display = 'none';
      registerForm.innerHTML = "Account successfully created!";
      out.style.display = 'block';      
    }
    else if (response.error)
    {
      registerForm.innerHTML += "Something went wrong, try again!";
    }
    else
    {
      registerForm.innerHTML += "Something went wrong, try again!";
    }
  });
}, false);



chrome.runtime.sendMessage({
  greeting: "logged",
}, function (response) {
  console.log(response.farewell);
  if (response.farewell == "logged")
  {
    // registerForm.style.display = 'none';
    loginForm.innerHTML = "your are logged in!";
    registerForm.innerHTML = "your are logged in!";
    out.style.display = 'block';
  }
  else
  {
    out.style.display = 'none';
  }
});