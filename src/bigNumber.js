/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+

Helper functions for big numbers. The numbers are represented as array where the
every element represents one decimal digit. The least siginficant digit is at
position 0.
*/

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

function arrayToString(value) {
  var ret = "";

  for (var i in value) {
    var idx = value.length-1-i;
    ret += value[idx];
  }
  
  return ret;
}

