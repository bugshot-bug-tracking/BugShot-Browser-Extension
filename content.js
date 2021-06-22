chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == "taken") {
      docReady(function () {

        grey = document.createElement('div');
        grey.id = "overlayxy";
        document.body.appendChild(grey);

        document.documentElement.addEventListener("click", findDocumentCoords, {
          once: true
        })

      });
      sendResponse({
        confirmation: "oke"
      });
    }
    if (request.action == "logged") {
      docReady(function () {
        main();
      });
      sendResponse({
        confirmation: "oke"
      });
    }
    if (request.action == "logout") {
      docReady(function () {
        if (document.getElementById("sidecont")) {
          sidecont.style.display = 'none';
        }
      });
      sendResponse({
        confirmation: "oke"
      });
    }
  });



  function truncate(str, n){
    // return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  };

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

// function getinfo() {
//   console.log("navigator.appVersion:", navigator.appVersion);
//   console.log("navigator.userAgent:", navigator.userAgent);
//   console.log("navigator.platform:", navigator.platform);
//   console.log("navigator:", navigator);
// }


function findDocumentCoords(event) {
  event.stopImmediatePropagation();

  if (document.getElementById("overlayxy")) {
    var overlayxy = document.getElementById("overlayxy");
    overlayxy.innerHTML = " ";
    overlayxy.style.display = "none";
    document.body.removeChild(overlayxy);
  }

  // getinfo();

  //pos for web
  var xpos1 = event.pageX;
  var ypos1 = event.pageY;
  //pos for screenshot
  var xpos = event.clientX;
  var ypos = event.clientY;
  var element = document.elementFromPoint(xpos, ypos);
  var selector = truncate(JSON.stringify(element.outerHTML), 120);
  // console.log(document.elementsFromPoint(xpos, ypos))


  console.log(selector)

  svgdiv = document.createElement('div');
  svgdiv.id = "svgdiv";
  svgdiv.style.cssText = 'top:' + (ypos1 - 53) + 'px;left:' + (xpos1 - 14) + 'px';
  // svgdiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;z-index:99999999;margin:0;padding:0;top:' + (ypos - 38) + 'px;left:' + (xpos - 93) + 'px; onclick="go()"><?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style>.cls-1{fill:#2d3e50;}</style></defs><title>x</title><path class="cls-1" d="M112.41113,46.2215A48.72739,48.72739,0,0,0,65.72991,2.34771H65.727c-.57663-.02039-1.15036-.032-1.727-.032s-1.15036.01164-1.727.032h-.00292A48.72739,48.72739,0,0,0,15.58887,46.2215a49.27442,49.27442,0,0,0,.65527,14.01689l.05533.332c.0262.12523.09028.466.22425.996l.04659.19512c.09028.40481.21259.86494.35239,1.35712a39.52682,39.52682,0,0,0,6.608,13.0005c8.54064,11.16789,19.523,28.318,37.81155,48.39211a3.59728,3.59728,0,0,0,5.31548,0C84.94629,104.43711,95.92865,87.287,104.46929,76.11915a39.52682,39.52682,0,0,0,6.608-13.0005c.1398-.49218.26211-.95231.35239-1.35712l.04659-.19512c.134-.53.19805-.87079.22425-.996l.05533-.332A49.27441,49.27441,0,0,0,112.41113,46.2215ZM64.00036,80.96257A29.33469,29.33469,0,1,1,93.33506,51.62788,29.33108,29.33108,0,0,1,64.00036,80.96257Z"/></svg>';
  document.body.appendChild(svgdiv);
  svgdiv.classList.add("normal");

  // chrome.storage.local.set({'color': "185fd9"});



  chrome.runtime.sendMessage({
    greeting: "capturepos",
    xpos,
    ypos,
    selector,
    xpos1,
    ypos1
  }, function (response) {
    var x = document.getElementById("sidecont");
    x.style.display = "block";
    var y = document.getElementById("sidebarbug");
    y.style.display = "block";
    console.log(response.farewell);
  });


};

// function getselector(e) {
//   if (document.getElementById("overlayxy")) {
//     overlayxy = document.getElementById("overlayxy");
//     document.body.removeChild(overlayxy);
//   }
//   docReady(function () {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//       text = target.textContent || target.innerText;
//     console.log(target);
//   });
// }

function capture(format, prioid) {
  console.log(prioid);
  chrome.runtime.sendMessage({
    greeting: "capture",
    comment: format,
    title: document.title,
    url: window.location.href,
    prio: prioid,
  }, function (response) {
    console.log(response.farewell);

  });
};

//logged in? - url in projects?
chrome.runtime.sendMessage({
  greeting: "logged",
  url: window.location.href,
}, function (response) {
  console.log(response.farewell);
  if (response.farewell == "logged")
  {
    main();
  }
  else
  {
    if (document.getElementById("sidecont")) {
      sidecont.style.display = 'none';
    }
  }
});

function main() {
sidecont = document.createElement('div');
sidecont.id = "sidecont";
sidebar = document.createElement('div');
sidebar.id = "sidebarbug";
dark = document.createElement('div');
dark.id = "dark";
dark.innerHTML = '<figure><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style>.x{fill:#18d992;}</style></defs><path class="x" d="M234.3,299.068a7.225,7.225,0,0,0-5.29-5.419v3.508h-3.266v-3.508a7.224,7.224,0,0,0-5.29,5.419h3.424v3.345h-3.424a7.224,7.224,0,0,0,5.29,5.419v-3.508h3.266v3.508a7.224,7.224,0,0,0,5.29-5.419h-3.424v-3.345Z" transform="translate(-207.375 -280.741)"/><path class="x" d="M244.385,267.9A10.534,10.534,0,0,1,253,276.731h3.628v-3.907l5.644-5.782a1.7,1.7,0,0,0,0-2.365l-6.122-6.272-2.309,2.365,4.968,5.09L255,269.766l-4.968-5.09a1.612,1.612,0,0,0-1.154-.49h-4.49Z" transform="translate(-222.752 -258.404)"/><path class="x" d="M256.63,321.488v-3.907H253a10.533,10.533,0,0,1-8.617,8.828v3.717h4.49a1.613,1.613,0,0,0,1.154-.49l4.968-5.09,3.814,3.907-4.968,5.09,2.309,2.366,6.122-6.272a1.7,1.7,0,0,0,0-2.366Z" transform="translate(-222.752 -295.909)"/><path class="x" d="M202.237,326.409a10.533,10.533,0,0,1-8.617-8.828h-3.628v3.907l-5.645,5.782a1.7,1.7,0,0,0,0,2.366l6.122,6.272,2.309-2.366-4.968-5.09,3.814-3.907,4.968,5.09a1.614,1.614,0,0,0,1.155.49h4.49Z" transform="translate(-183.87 -295.909)"/><path class="x" d="M189.992,272.824v3.907h3.628a10.533,10.533,0,0,1,8.617-8.828v-3.717h-4.49a1.613,1.613,0,0,0-1.155.49l-4.968,5.09-3.814-3.907,4.968-5.09L190.47,258.4l-6.122,6.272a1.7,1.7,0,0,0,0,2.365Z" transform="translate(-183.87 -258.404)"/></svg></figure>';


document.body.appendChild(sidecont);
sidecont.appendChild(sidebar);
sidebar.appendChild(dark);


document.querySelector('#dark').addEventListener('click', function (e) {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    tasks.remove();
    add.remove();
    enableScroll();
    if (document.getElementById("addnew")) {
      addnew.remove();
    }
  } else
    sidebar.classList.add("open");
  open();

}, false);

};

