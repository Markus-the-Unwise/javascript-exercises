const add = function (first, second) {
  return parseFloat(first) + parseFloat(second);
};

const subtract = function (first, second) {
  return parseFloat(first) - parseFloat(second);
};

const sum = function (arr = []) {
  return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function (arr = []) {
  return arr.reduce((product, value) => product * value, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (value) {
  let a = parseInt(value);
  let fact = 1;
  if (a == 0) { return 1 };
  if (a < 0) { return "ERROR" }
  for (let i = 2; i <= a; i++) {
    fact = fact * i;
  }
  return fact;
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
