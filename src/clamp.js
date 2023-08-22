// Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

function clamp(number, lower, upper) {
  const number1 = Math.min(number, upper);
  const number2 = Math.max(lower, max);
  return number2;
}
function clamp(number, lower, upper) {
  return Math.max(lower, Math.min(number, upper));
}

function clamp(number, lower, upper) {
  if (number < lower) {
    return lower;
  } else if (number > upper) {
    return upper;
  } else {
    return number;
  }
}

// Example usage
var value = 5;
var lowerBound = 10;
var upperBound = 20;
var clampedValue = clamp(value, lowerBound, upperBound);
console.log(clampedValue); // Output will be 10, since it's clamped to the lower bound.
