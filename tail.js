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

module.exports = tail;