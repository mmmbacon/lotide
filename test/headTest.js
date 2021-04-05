const assert = require('chai').assert;
const head = require('../head');

describe('#head', ()=>{

  it('returns 1 for [1, 2, 3]', ()=>{
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns 5 for ['5']", ()=>{
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Red' for ['Red', 'Green', 'Blue]", ()=>{
    assert.strictEqual(head(['Red', 'Green', 'Blue']), 'Red');
  });

  it("returns true for []", ()=>{
    assert.strictEqual(head([]), true);
  });

  it("returns true for [true]", ()=>{
    assert.strictEqual(head([true]), true);
  });

  it("returns 0 for 'a'", ()=>{
    assert.strictEqual(head('a'), 0);
  });

});