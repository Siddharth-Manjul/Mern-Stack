// Promises.

// Async await
// Consume/use promises.

// Pending, Rejected, Fullfilled

const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  if(random === value) {
    resolve('You guessed correctly');
  } else {
    reject('Wrong Number');
  }
});

console.log(promise);

// promise.then((data) => console.log(data));
promise.catch((err) => console.log(err));
