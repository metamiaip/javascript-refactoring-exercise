const processTransactions = (transActions) => {
  if (!transActions || typeof transActions == "undefined")
    throw new Error("Undefined collection of transactions");

  //count the num of occurences exists in the array
  const txCount = transActions.reduce((accumulator, item) => {
    !accumulator[item] ? (accumulator[item] = 1) : accumulator[item]++;
    return accumulator;
  }, {});

  return Object.entries(txCount)   // .entries - Convert from object to array
    .sort((current, next) => next[1] > current[1] && next[0] > current[0] ? 1 : -1 )   // .sort - to order the array
    .map((item) => `${item[0]} ${item[1]}`);   // .map - format the array according to the requested information
};

module.exports = processTransactions;
