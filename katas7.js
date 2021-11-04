const checkAir = function (samples, threshold) {
  pollution = 0
  let i = 0
  while (i < samples.length) {
    if (samples[i] === 'dirty') {
      pollution += 1 / samples.length;
      i++;
    }
    else {
      i++;
    }
  }
  if (pollution > threshold) {
    return 'Polluted'
  } else {
    return 'Clean'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

// Expected Output
// Polluted
// Polluted
// Clean