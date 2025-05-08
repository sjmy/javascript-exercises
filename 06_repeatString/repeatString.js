const repeatString = function(string, num) {
    let result = "";

    if (num < 0) {
        result = "ERROR";
    };

    for (n = 0; n < num; n++) {
        result += string;
    };

    return result;
};

// Do not edit below this line
module.exports = repeatString;
