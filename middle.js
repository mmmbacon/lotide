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

const getMidValue = function(length) {
  if (length % 2 === 0) {
    return length / 2;
  }
  return Math.ceil(length / 2);
};

const middle = function(arr) {

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    //return middle element
    return [getMidValue(arr.length)];
  }
  //return middle two elements3
  return [getMidValue(arr.length), getMidValue(arr.length) + 1];
};

//Test case
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);