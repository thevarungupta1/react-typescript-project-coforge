const employee = {
  id: 1,
  firstName: "Mark",
  lastName: "Smith",
  email: "m@gmail.com",
};

// let id = employee.id;
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

// destructuring
// let { id, firstName, lastName, email } = employee;
// console.log(firstName)

let { firstName } = employee;
console.log(firstName);

function getScores() {
  return [51, 60, 70, 40];
}

let scores = getScores();
console.log(scores);
let a = scores[0];
let b = scores[1];
let c = scores[2];
let d = scores[3];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let [x, y, z] = scores;
console.log(x);
console.log(y);
console.log(z);
