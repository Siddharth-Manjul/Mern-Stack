// Dot Notation.
const person = {
  name: 'John',
};

console.log(person.name);
person.age = 25;
console.log(person);

// Square Bracket Notation.
const items = {
  'featured-items': ['item1', 'item2']
};

console.log(items['featured-items']);
console.log(person['name']);

let appState = 'loading';
appState = 'error';
const keyName = 'fruits';
const app = {
  [appState]: true
};

app[keyName] = 'apple';

console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'john'); // Update
updateState('job', 'developer'); // Update
updateState('loading', false); // Change & Update
updateState('products', ['apple', 'banana', 'orange']); // Add

console.log(state);