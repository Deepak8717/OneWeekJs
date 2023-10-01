const string = "my name is Deepak pundir";

function reveredWords(str) {
  const reversed = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  return reversed;
}

const reversedString = reveredWords(string);

console.log(reversedString);
