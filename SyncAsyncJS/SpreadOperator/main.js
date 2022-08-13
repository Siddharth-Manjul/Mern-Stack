// Spread Operator ... -
// Allows and iterable to spread/expand indeividually inside reciever.
// Split into single items and COPY them.

const udemy = "udemy";
// Spliting string into an array items.
const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friend = [...boys, bestFriend, ...girls];
console.log(friend);

// Reference
// const newFriend = friend; // This method will change the values in both the arrays even if we only want to change the newFriend array.

// COPY
const newFriend = [...friend]; // This method will change the value in only newFriend array.
newFriend[0] = "nancy";
console.log(friend);
console.log(newFriend);

// ES2018 - Es8 Objects
const person = { name: "John", job: "Developer" };
const newPerson = { ...person, city: "Chicago", name: "Peter" }; // Using comma like this, we can easily change or update the value in the copied array.
console.log(person);
console.log(newPerson);
