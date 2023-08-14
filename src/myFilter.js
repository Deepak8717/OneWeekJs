Array.prototype.customFilter = function (predicate) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const originalArray = [1, 2, 3, 4, 5, 6];
const filteredArray = originalArray.customFilter((item) => item > 2);

console.log(filteredArray);
