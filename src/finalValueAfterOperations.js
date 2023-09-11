function finalValueAfterOperations(operations) {
  let X = 0; // Initialize the variable X to 0

  for (const operation of operations) {
    if (operation.includes("++")) {
      X++;
    } else if (operation.includes("--")) {
      X--;
    }
  }

  return X;
}

// Example usage:
const operations = ["--X", "X++", "X++", "++X"];
const finalValue = finalValueAfterOperations(operations);
console.log(finalValue); // Output: 1
