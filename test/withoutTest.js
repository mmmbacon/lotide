const assert = require('chai').assert;
const without = require('../without');

describe('#head', ()=>{

  it(`returns [2,3] for array [1, 2, 3] where [1] is removed`, ()=>{
    assert.deepEqual(without([1,2,3], [1]), [2,3]);
  });

  it(`returns [1,2] for array ["1", "2", "3"] where [1, 2, "3"] is removed`, ()=>{
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
  });

  it(`returns [4,6] for array [2, 4, 6] where [2] is removed`, ()=>{
    assert.deepEqual(without([2, 4, 6], [2]), [4,6]);
  });

  it(`returns undefined if first array is undefined`, ()=>{
    assert.deepEqual(without(undefined, [2]), undefined);
  });

  it(`returns undefined if second array is undefined`, ()=>{
    assert.deepEqual(without([1], undefined), undefined);
  });

});

// assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1,2]);
// assertArraysEqual(without([2, 4, 6], [2]), [4,6]);
// assertArraysEqual(without([1, 2], [1]), [3]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


