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
