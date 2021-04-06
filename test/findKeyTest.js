const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#head', () => {

  it(`should return the key of an object given a value`, () => {
    const movies = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.deepEqual(findKey(movies, x => x.stars === 2), 'noma');
  });

  it(`should return undefined if object is undefined`, () => {
    const movies = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.deepEqual(findKey(movies, x => x.stars === 2), 'noma');
  });

});