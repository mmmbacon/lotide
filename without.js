const without = function(original, remove) {

  let filtered = [];

  if (!original || !remove) {
    return undefined;
  }

  if (original.length === 0) {
    return undefined;
  }

  if (remove.length === 0) {
    return original;
  }

  //Iterate through original list and push only items that don't match to new array
  for (let o of original) {
    let match = false;

    //Check original against the removal conditions
    for (let r of remove) {
      //If it does strictly match, set matching state to false, otherwise ignore and state remains true
      if (o === r) {
        match = true;
      }
    }

    //Finally if there is no match against removal conditions, push o to the filtered array
    if (!match) {
      filtered.push(o);
    }
    
  }

  return filtered;
};

module.exports = without;