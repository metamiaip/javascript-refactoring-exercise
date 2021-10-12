

function processTransactions(transActions = null) {

    if (!transActions) throw new Error("Undefined collection of transactions");
 
    let txCount=transActions.reduce((acc, item) => {
        !acc[item] ? acc[item] = 1 : acc[item]++;
        return acc;
    },{});
    return sortByAmountThenName(txCount);
}

const sortByAmountThenName = (txCount) => {
    let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => {
        return txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)
    });
    return sortedKeys.map(item=>`${item} ${txCount[item]}`);
}

module.exports = processTransactions;