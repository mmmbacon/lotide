# lotide 

## About
This repository is a library of functions that mimick the lodash javascript library. This library was created as a course activity for the Lighthouse Labs WEb Developer Code bootcamp. 

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

## Usage

**Installation:**

`$ npm install @mmmbacon/lotide`

**Require it:**

`const _ = require('@mmmbacon/lotide');`

**Call it:**

`const results = _.tail([1,2,3]);` // => [2,3]

## Documentation

The following functions are currently implemented:

 * `assertEqual(val1, val2)`: Compares two values and returns TRUE or FALSE depending on the result of a strict equality comparison.

 * `head([Array])`: Takes in an array object and returns the first value (head) in the array. Returns undefined if null or non-array object is passed as an argument.

 * `tail([Array], n)`: Takes in an array object and returns n number of values following the first array position (tail).

 * `middle([Array])`: Takes in an array object and returns either the value at the midpoint of the array if array length is odd, or returns two values at the midpoint of the array if array length is even.

 * `map([Array])`: Takes in an array object and a callback function. Applies the callback function to each item in the array and returns a new array.

 * `without([Array],[Array])`: Takes in two array objects. Removes items from array 1 where it matches any item in array 2.

 * `takeUntil([Array], cb)`: Takes in an array and a callback function. Will iterate the array and build a new array from array items as long as the callback returns true.

 * `flatten([Array])`: Takes in an array of items and returns a flattened array. Can include nested arrays.

 * `letterPositions(String)`: Takes in a string and returns an object with a key for each unique letter in the string, and an occurance count for each.

 * `findKeyByValue({Object}, value)`: Takes in an object and a value to search the object. Returns the key of the object that matches the search value.

 * `findKey`: In Progress
 * `countOnly`: In Progress
 * `countLetters`: In Progress
 * `assertArraysEqual`: In Progress
 * `assertEqual`: In Progress
 * `assertObjectsEqual`: In Progress
 * `eqArrays`: In Progress
 * `eqObjects`:  In Progress
