// Promises.

// Async await
// Consume/use promises.

// Pending, Rejected, Fullfilled

const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  if (random === value) {
    resolve("You guessed correctly");
  } else {
    reject("Wrong Number");
  }
});

console.log(promise);

// Using .then() method.
promise.then((data) => console.log(data));

// Using .catch() method.
promise.catch((err) => console.log(err));

// Using composition of .then() and .catch() methods.
promise.then((data) => console.log(data)).catch((err) => console.log(err));

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
  .then(() => addColor(3000, ".second", "blue"))
  .then(() => addColor(2000, ".third", "green"))
  .catch((err) =>
    console.log(err)
  );
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such element: "${selector}"`);
    }
  });
}
