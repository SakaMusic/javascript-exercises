const palindromes = function (string) {
    const cleanString = (string.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();
    let neg_i = cleanString.length - 1;
    for (let i = 0; i < cleanString.length / 2; i++) {
        if (cleanString[i] === cleanString[neg_i]) {
            neg_i--;
        } else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
