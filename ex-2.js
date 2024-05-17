//Exercise #2: At Least Five Function

function atLeastFive(array, operation, room) {
  // Start coding here
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 70) {
      newArray.push(array[i]);
    }
  }
  return operation(newArray, room);
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

const scoreCheck = (score, room) => {
  if (score.length >= 5) {
    return `นักเรียนห้องที่ ${room} ผ่านเกณฑ์ ✅`;
  } else {
    return `นักเรียนห้องที่ ${room} ไม่ผ่านเกณฑ์ ❌`;
  }
};

let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreCheck, 1);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreCheck, 2);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreCheck, 3);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
