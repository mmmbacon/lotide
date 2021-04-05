const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const map = require('./map');
const without = require('./without');
const takeUntil = require('./takeUntil');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  map: map,
  without: without,
  takeUntil: takeUntil,
  flatten: flatten,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  countOnly: countOnly,
  countLetters: countLetters,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
};