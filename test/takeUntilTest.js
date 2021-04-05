const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#head', ()=>{

  it(`should return an array [1, 2, 5, 7, 2] from given array [1, 2, 5, 7, 2, -1, 2, 4, 5]`, ()=>{
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it(`should return an array ["I've", "been", "to", "Hollywood"] from given array ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]`, ()=>{
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });

  it(`should return undefined if given undefined array`, ()=>{
    assert.deepEqual(takeUntil(undefined, x => x === ','),undefined);
  });

  it(`should return undefined if given undefined callback`, ()=>{
    assert.deepEqual(takeUntil([1,2], undefined),undefined);
  });

});