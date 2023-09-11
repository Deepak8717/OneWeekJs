function mergeAlternately(word1, word2) {
  const mergedword = [];
  const maxLength = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLength; i++) {
    mergedword.push(word1[i], word2[i]);
  }
  return mergedword.join("");
}
const word1 = "abs";
const word2 = "pq";
const mergedword = mergeAlternately(word1, word2);
console.log(mergedword);
