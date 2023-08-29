const arr = [1, 2, 7, 2, 5, 9, 10, 71, 54, 2, 5];
const n = 3;
const findNthLargest = (arr, n) => {
  const sorted = arr.sort((a, b) => b - a);
  const nthLargest = sorted[n - 1];
  return nthLargest;
};

const nthLargest = findNthLargest(arr, n);
console.log(nthLargest);
