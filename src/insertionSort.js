const arr = [4, 3, 1, 20, 12, 8, 15, 3, 2, 19];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

const sortedArr = insertionSort(arr);
console.log(sortedArr);
