Array.prototype.myMap = function (callback) {
  const mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i]));
  }
  return mappedArray;
};

const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.myMap((item) => item * 2);

// Alternatively
// const doubleItems = (item) => {
//   return item * 2;
// };

// const doubledArray = originalArray.myMap(doubleItems);

console.log(doubledArray);
