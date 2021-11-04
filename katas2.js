const conditionalSum = function(values, condition) {
  // Your code here
  let sumArr = []
  let sum = 0
  let i = 0
  while (i < values.length) {
    if (condition === "even") {
      if (values[i] % 2 === 0) {
        sumArr.push(values[i]);
        i++;
      } else {
        i++;
      }
    } else if (condition === "odd") {
      if (values[i] % 2 !== 0 ) {
        sumArr.push(values[i]);
        i++;
      } else {
        i++;
      }
    } 
  } for (let j = 0; j < sumArr.length; j++) {
      sum += sumArr[j];
  } return sum
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// expected outcomes
// 6
// 9
// 144
// 0