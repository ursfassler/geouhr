/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+
*/

function debug(text) {
  var debug = document.getElementById( "debug" );
  debug.firstChild.nodeValue = text;
}

function init(evt){
  timer();
  setInterval(timer, 1000);
}

function timer() {
  var seconds = secondsSince0(new Date());
  var digits = earthAge(seconds);
  
  debug(arrayToString(digits));
  
//  document.getElementById("secondCircle").beginElement();
  
  for (var digit = 0; digit < digits.length; digit++) {
    var radius = 10 * (digit+2);
    var path = pieCode(radius, digits[digit]);
    var id = "arc" + (digit+1);
    document.getElementById(id).setAttribute("d", path);
  }
  
}

