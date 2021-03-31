const without = function(original, remove) {

  let filtered = [];

  //Iterate through original list and push only items that don't match to new array
  for (let o of original) {
    let match = false;

    //Check original against the removal conditions
    for (let r of remove) {
      //If it does strictly match, set matching state to false, otherwise ignore and state remains true
      if (o === r) {
        match = true;
      }
    }

    //Finally if there is no match against removal conditions, push o to the filtered array
    if (!match) {
      filtered.push(o);
    }
    
  }

  return filtered;
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

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1,2]);
assertArraysEqual(without([2, 4, 6], [2]), [4,6]);
assertArraysEqual(without([1, 2], [1]), [3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


