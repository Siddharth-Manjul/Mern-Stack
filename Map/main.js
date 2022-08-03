const people = [
  { 
    name: "bob",
    age: 20, 
    position: "developer",
  },
  {
    name: "anna",
    age: 25, 
    position: "designer",
  },
  {
    name: "susy",
    age: 30, 
    position: "the boss",
  },
  {
    name: "john",
    age: 26, 
    position: "intern",
  },
];

// Direct Method.
// const ages = people.map((person) => {
//   return person.age;
// });

// console.log(ages);

// Reference Method.
const getAges = (person) => person.age;

const ages = people.map(getAges);
console.log(ages);

// Building a new array from the original array.
const newPeople = people.map((items) => {
  return {
    firstName: items.name,
    oldAge: items.age,
  }
});
console.log(newPeople);

// Wrapping data in HTML.
const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.getElementById('result');
result.innerHTML = names.join('Hola');