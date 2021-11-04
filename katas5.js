const urlEncode = function(text) {
  // Put your solution here
  let encoded = ''
  let i = 0;
  let trimmedText = text.trim()
  while (i < trimmedText.length) {
    if (trimmedText[i] === ' ') {
      encoded += '%20';
      i++;
    } else {
      encoded += trimmedText[i];
      i++;
    }
  } return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected Output
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure