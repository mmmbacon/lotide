const eqArrays = function(arr1, arr2) {

  let equal = true;

  //Check to see if the length matches first
  if (arr1.length !== arr2.length) {
    equal = false;
  }

  //Then iterate the list and compare each index
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
    }
  }

  //Return equality
  return equal;
};

const assertArraysEqual = function(actual, expected) {

  let equal = true;

  //Check to see if the length matches first
  if (actual.length !== expected.length) {
    equal = false;
  }

  //Then iterate the list and compare each index
  for (let i in actual) {
    if (actual[i] != expected[i]) {
      equal = false;
    }
  }

  //Log the assertion
  if (equal) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(arr) {

  let flattened = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let i of item) {
        flattened.push(i);
      }
    } else {
      flattened.push(item);
    }
  }

  return flattened;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
