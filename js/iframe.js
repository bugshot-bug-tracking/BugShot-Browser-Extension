/** This script is only for injecting an iframe into the page 
    and link it to the foreground.html
*/

var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    // Must be declared at web_accessible_resources in manifest.json
    iframe.src = chrome.runtime.getURL('html/foreground.html');

    // Some styles for a fancy sidebar
    iframe.style.cssText = "display: block; position: fixed; overflow: hidden; background-color: transparent; top: 0; right: 0; width: 100%; height: 100%; z-index: 9990;';"
    iframe.id = "bugshot-iframe";
    document.body.appendChild(iframe);
}