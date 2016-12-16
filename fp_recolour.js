// ==UserScript==
// @name           Facepunch Recolour
// @namespace      Smithy285
// @description    Change text colours to be more readable
// @include        http://facepunch.com/*
// @include        https://facepunch.com/*
// @include        http://*.facepunch.com/*
// @include        https://*.facepunch.com/*
// @version 0.1
// ==/UserScript==

var forumtitles = document.getElementsByClassName( "forumtitle" );
for ( var i = 0; i < forumtitles.length; ++i )
{
	//forumtitles[i].style[ "font-size" ] = "10px";
	forumtitles[i].style[ "color" ] = "#222222"; 
}
