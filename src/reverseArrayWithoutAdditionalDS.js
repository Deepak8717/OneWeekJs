const array = [1, 2, 3, 4, 56, 78];

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  console.log(arr);
}

reverseArray(array);
