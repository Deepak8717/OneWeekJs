const originalArray = [1, 2, 7, 2, 5, 9, 10, 71, 54, 2, 5];

//function to reverse an array
const reverseArray = (arr) => {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};

const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

// Alternate way
// const reversedArray = originalArray.reverse();
// console.log(reversedArray);
