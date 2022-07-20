// Destructuring - Faster/Easier way to access/unpack variables from arrays, objects.

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// Destructuring Analysis.
const [john, peter, bob, anna, kelly, susane] = friends;
console.log(john, peter, bob, anna, kelly, susane); // Susane will be undefined.
// Accessing some values & leaving some values.
const [orange, , kemon] = fruits;
console.log(orange, kemon); // We can use any name just like I used kemon for lemon.

// Swapping by using Destructuring Method.
let first = 'john';
let second = 'bob';
[second, first] = [first, second];
console.log(first, second); 