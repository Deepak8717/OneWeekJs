// Create your own Reduce method

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((accumulator, item) => accumulator + item, 0);

console.log(sum);
