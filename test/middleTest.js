const middle = require('../middle');
const assert = require('chai').assert;

describe('#head', ()=>{
  
  it('should return [2,3] when [1,2,3,4] is passed', ()=>{
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it('should return [3] when [1,2,3,4,5] is passed', ()=>{
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it('should return [4] when [1,2,3,4,5,6,7] is passed', ()=>{
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });

  it('should return [4,5] when [1,2,3,4,5,6,7,8] is passed', ()=>{
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });

});