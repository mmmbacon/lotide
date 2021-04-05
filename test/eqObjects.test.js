const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe('Tests for eqObjects', ()=>{
  it('Should return true if expected and actual are similar objects', ()=>{
    const actual = eqObjects({}, {});
    const expected = true;

    assert.strictEqual(actual, expected, "Objects are not equal");
  });
});