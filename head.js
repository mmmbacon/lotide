const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr) {
    if (Array.isArray(arr)) {
      return arr[0];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

// Test Code
assertEqual(head([5,6,7,8]), 5);
assertEqual(head(["Red", "Green", "Yellow"]), "Blue");
assertEqual(head([]), true);
assertEqual(head([true]), true);
assertEqual(head('a'), 0);

