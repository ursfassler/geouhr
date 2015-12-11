/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+

Calculation for the earth age with help of bigNumber.
*/

function earthAge(secondsFrom0) {
  var fromBoomTo0 = [1,4,3,2,6,8,0,4,8,0,0,0,0,0,0,0,0,0];
  fromBoomTo0.reverse();
  var from0ToNow = numberToArray(secondsFrom0);
  return addBig(fromBoomTo0, from0ToNow);
}

function secondsSince0(date) {
  var secondsSince1970 = Math.round(date.getTime() / 1000);
  var secondsFrom0To1970 = 62167219200;
  return secondsFrom0To1970 + secondsSince1970;
}

