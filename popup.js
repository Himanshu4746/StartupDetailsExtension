document.addEventListener('DOMContentLoaded', function() {
var newdata;
chrome.storage.sync.get('pop_href', function (data) {
	newdata=data.pop_href;
	
	document.getElementById('log').src=newdata.image;
	document.getElementById('name').innerHTML=newdata.title;
	document.getElementById('desc').innerHTML=newdata.description;
	document.getElementById('url').href=newdata.url;
	document.getElementById('loc').innerHTML=newdata.location;
	document.getElementById('loc').children.target="_blank";	

});

var btn=document.getElementById('postButton');
btn.addEventListener('click',function()
  {
	var url = "http://app.crowdproduct.com/api/product";
	var method = "POST";
	var postData =JSON.stringify(newdata);/* "{'title':'"+newdata.title+"','description':'"+newdata.description+"','image':'"+newdata.image+"','url':'"+newdata.url+"','location':'"+newdata.location+"'}"; */
	console.log(postData);
	/* {"body":[
		{"title":},
		{"description":},
		{"image":},
		{"url":},
		{"location":}
	]	
	}
	"; */

	
	var async = true;

	var request = new XMLHttpRequest();

	
	request.onload = function () {

	   var status = request.status;
	   var data = request.responseText;
	   console.log(request.responseText);	   
	}

	request.open(method, url, async); 

	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	
	request.send(postData);
	//console.log(request.responseText);
	  
  });

});