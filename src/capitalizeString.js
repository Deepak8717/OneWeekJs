const string = "hello my name is Deepak";

function CapitalizeFirstCharacter(str) {
  const words = str.split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords.join(" ");
}

const result = CapitalizeFirstCharacter(string);
console.log(result);
