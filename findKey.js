const findKey = (object, callback) => {
  let result = [];

  if (!object) {
    return undefined;
  }

  if (!callback) {
    return undefined;
  }

  for (const key in Object.keys(object)) {
    if (callback(object[key])) {
      result.push(key.toString());
    }
  }

  if (result.length > 1) {
    return result;
  } else {
    return result[0];
  }

};

module.exports = findKey;