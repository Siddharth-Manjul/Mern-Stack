// Filter - Returns a new array, can manipulate the size of new array (unlike map), returns based on conditions.
// Find - Returns single instance (object), returns first match, if no match - undefined.

const people = [
  {
    name: "bob",
    age: 30,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "peter",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

const fruits = ['orange', 'pear', 'lemon', 'banana'];

// Filter.
// const youngPeople = people.filter((person) => {
//   return true; // True returns array whereas false skip array and returns empty array.
// })

const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age < 30;
})

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

console.log(youngPeople);

// No Match.
const seniorDevs = people.filter((person) => person.position === 'senior devs');
console.log(seniorDevs);

// Find.
const peter = people.find((peter) => peter.name === 'peter');
console.log(peter);
const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit);

// No Match.
const newFruit = fruits.find((fruit) => fruit === 'apple');
console.log(newFruit);

// Multiple Matches - First Match.
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(anna[0].position); // Accessing position when using filter.
console.log(peter.position); // Accessing position when using find.