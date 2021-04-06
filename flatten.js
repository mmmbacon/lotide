const flatten = function(arr) {

  let flattened = [];

  if (!arr) {
    return undefined;
  }

  if (arr.length < 1) {
    return undefined;
  }

  if (!Array.isArray(arr)) {
    return arr;
  }

  console.log('#Item is an array:');

  arr.forEach(item => {
    flattened.push(flatten(item));
  });
  
  return flattened;
};

module.exports = flatten;

//[1, 2, [3, [4,5,6,7,8,9]], 5, [6]]
