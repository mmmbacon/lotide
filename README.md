# lotide 

## About
This repository is a library of functions that mimick the lodash javascript library. This library was created as a course activity for the Lighthouse Labs WEb Developer Code bootcamp. 

##Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

##Usage
**Install it:**

`npm install @mmmbacon/lotide`

**Require it:**

`const _ = require('@mmmbacon/lotide');`

**Call it:**

`const results = _.tail([1,2,3]);` // => [2,3]

## Documentation

The following functions are currently implemented:

 * `assertEqual(val1, val2)`: Compares to primative values and returns TRUE or FALSE depending on the result of a strict equality comparison.

 * `head([array])`: Takes in an array object and returns the first value (head) in the array. Returns undefined if null or non-array object is passed as an argument.

 * `tail([array], n)`: Takes in an array object and returns n number of values following the first array position (tail).

 * `middle([array])`: Takes in an array object and returns either the value at the midpoint of the array if array length is odd, or returns two values at the midpoint of the array if array length is even.

 * `map([array])`: Takes in an array object and a callback function. Applies the callback function to each item in the array and returns a new array.

 * `without`: 
 * `takeUntil`:
 * `flatten`:
 * `letterPositions`:
 * `findKeyByValue`:
 * `findKey`:
 * `countOnly`:
 * `countLetters`:
 * `assertArraysEqual`:
 * `assertEqual`:
 * `assertObjectsEqual`:
 * `eqArrays`:
 * `eqObjects`: 
