const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#head', ()=>{

  it(`should return [0] for the input "h" in the parameter "hello"`, ()=>{
    assert.deepEqual(letterPositions("hello")["h"], [0]);
  });

  it(`should return [0] for the input "h" in the parameter "hello"`, ()=>{
    assert.deepEqual(letterPositions("hello")["e"], [1]);
  });

  it(`should return [0] for the input "h" in the parameter "hello"`, ()=>{
    assert.deepEqual(letterPositions("hello")["l"], [2,3]);
  });

  it(`should return [0] for the input "h" in the parameter "hello"`, ()=>{
    assert.deepEqual(letterPositions("hello")["o"], [4]);
  });

  it(`should return undefined if there is no string passed`, ()=>{
    assert.deepEqual(letterPositions(), undefined);
  });

  it(`should return undefined if an empty string is passed`, ()=>{
    assert.deepEqual(letterPositions(""), undefined);
  });

});