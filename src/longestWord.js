const string = "hello my name is Deepak pundir";

function longestWord(str) {
  const words = str.split(" ");
  let longestWord = "";
  let maxWord = 0;
  for (const word of words) {
    const cleanWord = word.replace(/[^A-Za-z]/g, "");
    if (cleanWord.length > maxWord) {
      maxword = cleanWord.length;
      longestWord = cleanWord;
    }
  }
  return longestWord;
}

const result = longestWord(string);
console.log(result);
