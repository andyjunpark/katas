const sumLargestNumbers = function(data) {
  // Put your solution here
  largestTwo = []
  let index = data.indexOf(Math.max(...data));
  if (index > -1) {
    largestTwo.push(Math.max(...data))
    data.splice(index, 1);
    index = data.indexOf(Math.max(...data));
    if (index > -1) {
      largestTwo.push(Math.max(...data))
    } return largestTwo[0] + largestTwo[1]
  }
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
// expected output 
// 11
// 5
// 126
