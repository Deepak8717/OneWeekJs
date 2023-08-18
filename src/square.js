Array.prototype.square = function (fn) {
  let newArray = [];

  for (const i of this) {
    newArray.push(i * i);
    console.log(i);
  }
  return newArray;
};

const squaredArr = [1, 2, 3, 4, 5, 6].square();
console.log(squaredArr);
