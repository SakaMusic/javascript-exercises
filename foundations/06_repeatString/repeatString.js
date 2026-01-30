const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        let strArray = []
    for (let i = 0; i < num; i++) {
        strArray.push(str)
    }
    return strArray.join("")
    }
    
};

// Do not edit below this line
module.exports = repeatString;
