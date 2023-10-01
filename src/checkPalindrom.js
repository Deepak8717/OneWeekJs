const string = "malayalam";

function checkPalindrom(str) {
  const strArray = str.split("");
  let reveresed = "";
  for (let i = strArray.length - 1; i >= 0; i--) {
    reveresed += strArray[i];
  }

  const isPalindrom = str === reveresed;
  return {
    str,
    strArray,
    reveresed,
    isPalindrom,
  };
}

const result = checkPalindrom(string);
console.log(result);
