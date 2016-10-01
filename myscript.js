/* alert(document.domain); */
/* chrome.runtime.sendMessage(document.getElementsByTagName('body')[0].innerText); */
/* chrome.runtime.sendMessage(document.getElementsByClassName('show')[0].innerText); */
/* var temp=document.getElementsByClassName("show")[0].innerText; */
//<h1 class="js-startup_name u-fontSize28 u-fontWeight600 u-colorGray3 s-vgBottom0_5">Yelp</h1>
//<h2 class="js-startup_high_concept u-colorGray6 u-fontSize16 u-fontWeight400"><p>Connecting people with great local businesses</p></h2>
/* <span class="js-location_tags">
<a href="https://angel.co/san-francisco" class="tag">San Francisco</a>
</span> */
/* <div class="company-logo">
<img alt="Yelp logo" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/32689-8d123cdd413d5c19be8bf8cc777acd69-medium_jpg.jpg?buster=1326842934">
</div> */

var temp=document.getElementsByClassName("company-logo")[0].children[0].src;
var temp2=document.getElementsByClassName("js-startup_name")[0].innerHTML.trim();
var temp3=document.getElementsByClassName("js-startup_high_concept")[0].innerHTML.trim();
var temp4=document.getElementsByClassName("js-location_tags")[0].innerHTML.trim();
var temp5=document.getElementsByClassName("company_url")[0].href;
var body=[{"title":temp2,"description":temp3,"image":temp,"url":temp5,"location":temp4}];


chrome.storage.sync.set({'pop_href': body}, function () {
			//alert('save pop_href successful');
});




chrome.runtime.sendMessage(temp);

//////

/*var list_h1 = document.getElementsByTagName('h1');
var name;
for (var i = 0; i < list_h1.length; i++) {
	if(list_h1[i].className.match(/js-startup_name[-a-zA-z ]*//*g)){                  //remove /*  from this line
		name = list_h1[i].innerText;
		console.log(name);
	}
}
chrome.storage.sync.set({
		'pop_href': temp}, function () {
});
*/

//////

/* chrome.runtime.sendMessage(document.getElementsByClassName("show")[0].innerText); */