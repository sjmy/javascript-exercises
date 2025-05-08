const sumAll = function(num1, num2) {
    let result = 0;

    if (typeof(num1) != "number" ||
        typeof(num2) != "number" ||
        num1 < 0 ||
        num2 < 0 ||
        Math.floor(num1) != num1 ||
        Math.floor(num2) != num2) {
        return "ERROR";
        
    } else if (num1 < num2) {
        for (n = num1; n <= num2; n++) {
            result += n;
        };
        return result;
    } else {
        for (n = num2; n <= num1; n++) {
            result += n;
        };
        return result;
    };
};

// Do not edit below this line
module.exports = sumAll;
