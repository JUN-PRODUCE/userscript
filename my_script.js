// ==UserScript==
// @name         Auto Login Click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *localNAS*
// @match        *epauth.tepco.co.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=11.5
// @grant        none
// ==/UserScript==

// (function() {
//     'use strict';
//     window.onload = function(){
//         document.querySelector('.submit input:nth-child(1)').click();
//     };
// })();

//setTimeout(beginclick,30000);
window.onload=function(){
  setInterval(autoClick,100);
}

function autoClick(){
  //TEPCO 東京電力
  if(document.getElementsByClassName("login-container").length>0){
  document.getElementsByClassName("login-container")[0].click();
  }
  //TEPCO 東京電力
  else if(document.getElementsByClassName("login-btn qStr submit").length>0){
  document.getElementsByClassName("login-btn qStr submit")[0].click();
  }
  //QNAP
  else if(document.getElementsByClassName("btn btn-block btn-brand form-component").length>0){
  document.getElementsByClassName("btn btn-block btn-brand form-component")[0].click();
}
}
