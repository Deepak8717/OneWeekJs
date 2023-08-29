const arr = [1, 2, 7, 2, 5, 9, 10, 71, 54, 2, 5];
const removeDuplicates = (arr) => {
  const uniqueArray = [];
  for (const item of arr) {
    let isDublicate = false;
    for (uniqueItem of uniqueArray) {
      if (item === uniqueItem) {
        isDublicate = true;
        break;
      }
    }
    if (!isDublicate) {
      uniqueArray.push(item);
    }
  }
  console.log(uniqueArray);
};

removeDuplicates(arr);
