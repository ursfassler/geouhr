/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+
*/

function init(evt){
  updateSeconds();
  setInterval(timer, 1000);
}

function timer() {
  document.getElementById("centerAnimation").beginElement();
}

function updateSeconds() {
  var seconds = secondsSince0(new Date());
  var digits = earthAge(seconds);
  
  writeTime(arrayToString(digits) + " Sekunden");
  
  for (var digit = 0; digit < digits.length; digit++) {
    var radius = 10 * (digit+2);
    var path = pieCode(radius, digits[digit]);
    var id = "arc" + (digit+1);
    document.getElementById(id).setAttribute("d", path);
  }
}

function writeTime(text) {
  var debug = document.getElementById("time");
  debug.firstChild.nodeValue = text;
}

