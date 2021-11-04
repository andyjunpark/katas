const instructorWithLongestName = function(instructors) {
  // In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.
  // Put your solution here
  let longest = 0;
  let max = 0;
  let newArr = instructors;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].name.length > longest) {
      longest = newArr[i].name.length;
      max = i;
    }
  } return instructors[max];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// expected output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}