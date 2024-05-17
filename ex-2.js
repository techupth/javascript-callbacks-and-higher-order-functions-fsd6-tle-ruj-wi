//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let passingScore = 0;
  for (let i = 0; i < array.length; i++) {
    passingScore += operation(array[i]);
  }
  // console.log(passingScore);
  if (passingScore >= 5) {
    console.log("ผ่านเกณฑ์ ✅");
  } else {
    console.log("ไม่ผ่านเกณฑ์ ❌");
  }
}

const result = function (score) {
  if (score >= 70) {
    return 1;
  } else return 0;
  // console.log(passingScore);
};
// console.log(passingScore);

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, result);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, result);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, result);
