const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];
  const middle = [];

  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      middle.push(element);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
};

const arr = [5, 2, 9, 10, 2, 1, 0, 3, 12, 35, 8];
console.log(quickSort(arr));
