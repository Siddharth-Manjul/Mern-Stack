// Variables - We can use either var or let or const.

// Var is used for global scope and will be or locally to an entire function regardless of block scope.
// Var is not preferred now due to ES6 support.

// Let can be used locally and it's used where the value will be changed for the same variable.

// Const is used where the value is constant.

// Variables - Initialization & Declaration.

// var name;  // Global Scope, Changable.
// let age;  // Local Scope, Changable.
// const city = "New York"; // Constant, Const cannot be initialized without any value.

// name = "John";
// age = 30;

// Printing or Console.

// console.log(name);
// console.log(age);
// console.log(city);

// Comments - // Single-line Comments, /* Multi-line Comments */

// Data Types

// const p_name = "David"; // string.
// const p_age = 31; // number.
// const p_rating = 4.5; // number.
// const isCool = true; // boolean.
// const x = null; // null (object).
// const y = null; // undefined.

// You can use "typeof" to check the data type of a variable.

// console.log(typeof p_name);

// Concatenation.

// console.log("My name is " + p_name + " & I am " + p_age + ".");

// A better way to concatenate in JavaScript is by using "Template String". (Using $ sign and {}).

// const new_string = `My name is ${p_name} and I am ${p_age}.`; // You need to use `Backticks` instead of "Semicolon".
// console.log(new_string);

// Operators - They are mathematical operations such as addition, subtraction, multiplication, division.

// const sum = 6 + 9; // Addition.
// const subtract = 9 - 5; // Subtraction.
// const multiply = 9 * 5; // Multiplication.
// const divide = 10 / 2; // Division.


// console.log(sum); // 15
// console.log(subtract); // 4
// console.log(multiply); // 45
// console.log(divide); // 5

// String Properties & Methods
// Anything which do not have paranthesis can be known as Properties.
// Anything with paranthesis can be known as Methods. They are some sort of function. 

// const string = "Hello World!";

// console.log(string.length); // Length is a property.
// console.log(string.toUpperCase()); // Upper Case the String.
// console.log(string.toLowerCase()); // Lower Case the String.
// console.log(string.substring(0, 5)); // Substring.

// Many more methods and properties can be used according to need.

// Arrays - Variables that hold multiple values.

// const arr = ['apples', 'bananas', 'oranges', 1, 2, true]; // We can add any data types within an Array.
// console.log(arr);
// console.log(arr[0]); // Accessing an element in an Array.
// arr[6] = 'peaches'; // Adding a new element.
// arr.push('mangoes'); // Adding element to the Array using push method.
// arr.unshift('strawberries'); // Adding element to the beginning of the Array.
// console.log(arr);
// arr.pop(); // Pop removes last element of the Array.
// console.log(arr);
// console.log(Array.isArray(arr)); // To check if the variable is an Array.
// console.log(arr.indexOf('oranges')); // To check the index of an element in the Array.

// Object Literals - They are Key Value Pairs.

// const Person = {

//   // Key Value Pairs
//   firstName : "John",
//   lastName : "Doe",
//   age : 30, 

//   // Array acting as a Key Value Pair
//   hobbies : ['music', 'movies', 'sports'],

//   // Embedding object inside an object literal
//   address : {
//     street: '50 Main st',
//     city: 'London',
//     country: 'United Kingdom',
//   },
// }

// console.log(Person);
// console.log(Person.firstName); // Logging out one value through key.
// console.log(Person.hobbies[1]); // Logging out an array element through key and indexing.
// console.log(Person.address.city); // Logging out a value from embedded object.

// const {firstName, lastName} = Person; // Destructuring.
// console.log(firstName);

// Person.email = "john@gmail.com"; // Adding email address or a key value pair.

// console.log(Person);

// Loops.

// For loop.

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// While loop.

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Array of Objects & JSON.

// const todos = [
//   {
//     id: 1, 
//     text: "Take out trash",
//     isCompleted: true
//   },
//   {
//     id: 2, 
//     text: "Meeting with boss",
//     isCompleted: true
//   },
//   {
//     id: 3, 
//     text: "Dentist appt",
//     isCompleted: false
//   }
// ];

// console.log(todos);
// console.log(todos[1].text); // Logging out text for second Array Element.

// const todoJSON = JSON.stringify(todos); // Convert to JSON. Do not declare "JSON" as a variable.
// console.log(todoJSON);

// for (let todo of todos) { // More easier way of using for loop in javascript.
//   console.log(todo.text);
// }

// Higher Order Array Methods.

// forEach, map, filter.

// todos.forEach(function(todo){
//   console.log(todo.id);
// })

// const todoText = todos.map(function(todo){
//   return todo.text;
// })

// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//   return todo.isCompleted === true;
// })

// console.log(todoCompleted);

// Using multiple higher order array methods at a time.

// const todoCompletedText = todos.filter(function(todo){
//   return todo.isCompleted === true;
// }).map(function(todo){
//   return todo.text;
// })

// console.log(todoCompletedText);

// Conditionals.

// const x = 14;

// if (x === 10) {
//   console.log("X is 10.");
// } else if (x > 10) {
//   console.log("X is greater than 10.");
// } else {
//   console.log("X is less than 10.");
// }

// Ternary operator - Use it where you have to define variable based on condition.

// const x = 1;

// const color = x > 10 ? "red" : "blue";
// console.log(color);

// Switch statement.

// switch(color) {
//   case "red":
//     console.log("Color is red.");
//     break;
//   case "blue":
//     console.log("Color is blue.");
//     break;
//   default:
//     console.log("Color is neither red nor blue.");
//     break;
// }

// Functions.

// function addNumber(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumber(5,4));

// NaN - Not a Number.
// Passing new values in parameters can overwrite the default value.

// Arrow Function.
// const addNum = (num1, num2) => { 
//   return num1 + num2;
// }

// console.log(addNum(5, 4));

// Contructor Function & Prototypes.

// Constructor Function.

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Prototype.

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// ES6 Classes.

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  
  getBirthYear() { 
    return this.dob.getFullYear();
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}

// Instantiate Object.

const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1);
// console.log(person1.dob);
// console.log(person1.dob.getFullYear()); // Getting only year.
console.log(person1.getBirthYear());
console.log(person1.getFullName());