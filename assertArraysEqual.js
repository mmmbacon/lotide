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

module.exports = assertArraysEqual;
