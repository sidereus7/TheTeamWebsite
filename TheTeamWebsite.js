// JavaScript File
//
// The purpose of this file is to provide behavior for a website.

window.onload = function() {
	var okButton = $("ok");
	okButton.onclick = okayClick;
}

function okayClick() {
	alert("booyah");
}