const studentNames = ["Alice", "Bob", "Charlie", "David"];
const studentScores = [85, 92, 78, 88];

function combineArraysToObjects(names, scores) {
  const studentData = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const score = scores[i];
    studentData[name] = score;
  }
  return studentData;
}
const studentData = combineArraysToObjects(studentNames, studentScores);
console.log(studentData);
