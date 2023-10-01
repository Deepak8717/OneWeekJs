const string = "malayalam";

function countVowelsAndConstants(str) {
  const strArray = str.split("");
  const result = {
    vowels: [],
    consonants: [],
  };

  for (let i = 0; i < strArray.length; i++) {
    if (
      strArray[i].toLowerCase() === "a" ||
      strArray[i].toLowerCase() === "e" ||
      strArray[i].toLowerCase() === "i" ||
      strArray[i].toLowerCase() === "o" ||
      strArray[i].toLowerCase() === "u"
    ) {
      result.vowels.push(strArray[i]);
    } else {
      result.consonants.push(strArray[i]);
    }
  }

  return result;
}

const result = countVowelsAndConstants(string);
console.log("Vowels:", result.vowels.join(" "));
console.log("Consonants:", result.consonants.join(" "));
