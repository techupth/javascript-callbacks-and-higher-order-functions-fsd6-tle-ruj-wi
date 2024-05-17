// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function forEach(array, operation) {
  // Start coding here
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(operation(array[i]));
  }
  return newArray;
}

const increaseSalary = (salary) => {
  return salary + 5000;
};

// Using `forEach` function here

const newEmployeeSalaries = forEach(employeeSalaries, increaseSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
