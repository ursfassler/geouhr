/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+

Helper functions to create arcs paths for SVG paths.
*/

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

