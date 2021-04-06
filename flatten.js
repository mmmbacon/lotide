const flatten = function(arr) {

  let flattened = arr;

  if (Array.isArray(arr)) {
    flattened = [];
    arr.forEach(item => {
      flattened = flattened.concat(flatten(item));
    });
  }

  return flattened;
};

module.exports = flatten;