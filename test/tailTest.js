const tail = require('../tail');
const assertEqual = require('../assertEqual');

//My Solution
assertEqual(tail([4,5,6,7,8], 5).toString(), [5,6,7,8].toString());
assertEqual(tail('', 5), [5,6,7,8].toString());
assertEqual(tail([], 5).toString(), [].toString());
assertEqual(tail([2], 5).toString(), [].toString());