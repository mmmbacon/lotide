const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#head', ()=>{

  it(`should return array [1,2,3,4,5,6] when flatten and given [1, 2, [3, 4], 5, [6]]`, ()=>{
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });

  it(`should return array [1,2,3,4,5,6] when flatten and given [1, 2, [3, [4,5,6,7,8,9]]`, ()=>{
    assert.deepEqual(flatten([1, 2, [3, [4,5,6,7,8,9]], 5, [6]]), [1,2,3,4,5,6,7,8,9,5,6]);
  });

});

//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
