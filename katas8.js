const repeatNumbers = function(data) {
  // Put your solution here
  // The input data for this exercise will be two dimensional array (an array of arrays), 
  // where each sub-array will have two numeric values. For example:
  //[[1, 2], [2, 3]]
  //The first will be the value to repeat, the second will be the amount of times to repeat that value.
  let repeated = [];
  if (data.length === 1) {
    return `${data[0][0]}`.repeat(data[0][1]);
  }
  else {
    for (let i = 0; i < data.length; i++) {
      repeated.push(`${data[i][0]}`.repeat(data[i][1]));
    }
  } return repeated.join(', ');
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// Expected Output
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292