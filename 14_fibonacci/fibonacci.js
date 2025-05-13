const fibonacci = function(num) {
    fibNums = [1, 1];

    if (num == 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
        for (let n = 1; n < num; n++) {
            fibNums.push(fibNums[n] + fibNums[n - 1]);
        };
    };

    return fibNums[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
