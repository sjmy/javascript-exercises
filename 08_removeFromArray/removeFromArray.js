const removeFromArray = function(array, ...others) {
    let result = [];

    result = array.filter((item) => !others.includes(item));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
