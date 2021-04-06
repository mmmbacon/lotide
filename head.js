const head = function(arr) {

  if (Array.isArray(arr)) {
    if (arr.length < 1) {
      arr = true;
    } else {
      arr = arr[0];
    }
  } else {
    arr = 0;
  }

  return arr;

};

module.exports = head;
