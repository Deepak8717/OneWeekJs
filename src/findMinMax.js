const arr = [1, 2, 7, 2, 5, 9, 10, 71, 54, 2, 5];

const findMax = (arr) => {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
};

const max = findMax(arr);
console.log("Maximum:", max);

const findMin = (arr) => {
  let minimum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  return minimum;
};

const min = findMin(arr);
console.log("Minimum:", min);

// alternate way
// const getMax = (arr) => Math.max(...arr);
// const maxValue = getMax(arr);
// const getMin = (arr) => Math.min(...arr);
// const minValue = getMin(arr);
