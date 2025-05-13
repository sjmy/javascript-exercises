const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  if (nums.length == 0) {
    return 0;
  } else {
    return nums.reduce((result, num) => result + num);
  };
  
};

const multiply = function(nums) {
  return nums.reduce((result, num) => result * num);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	if (x == 0 || x == 1) {
    return 1;
  } else {
    let result = 1;
    for (let n = 2; n <= x; n++) {
      result *= n;
    };
    return result;
  };
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
