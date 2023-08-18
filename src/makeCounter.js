function makeCounter(initialValue = 0) {
  let count = initialValue;

  return function () {
    return count++;
  };
}

// Usage examples
const counter = makeCounter();
console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

const customCounter = makeCounter(5);
console.log(customCounter()); // Output: 5
console.log(customCounter()); // Output: 6
console.log(customCounter()); // Output: 7
