/*global $, jQuery, alert*/
$(document).ready(function () {
    
    "use strict";
    
    // Nice-scroll
    $("html").niceScroll();

});

var myLi = document.getElementById('main');
var myLink = document.getElementsByClassName('link');

myLink.onclick = function() {
    myLi.setAttribute('background-color','transparent');
}

