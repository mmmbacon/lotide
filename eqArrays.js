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

module.exports = eqArrays;