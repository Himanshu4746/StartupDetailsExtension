/* alert(document.domain); */
//document.write();
document.addEventListener('DOMContentLoaded', function() {
var newdata;
chrome.storage.sync.get('pop_href', function (data) {
    //retrive and use your data here using variable "data.pop_href"
	//alert(data.pop_href);
	newdata=data.pop_href;
	//data
	//console.log(data);
	
	/* document.getElementById('x').innerHTML=JSON.stringify(newdata); */
	document.getElementById('log').src=newdata[0].image;
	document.getElementById('name').innerHTML=newdata[0].title;
	document.getElementById('desc').innerHTML=newdata[0].description;
	document.getElementById('url').href=newdata[0].url;
	document.getElementById('loc').innerHTML=newdata[0].location;
	document.getElementById('loc').children[0].target="_blank";

	//var name=document.getElementByClassName("js-startup_name u-fontSize28 u-fontWeight600 u-colorGray3 s-vgBottom0_5").innerTEXT;
	//<h1 class="js-startup_name u-fontSize28 u-fontWeight600 u-colorGray3 s-vgBottom0_5">Yelp</h1>
	
	
	
});

var btn=document.getElementById('postButton');
btn.addEventListener('click',function()
  {
	var url = "http://app.crowdproduct.com/api/product";
	var method = "POST";
	var postData =JSON.stringify(newdata);
	console.log(postData.toString());
	/* {"body":[
		{"title":},
		{"description":},
		{"image":},
		{"url":},
		{"location":}
	]	
	}
	"; */

	// You REALLY want async = true.
	// Otherwise, it'll block ALL execution waiting for server response.
	var async = true;

	var request = new XMLHttpRequest();

	// Before we send anything, we first have to say what we will do when the
	// server responds. This seems backwards (say how we'll respond before we send
	// the request? huh?), but that's how Javascript works.
	// This function attached to the XMLHttpRequest "onload" property specifies how
	// the HTTP response will be handled. 
	request.onload = function () {

	   // Because of javascript's fabulous closure concept, the XMLHttpRequest "request"
	   // object declared above is available in this function even though this function
	   // executes long after the request is sent and long after this function is
	   // instantiated. This fact is CRUCIAL to the workings of XHR in ordinary
	   // applications.

	   // You can get all kinds of information about the HTTP response.
	   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
	   var data = request.responseText; // Returned data, e.g., an HTML document.
	}

	request.open(method, url, async); 

	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	// Or... request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
	// Or... whatever

	// Actually sends the request to the server.
	request.send(postData);
	console.log(request.responseText);
	  
  });

});
////////
//chrome.storage.sync.get('pop_href', function (data) {
/*     //retrive and use your data here using variable "data.pop_href"
	//alert(data.pop_href);
	var data=data.pop_href;
	//data
	//console.log(data);
	document.getElementById('x').innerHTML=data;

}); */
////////
/* var port = chrome.extension.connect({name: "Sample Communication"});
	port.postMessage("Hi BackGround");
	port.onMessage.addListener(function(msg) {
			console.log("message recieved"+ msg);
}); */