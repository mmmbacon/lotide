const head = function(arr) {

  if (!arr) {
    return undefined;
  }

  if (!Array.isArray(arr)) {
    return 0;
  }
  
  if (arr.length < 1) {
    return true;
  }

  return arr[0];

};

module.exports = head;
