// Destructuring - Faster/Easier way to access/unpack variables from arrays, objects.

// Array  Destructuring.
const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// Traditional way.
const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// Array Destructuring Analysis. Use [].
const [john, peter, bobs, anna, kelly, susane] = friends;
console.log(john, peter, bobs, anna, kelly, susane); // Susane will be undefined.
// Accessing some values & leaving some values.
const [orange, , kemon] = fruits;
console.log(orange, kemon); // We can use any name just like I used kemon for lemon.

// Swapping by using Destructuring Method.
let firsts = 'john';
let second = 'bob';
[second, firsts] = [firsts, second];
console.log(firsts, second); 

// Object Destructuring.
const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// Traditional way.
const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

console.log(firstName, lastName, sister);

// Object Destructuring Analysis. Use {}.
const last = 'some value';
const {first, last:shakeAndBake, city, zip, siblings:{sister:favouriteSibling}} = bob;
console.log(first, city, zip, shakeAndBake, favouriteSibling);

function printPerson({first, last, city, siblings:{sister}}) {
  // First Method.
  // const {first, last} = person;
  console.log(first, last, sister);
};

printPerson(bob);