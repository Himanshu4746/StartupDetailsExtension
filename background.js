/* alert(document.location); */
chrome.runtime.onMessage.addListener(function(msg,sender,reply){
	/* chrome.storage.sync.set({
			'pop_href': msg}, function () {
			alert('save pop_href successful');
        }
	);*/
	
	/*alert('oner');
	chrome.tabs.executeScript(null, {file: 'popup.js'});
	alert('two'); */
	alert(msg);
	
}); 
/* var views = chrome.extension.getViews({type: "popup"});
    for (var i = 0; i < views.length; i++) {
                views[i].document.getElementById('x').innerHTML="My Custom Value";
        }
 */
 
 
/*  chrome.extension.onConnect.addListener(function(port) {
  console.log("Connected .....");
  port.onMessage.addListener(function(msg) {
        console.log("message recieved"+ msg);
        port.postMessage("Hi Popup.js");
  });
}); */