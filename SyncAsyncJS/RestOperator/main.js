// Rest Operator... - 
// Gathers/Collects Items.
// Destructuring, Functions.
// Placement important, careful with the same name.
// Rest when declare Function, spread when invoke the Function.

// Arrays.
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// Objects.
const person = {name: 'John', lastName: 'Smith', job: 'Developer'};
const {name, ...rest} = person;
console.log(name, rest); // Always put rest at the end otherwise it won't work.

// Functions.
const getAverage = (name, ...scores /*Rest Operater*/) => {
  console.log(name);
  console.log(scores);
  const average = scores.reduce((total, item) => {return total += item}, 0) / scores.length;
  console.log(average);
}

//getAverage(person.name, 89, 76, 81, 100) - Basic Reference.
const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores /*Spread Operator*/) // Getting values to our function from a different array.