const assert = require('chai').assert;
const map = require('../map');

//Test case
//assertArraysEqual(map(words, word => word[0]),);

describe('#head', ()=>{

  it(`returns ['g','c','t','m','t'] for ["ground", "control", "to", "major", "tom"]`, ()=>{
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], (item) => item[0]
    ), ['g','c','t','m','t']);
  });

  it(`returns ["Hello5", "Kitty5"] for ["Hello", "Kitty"]`, ()=>{
    assert.deepEqual(map(["Hello", "Kitty"], (item) => item + 5
    ), ["Hello5", "Kitty5"]);
  });

  it(`returns ["10", "20"] for ["1", "2"]`, ()=>{
    assert.deepEqual(map(["1", "2"], (item) => item * 10
    ), [10, 20]);
  });

});