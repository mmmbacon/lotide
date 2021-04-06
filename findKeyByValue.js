const findKeyByValue = function(object, value) {

  if (!object) {
    return undefined;
  }

  if (!value) {
    return undefined;
  }

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        console.log(key);
        return key;
      }
    }
  }
};

module.exports = findKeyByValue;