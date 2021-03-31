const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

const eqObjects = function(obj1, obj2) {
  let size1 = 0;
  let size2 = 0;
  let matching = 0;

  //Check to see if both objects  have equal amount of keys
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      size1++;
    }
  }

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      size2++;
    }
  }

  //If they are the same, then start comparing key/values
  if (size1 === size2) {
    for (const key1 in obj1) {
      if (obj1.hasOwnProperty(key1)) {
        for (const key2 in obj2) {
          if (obj2.hasOwnProperty(key2)) {

            //Check to see if they are both arrays first
            if (Array.isArray(obj1[key1]) && Array.isArray(obj2[key2])) {
              if (eqArrays(obj1[key1],obj2[key2])) {
                matching++;
              }
            } else {
              //If they are not arrays, but primatives, compare normally
              if (obj1[key1] === obj2[key2]) {
                matching++;
              }
            }
          }
        }
      }
    }
  }

  if (size1 === size2 && matching === size1) {
    return true;
  }

  return false;

};

// Test Code - Simple
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ba), true);

// Test Code - Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
