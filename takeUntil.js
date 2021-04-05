const takeUntil = (array, callback) => {
  const result = [];

  if (!array) {
    return undefined;
  }

  if (array.length < 1) {
    return undefined;
  }

  if (callback === undefined) {
    return undefined;
  }

  for (const item of array) {
    
    if (callback(item)) {
      break; //Break loop if true
    }
    result.push(item);
  }

  return result;
};

module.exports = takeUntil;
