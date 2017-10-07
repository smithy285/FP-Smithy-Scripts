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

// Max avatar size
var forumavatars = document.getElementsByClassName( "avatar_image" );
for ( var i = 0; i < forumavatars.length; ++i )
{
    forumavatars[i].style.maxWidth = "80px";
    forumavatars[i].style.maxHeight = "160px";
}

// Remove titles
var forumtitles = document.getElementsByClassName( "usertitle" );
for ( var i = 0; i < forumtitles.length; ++i )
{
    forumtitles[i].parentNode.removeChild( forumtitles[i] );
    forumtitles[i].remove();
}
