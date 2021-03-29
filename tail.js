const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr, n) {

  let result = arr;

  if (arr) {
    if (Array.isArray(arr)) {
      result = arr.slice(1, n);
      return result;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

const numbers1 = [5,6,7,8];

tail(numbers1);

//Example Explained
assertEqual(numbers1.length, 4);

//My Solution
assertEqual(tail([4,5,6,7,8], 5).toString(), [5,6,7,8].toString());
assertEqual(tail('', 5), [5,6,7,8].toString());
assertEqual(tail([], 5).toString(), [].toString());
assertEqual(tail([2], 5).toString(), [].toString());