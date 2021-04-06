const letterPositions = function(sentence) {

  if (!sentence) {
    return undefined;
  }

  if (sentence.length < 1) {
    return undefined;
  }

  const results = {};
  const joined = sentence.split(" ").join("");

  for (const i in joined) {
    if (results[joined[i]]) {
      results[joined[i]].push(parseInt(i));
    } else {
      results[joined[i]] = [parseInt(i)];
    }
  }

  return results;
};

module.exports = letterPositions;
