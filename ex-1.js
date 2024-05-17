// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    operation(array[i], i, array);
  };
};

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function salaryUpdate(salary) {
  newEmployeeSalaries.push(salary + 5000);
};
forEach(employeeSalaries, salaryUpdate);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