function opentasks() {

  chrome.runtime.sendMessage({
      greeting: "fetchpro"
    },
    data => {
      var options = data.data;
      for (var i = 0; i < options.length; i++) {
        var opt = options[i].designation;
        var id = options[i].id;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = id;
        sel.appendChild(el);
      }
    }
  );
  addnew = document.createElement('div');
  addnew.id = "addnew";
  sidebar.prepend(addnew)

  pr = document.createElement('div');
  pr.id = "projects";
  pr.innerHTML = '<h1>Choose project:</h1>';
  sel = document.createElement('select');
  sel.id = "selpro";
  addnew.appendChild(pr);
  pr.appendChild(sel);

  sel.onchange = function () {
    console.log(this.value);
    getbugs(this.value)
  }

};

function getbugs(project) {

    if (document.getElementById("create")) {
      create = document.getElementById("create")
      create.remove(); 
  }
  if (document.getElementById("bugview")) {
    bugview = document.getElementById("bugview")
    bugview.remove(); 
}

  bugview = document.createElement('div');
  bugview.id = "bugview";
  bugview.innerHTML = '<h1>Open tasks:</h1>';

  addnew = document.getElementById("addnew")
  addnew.appendChild(bugview);

  chrome.runtime.sendMessage(
    {
      greeting: "fetchbug",
      project: project,
    },

    data => {


      // var mostRecentDate = new Date(Math.max.apply(null, data.data.map(e => {
      //   return new Date(e.created_at);
      // })));
      // var mostRecentObject = data.data.filter(e => {
      //   var d = new Date(e.created_at);
      //   return d.getTime() == mostRecentDate.getTime();
      // })[0];


      // console.log(mostRecentObject.id);
      // console.log(mostRecentDate);

      var options = data.data;
      for (var i = 0; i < options.length; i++) {
        console.log(i);
        console.log(options);
        cr2 = document.createElement('div');
        cr2.classList = "tasks";
        bugview.appendChild(cr2);


        var opt = options[i].description;
        var id = options[i].id;
        var prioid = options[i].priority_id;
        var url = options[i].url;
        var dead = options[i].deadline.split(' ')[0];
        var deadnew = dead.replace(/-/g, '.');
        // var el = document.createElement("div");
        var h1 = document.createElement("h1");
        var line = document.createElement("div");
        var hprio = document.createElement("h2");
        var hurl = document.createElement("h2");
        var hdead = document.createElement("h2");
        var prio = document.createElement("a");
        var urlel = document.createElement("a");
        var deadel = document.createElement("span");
        var details = document.createElement("a");
        switch (prioid) {
          case 1:
            console.log("test")
            prio.classList = "b1";
            prio.textContent = "Critical";
            break;
          case 2:
            prio.classList = "b2";
            prio.textContent = "Important";
            break;
          case 4:
            prio.classList = "b4";
            prio.textContent = "Minor";
            break;
            default:
              prio.classList = "b3";
              prio.textContent = "Normal";
        };

        details.href = "#";
        details.id = "optionssvg";
        line.id = "line";
        prio.classList += " priotask";
        h1.textContent = opt;
        hprio.textContent = "Priotity: ";
        hurl.textContent = "Url: ";
        hdead.textContent = "Deadline: ";
        deadel.textContent = deadnew;
        urlel.textContent = truncate(url, 40);
        urlel.href = url; 
        urlel.title = url;
        urlel.classList += " url";
        // urlel.classList = "url";

        
        // cr2.appendChild(el);
        cr2.appendChild(h1);
        cr2.appendChild(details);
        cr2.appendChild(line);
        cr2.appendChild(hprio);
        cr2.appendChild(prio);
        cr2.appendChild(hdead);
        cr2.appendChild(deadel);
        cr2.appendChild(hurl);
        cr2.appendChild(urlel);
        
      }
    });

};

