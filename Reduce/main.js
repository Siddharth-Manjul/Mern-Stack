/* Reduce - 
iterates, callback function
reduces to a single value - number, array , object.
1st parameter ('acc') - total of all calculations. 'acc' stands for "accumulator".
2nd parameter ('curr') - current iteration/value. */

// Web Dev Simplified Example.
const items = [
  {name: 'Rice', price: 5},
  {name: 'Book', price: 20},
  {name: 'Chicken', price: 10},
  {name: 'Monitor', price: 100},
]

const totalPrice = items.reduce((total, item) => {
  return total + item.price
}, 0)

console.log(totalPrice);

// Grouping the people by age.
const people = [
  {name: 'Kyle', age: 26},
  {name: 'John', age: 31},
  {name: 'Sally', age: 42},
  {name: 'Jill', age: 42},
]

const result = people.reduce((groupedPeople, person) => {
  const age = person.age
  if(groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log(result);

const staff = [
  {
    name: "bob",
    age: 20,
    position: "developer",
    salary: 100,
  },
  {
    name: "peter",
    age: 25,
    position: "designer",
    salary: 300,
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
    salary: 400, 
  },
  {
    name: "anna",
    age: 35,
    position: "intern",
    salary: 10,
  },
];

const dailySalary = staff.reduce((total, person) => {
  total += person.salary;

  return total
},0)

console.log(dailySalary);

// Complex Reduce Methods.

// Example 1 - Cart.
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'Google Pixel',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

let {totalItems, cartTotal} = cart.reduce((total, cartItem) => {
  const {amount, price} = cartItem;
  // count items
  total.totalItems += amount;
  // count sum
  total.cartTotal += amount * price;
  return total
}, {
  totalItems: 0,
  cartTotal: 0,
})

cartTotal = parseFloat(cartTotal.toFixed(2));
console.log(totalItems, cartTotal); // Declare them same as the object.

// Example 2 - Github Repo.
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'