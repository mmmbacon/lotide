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

const letterPositions = function(sentence) {
  const results = {};
  const joined = sentence.split(" ").join("");

  for (const i in joined) {
    if (results[joined[i]]) {
      results[joined[i]].push(i);
    } else {
      results[joined[i]] = [i];
    }
  }

  return results;
};

//Test case
assertArraysEqual(letterPositions("hello")["h"],[0]);
assertArraysEqual(letterPositions("hello")["e"],[1]);
assertArraysEqual(letterPositions("hello")["l"],[2,3]);
assertArraysEqual(letterPositions("hello")["o"],[4]);

