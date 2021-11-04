const camelCase = function(input) {
  // Your code here
  let splitString = input.split(" ");
  for (let i = 1; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  } return splitString.join("")
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// Expected Output
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious