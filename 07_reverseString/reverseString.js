const reverseString = function(string) {
    let reversed = "";

    for (n = string.length - 1; n >= 0; n--) {
        reversed += string[n];
    };

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
