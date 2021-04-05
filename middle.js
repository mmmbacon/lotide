
const getMidValue = function(length) {
  if (length % 2 === 0) {
    return length / 2;
  }
  return Math.ceil(length / 2);
};

const middle = function(arr) {

  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    //return middle element
    return [getMidValue(arr.length)];
  }
  //return middle two elements3
  return [getMidValue(arr.length), getMidValue(arr.length) + 1];
};

module.exports = middle;
