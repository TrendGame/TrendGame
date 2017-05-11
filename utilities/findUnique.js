module.exports = (results) => {
  let seen = {};
  let output = [];

  for (let i = results.length - 1; i >= 0; i--) {
    if (!(results[i].name in seen)) {
      seen[results[i].name] = true;
      output.push(results[i]);
    }
  }

  return output;
};
