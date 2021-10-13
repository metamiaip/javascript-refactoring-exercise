function processTransactions(transActions) {
  txr = [];

  if (!transActions || typeof transActions == "undefined")
    throw new Error("Undefined collection of transactions");

  let txCount = transActions.reduce((acc, item) => {
    !acc[item] ? (acc[item] = 1) : acc[item]++;
    return acc;
  }, {});

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  Object.keys(txCount).forEach(function (key, index) {
    txr[index] = `${key} ${txCount[key]}`;
  });

  return txr;
}

function sortByAmountThenName(txCount) {
  return Object.entries(txCount)
    .sort((cur, next) => (next[1] > cur[1] && next[0] > cur[0] ? 1 : -1))
    .reduce((arr, [key, val]) => ({ ...arr, [key]: val }), {});
}

module.exports = processTransactions;
