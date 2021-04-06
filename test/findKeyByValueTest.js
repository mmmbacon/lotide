const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#head', ()=>{

  it(`should return the key of an object given a value`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it(`should return undefined if object parameter is an empty object or undefined`, () => {
    const bestTVShowsByGenre = {};

    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, undefined));
  });

  it(`should return undefined if value parameter is an empty object`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.deepEqual(findKeyByValue(bestTVShowsByGenre), undefined);
  });

});
