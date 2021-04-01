const takeUntil = (array, callback) => {
  const result = [];

  for (const item of array) {
    
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

//Testing
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

//Test case
assertArraysEqual(results1,[1, 2, 5, 7, 2]);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);
