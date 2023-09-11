function shuffleArray(nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
}

const nums = [1, 2, 3, 4, 5, 6];
const n = 3;
const shuffled = shuffleArray(nums, n);
console.log(shuffled);
