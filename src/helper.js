/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+
*/

function secondsSince0(date) {
  var secondsSince1970 = Math.round(date.getTime() / 1000);
  var secondsFrom0To1970 = 62167219200;
  return secondsFrom0To1970 + secondsSince1970;
}

function numberToArray(value) {
  if (value < 0) {
    throw new Error("number has to be at least 0");
  }

  var ret = [];

  while (value > 0) {
    var digit = value % 10;
    ret.push(digit);
    value = Math.floor(value / 10);
  }
  
  return ret;
}

function arcEnd(value) {
  var ends = [
    [ 0.000000000, -1.000000000],
    [ 0.587785252, -0.809016994],
    [ 0.951056516, -0.309016994],
    [ 0.951056516,  0.309016994],
    [ 0.587785252,  0.809016994],
    [ 0.000000000,  1.000000000],
    [-0.587785252,  0.809016994],
    [-0.951056516,  0.309016994],
    [-0.951056516, -0.309016994],
    [-0.587785252, -0.809016994],
  ];
  return ends[value];
}

function pieCode(radius, step) {
  var largeArch = step>5 ? 1 : 0;
  var radius = radius;
  
  var pos = arcEnd(step);
  var x2 = radius * pos[0];
  var y2 = radius * pos[1];
  
  var start = "L0," + -radius;
  var arc = "A" + radius + "," + radius + " 0 " + largeArch + ",1 " + x2 + "," + y2;
  var path = "M0,0 " + start + " " + arc + " z";
  
  return path;
}

function earthAge(secondsFrom0) {
  var age = [0,0,0,0,0,0,0,0,0,0,0,6,5,6,0,5,4,1];
  var offset = numberToArray(secondsFrom0);
  for (var i = 0; i < offset.length; i++) {
    age[i] = offset[i];
  }
  return age;
}

function arrayToString(value) {
  var ret = "";

  for (var i in value) {
    var idx = value.length-1-i;
    ret += value[idx];
  }
  
  return ret;
}

