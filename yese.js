// ==UserScript==
// @name        Youtube Embed Start at end
// @description Scan page for YouTube embeds and adds a long start time to the url to make it start at the end.
// @include     *
// @version     0.1
// ==/UserScript==

var button = document.createElement("Button");
button.id = "MGButton";
button.innerHTML = "Button";
  button.onclick = function(){
    var iframedata = document.getElementsByTagName("iframe");
    var i;
    var iframesource;
    var iframeid;
    var srcptime;
    var time = "&start=999999";
    for (i = 0; i < iframedata.length; i++) {  
      iframesource = iframedata[i].src;
      iframeid = iframedata[i].id;
      srcptime = iframesource + time;
      if( iframeid ) {
      document.getElementById(iframeid).src = srcptime;
      };
     };
    return false;
  };
button.style = "top:0;right:0;position:fixed";
document.body.appendChild(button);
