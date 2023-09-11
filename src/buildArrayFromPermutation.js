// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

const buildArray = function (nums) {
  return nums.map((arrItem) => nums[arrItem]);
};

const nums = [0, 2, 1, 5, 3, 4];
console.log(buildArray(nums));
