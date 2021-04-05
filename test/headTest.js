const assert = require('chai').assert;
const head = require('../head');

describe('#head', ()=>{

  it('returns 1 for [1, 2, 3]', ()=>{
    assert.equal(head([1,2,3]), 1);
  });

  it("returns 5 for ['5']", ()=>{
    assert.equal(head(['5']), '5');
  });

  it("returns 'Red' for ['Red', 'Green', 'Blue]", ()=>{
    assert.equal(head(['Red', 'Green', 'Blue']), 'Red');
  });

  it("returns true for []", ()=>{
    assert.equal(head([]), true);
  });

  it("returns true for [true]", ()=>{
    assert.equal(head([true]), true);
  });

  it("returns 0 for 'a'", ()=>{
    assert.equal(head('a'), 0);
  });

});