let prioid;

function open() {
  if (sidebar.classList.contains("open")) {
    tasks = document.createElement('div');
    tasks.id = "tasks";
    add = document.createElement('div');
    add.id = "add";
    sidebar.appendChild(tasks);
    sidebar.appendChild(add);


    tasks.addEventListener('click', function (e) {
      if (document.getElementById("addnew")) {
        addnew.remove();
        enableScroll();
        opentasks();
      } else {
      opentasks();
      }
    });


    document.querySelector('#add').addEventListener('click', function (e) {
      e.stopImmediatePropagation()

      if (document.getElementById("addnew")) {
        addnew.remove();
        enableScroll()
      } 
      // else {

        var x = document.getElementById("sidecont");
        var y = document.getElementById("sidebarbug");

        console.log(getComputedStyle(sidecont, null).display);

        if (getComputedStyle(sidecont, null).display === "block") {
          x.style.display = "none";
          y.style.display = "none";

          docReady(function () {
            if (getComputedStyle(x, null).display === "none" && getComputedStyle(y, null).display === "none") {



              disableScroll()
              chrome.runtime.sendMessage({
                  greeting: "screen"
                },
                function (response) {

                  if (response.farewell === "saved");

                  //   docReady(function() {

                  //   grey = document.createElement('div');
                  //   grey.id = "overlayxy";
                  //   document.body.appendChild(grey);

                  //   document.documentElement.addEventListener("click", findDocumentCoords, {
                  //     once: true
                  //   })

                  // });

                });


            }
          });
        } else {
          x.style.display = "block";
        }


        addnew = document.createElement('div');
        addnew.id = "addnew";
        sidebar.prepend(addnew)
        addnew.innerHTML = '<div id="create"><h1>New Bug Report</h1><span>Project Name</span><textarea id="desc" placeholder="Describe the problem you encountered"></textarea><h2>Set priority</h2><div id="prio"><a href="#" class="b1">Critical</a><a href="#" class="b2">Important</a><a href="#" class="b3">Normal</a><a href="#" class="b4">Minor</a></div></div><div id="attach"><h2>Attach files</h2><a href="#" class="upload"><input type="file" id="dateien" name="files[]" multiple style="display: none;"/></a><div id="dateiListe"><ul id="dateiul"></ul></div></div><a href="#" id="report">Report Bug</a>';
        document.querySelector('.b1').addEventListener('click', function (e) {
          e.preventDefault();
          chrome.storage.local.set({
            'color': "f23838"
          });
          svgdiv.setAttribute("class", "")
          svgdiv.classList.add("critical");
          prioid = "1";
        }, false);
        document.querySelector('.b2').addEventListener('click', function (e) {
          e.preventDefault();
          chrome.storage.local.set({
            'color': "ffb157"
          });
          svgdiv.setAttribute("class", "")
          svgdiv.classList.add("important");
          prioid = "2";
        }, false);
        document.querySelector('.b3').addEventListener('click', function (e) {
          e.preventDefault();
          chrome.storage.local.set({
            'color': "185fd9"
          });
          svgdiv.setAttribute("class", "")
          svgdiv.classList.add("normal");
          prioid = "3";
        }, false);
        document.querySelector('.b4').addEventListener('click', function (e) {
          e.preventDefault();
          chrome.storage.local.set({
            'color': "18c0d9"
          });
          svgdiv.setAttribute("class", "")
          svgdiv.classList.add("minor");
          prioid = "4";
        }, false);
        // UI-Events erst registrieren wenn das DOM bereit ist!
        // Falls neue Eingabe, neuer Aufruf der Auswahlfunktion
        document.querySelector('.upload').addEventListener('click', function (e) {
          document.getElementById("dateien").click();
        }, false);
        document.getElementById('dateien')
          .addEventListener('change', dateiauswahl, false);
        document.getElementById('dateien')
          .addEventListener('change', dateiupload, false);


        document.querySelector('#report').addEventListener('click', function (e) {
          e.preventDefault();
          var format = document.getElementById("desc").value;
          console.log(format, prioid);
          // closeScriptureLightbox();
          capture(format, prioid);
          send();



          if (document.getElementById("create")) {
            create.remove();
          }
          if (document.getElementById("attach")) {
            attach.remove();
          }
          if (document.getElementById("report")) {
            report.remove();
          }
          addnew.innerHTML = '<div id="success"><a href="#" id="ok">Ok</a></div>';
          if (document.getElementById("success")) {
            setTimeout(timer, 4000);
            function timer() {
              addnew.remove()
              enableScroll();
            };
          }
          document.querySelector('#ok').addEventListener('click', function (e) {
            e.preventDefault();
            if (document.getElementById("addnew")) {
              enableScroll();
              addnew.remove();
            }
          }, false);

        }, false);

      // } 

    }, false);
  }

};


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
      supportsPassive = true;
    }
  }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
  passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



