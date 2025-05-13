const palindromes = function (string) {
    let incoming = "";
    let reversed = "";

    for (let n = 0; n < string.length; n++) {
        if (!/[a-zA-Z0-9]/.test(string[n])) {
            continue;
        } else {
            incoming += string[n]; 
        };
    };

    for (let n = string.length - 1; n >= 0; n--) {
        if (!/[a-zA-Z0-9]/.test(string[n])) {
            continue;
        } else {
            reversed += string[n]; 
        };
        
    };

    return reversed.toLowerCase() == incoming.toLowerCase();
};

//console.log(palindromes("Racecar!"))

// Do not edit below this line
module.exports = palindromes;
