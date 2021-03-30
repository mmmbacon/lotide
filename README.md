# lotide 

## About
This repository is a library of functions that mimick the lodash javascript library. This library was created as a course activity for the Lighthouse Labs WEb Developer Code bootcamp. 

## API
```javascript
assertEqual(val1, val2)
```
Compares two values and prints to console either a passing state or a failing state based on a strict equality comparison.

```javascript
head(...arr)
```
Takes in an array object and returns the first value (head) in the array. Returns undefined if null or non-array object is passed as an argument.

```javascript
tail(...arr, n)
```
Takes in an array object and returns n number of values following the first array position (tail).