function dateiauswahl(evt) {
  // FileList-Objekt des input-Elements auslesen
  var files = evt.target.files;
  var fragmente = [];
  
  for (var i = 0, f; f = files[i]; i++) {
    fragmente.push('<li value="' +f.name+ '" title="' +f.name+ '">', truncate(f.name, 25), ' <span> ', getReadableFileSizeString(f.size), '</span>', '  <a role="button" class="delfiles" title="delete">x</a>', '</li>',);
  }

  document.getElementById('dateiul')
    .innerHTML += fragmente.join('');

    var delfiles = document.getElementsByClassName("delfiles");

    var removefiles = function(event){
      event.target.parentElement.remove();
      var name = event.target.parentElement.attributes['value'].value;
      var index = arr.name.indexOf(name);
      arr.data.splice(index, 1);
      arr.name.splice(index, 1);
  };
  
  for (var i = 0; i < delfiles.length; i++) {
    delfiles[i].addEventListener('click', removefiles , false);
  }
}


function getReadableFileSizeString(fileSizeInBytes) {
  var i = -1;
  var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
  do {
    fileSizeInBytes = fileSizeInBytes / 1024;
    i++;
  } while (fileSizeInBytes > 1024);

  return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
};


var arr = [];
arr.data = [];
arr.name = [];

function dateiupload(evt) {
  var dateien = evt.target.files; // FileList objekt

  // erste Datei auswählen
  var uploadDatei = dateien[0];

  var senddata = new Object();
  // Auslesen der Datei-Metadaten
  senddata.name = uploadDatei.name;
  senddata.date = uploadDatei.lastModified;
  senddata.size = uploadDatei.size;
  senddata.type = uploadDatei.type;

  for (var i = 0; i < dateien.length; i++) {
    var reader = new FileReader();
  arr.name.push(dateien[i].name)
  reader.onload = function(theFileData) {
    senddata.fileData = theFileData.target.result;       
      arr.data.push(senddata.fileData)      
    }
    reader.readAsDataURL(dateien[i]);
  };

}


function send(){

  console.log(arr)
  for (var i = 0; i < arr.data.length; i++) {
    chrome.runtime.sendMessage({
      greeting: "attachment",
      name: arr.name[i],
      b64: arr.data[i]
    },
    function (response) {

      if (response.farewell === "saved");

    });    
  }
};


