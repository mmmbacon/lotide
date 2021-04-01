const words = ["ground", "control", "to", "major", "tom"];


const map = (array, callback) => {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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

const results1 = map(words, word => word[0]);

//Test case
assertArraysEqual(results1,['g','c','t','m','t']);