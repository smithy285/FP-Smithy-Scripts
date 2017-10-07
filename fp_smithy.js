// ==UserScript==
// @name           Facepunch Modifications
// @namespace      Smithy285
// @description    Change things to my preference
// @match          https://facepunch.com
// @match          https://www.facepunch.com/
// @match          http://facepunch.com/
// @match          http://www.facepunch.com/
// @include		   http://facepunch.com/*
// @include		   http://www.facepunch.com/*
// @include		   https://facepunch.com/*
// @include		   https://www.facepunch.com/*
// @version 0.1
// ==/UserScript==

function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

var forumtitles = document.getElementsByClassName( "usertitle" );
for ( var i = 0; i < forumtitles.length; ++i )
{
  removeElementsByClass( forumtitles[i] );
}
