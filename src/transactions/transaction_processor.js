const processTransactions = (transActions) => {
  if (!transActions || typeof transActions == "undefined")
    throw new Error("Undefined collection of transactions");

  //count the num of occurences exists in the array
  const txCount = transActions.reduce((accumulator, item) => {
    !accumulator[item] ? (accumulator[item] = 1) : accumulator[item]++;
    return accumulator;
  }, {});

  // .entries - Convert from object to array
  // .sort - to order the array
  // .map - the array according to the requested information
  return Object.entries(txCount)
    .sort((current, next) => (next[1] > current[1] && next[0] > current[0] ? 1 : -1))
    .map((item) => `${item[0]} ${item[1]}`);
};
module.exports = processTransactions;
