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

function addBig(left, right) {
  var ret = [];

  var carry = 0;
  for (var i = 0; i < Math.max(left.length, right.length); i++) {
    var leftValue = left.length > i ? left[i] : 0;
    var rightValue = right.length > i ? right[i] : 0;

    var digit = leftValue + rightValue + carry;
    var carry = Math.floor(digit / 10);
    digit = digit % 10;

    ret.push(digit);
  }
  if (carry != 0) {
    ret.push(carry);
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
  
  var pos = arcEnd(step);
  var x2 = radius * pos[0];
  var y2 = radius * pos[1];
  
  var start = "L0," + -radius;
  var arc = "A" + radius + "," + radius + " 0 " + largeArch + ",1 " + x2 + "," + y2;
  var path = "M0,0 " + start + " " + arc + " z";
  
  return path;
}

function earthAge(secondsFrom0) {
  var fromBoomTo0 = [0,0,0,0,0,0,0,0,0,8,4,0,8,6,2,3,4,1];
  var from0ToNow = numberToArray(secondsFrom0);
  return addBig(fromBoomTo0, from0ToNow);
}

function arrayToString(value) {
  var ret = "";

  for (var i in value) {
    var idx = value.length-1-i;
    ret += value[idx];
  }
  
  return ret;
}

