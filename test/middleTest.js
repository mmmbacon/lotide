const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test case
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);