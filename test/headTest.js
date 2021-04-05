const assertEqual = require('./assertEqual');
const head = require('../head');
// Test Code
assertEqual(head([5,6,7,8]), 5);
assertEqual(head(["Red", "Green", "Yellow"]), "Blue");
assertEqual(head([]), true);
assertEqual(head([true]), true);
assertEqual(head('a'), 0);