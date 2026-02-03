const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArr) {
	return numArr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((product, num) => product * num, 1);
};

const power = function(base, exponenet) {
  let total = 1;
	for (let i = 0; i < exponenet; i++) {
    total *= base
  }
  return total
};

const factorial = function(num) {
	let total = 1;
  loopCount = num;
  for (let i = 0; i < loopCount; i++) {
    if (num > 0) {
          total *= num;
    }
    num -= 1
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
