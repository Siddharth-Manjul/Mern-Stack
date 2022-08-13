function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase('peter');

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb, cc) {
  const fullName = `${name} smith`;
  cb(fullName);
  // Some more logic here.
}

handleName("peter", makeUppercase); // You must not invoke the function here "makeUppercase()" otherwise it will through an error.
handleName("peter", reverseString);

handleName("susan", (value) => console.log(value));

// Array methods, setTimeout, event listener etc.
// Wrapping and usage of Callback function in HTML.
/*
 const btn = document.querySelector('.btn)
btn.addEventListener('click', function () {
  console.log('Hello World);
})
*/
