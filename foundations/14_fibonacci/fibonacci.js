const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    } else if (index == 0) {
        return 0;
    }
    fibArray = [0, 1];
    let newTerm = 0
    for (let i = 0; i < index; i++) {
        newTerm = fibArray[i] + fibArray[i + 1];
        fibArray.push(newTerm);
    }
    return fibArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
