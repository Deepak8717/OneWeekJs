// Create your own custom filter method.

Array.prototype.customFilter = function (predicate) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

// with for of loop

// Array.prototype.myFilter = function (fn) {
//   const newarr = [];
//   for (const i of this) {
//     if (fn(i)) {
//       newarr.push(i);
//     }
//   }
//   return newarr;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredArr = arr.myFilter((item) => item > 6);
// console.log(filteredArr);

const originalArray = [1, 2, 3, 4, 5, 6];
const filteredArray = originalArray.customFilter((item) => item > 2);

console.log(filteredArray);
