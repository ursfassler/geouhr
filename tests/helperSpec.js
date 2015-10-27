/*
Copyright 2015 Urs Fässler, www.bitzgi.ch
SPDX-License-Identifier:	GPL-3.0+
*/

describe("secondsSince0", function() {

  it("should return the seconds since the year 0", function() {
    expect(secondsSince0(new Date("0000-01-01T00:00:00Z"))).toEqual(0);
    expect(secondsSince0(new Date("0000-01-01T00:00:01Z"))).toEqual(1);
    expect(secondsSince0(new Date("0000-01-02T00:00:00Z"))).toEqual(24*60*60);
    expect(secondsSince0(new Date("1970-01-01T00:00:00Z"))).toEqual(62167219200);
    expect(secondsSince0(new Date("2015-10-22T00:00:42Z"))).toEqual(63612691242);
  });

});

describe("numberToArray", function() {

  it("should return a given number as array of digits", function() {
    expect(numberToArray(123)).toEqual([3, 2, 1]);
    expect(numberToArray(10)).toEqual([0, 1]);
    expect(numberToArray(63612691242)).toEqual([2, 4, 2, 1, 9, 6, 2, 1, 6, 3, 6]);
  });

  it("should throw an exception if the argument is lower tahn 0", function() {
    expect(function() {
      numberToArray(-1);
    }).toThrowError("number has to be at least 0");
  });
  
});

describe("add big numbers", function() {

  it("should return an array as big as the biggest", function() {
    expect(addBig([], [])).toEqual([]);
    expect(addBig([0], [0])).toEqual([0]);
    expect(addBig([0, 0, 0], [0])).toEqual([0, 0, 0]);
    expect(addBig([0], [0, 0, 0])).toEqual([0, 0, 0]);
  });

  it("should add two numbers", function() {
    expect(addBig([3], [2])).toEqual([5]);
    expect(addBig([3, 1, 9], [2, 3])).toEqual([5, 4, 9]);
    expect(addBig([6], [7])).toEqual([3, 1]);
    expect(addBig([5, 9, 9, 9], [5])).toEqual([0, 0, 0, 0, 1]);
    expect(addBig([5], [5, 9, 9, 9])).toEqual([0, 0, 0, 0, 1]);
  });

});

describe("earth age", function() {

  it("should return the age of the world in seconds as array", function() {
    expect(earthAge(0)).toEqual([0,0,0,0,0,0,0,0,0,8,4,0,8,6,2,3,4,1]);
    expect(earthAge(123456789)).toEqual([9,8,7,6,5,4,3,2,1,8,4,0,8,6,2,3,4,1]);
    expect(earthAge(63612691242)).toEqual([2,4,2,1,9,6,2,1,6,1,1,1,8,6,2,3,4,1]);
  });

});

describe("calculating the arc end position", function() {

  it("should return the arc end position for all 10 values", function() {
    for (var i = 0; i < 10; i++) {
      var angle = Math.PI*2 * i/10 - Math.PI/2;
      
      expect(arcEnd(i)[0]).toBeCloseTo(Math.cos(angle), 9);
      expect(arcEnd(i)[1]).toBeCloseTo(Math.sin(angle), 9);
    }
  });

});

describe("path code for a SVG pie", function() {

  it("should return a string which draws an SVG pie", function() {
    expect(pieCode(20, 0)).toEqual("M0,0 L0,-20 A20,20 0 0,1 0,-20 z");
    expect(pieCode(10, 5)).toEqual("M0,0 L0,-10 A10,10 0 0,1 0,10 z");
  });

});

describe("convert an array number to a string", function() {

  it("should return a string from a array number", function() {
    expect(arrayToString([])).toEqual("");
    expect(arrayToString([0])).toEqual("0");
    expect(arrayToString([3,2,1,0])).toEqual("0123");
    expect(arrayToString([0,1,2,3,4,5,6,7,8,9])).toEqual("9876543210");
  });

  it("should not change the passed reference", function() {
    var value = [1,2,3];
    
    arrayToString(value);
    
    expect(value).toEqual([1,2,3]);
  });

});

