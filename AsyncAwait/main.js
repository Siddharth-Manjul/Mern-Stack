// Async / Await.
// Async must be present, Always return a promise.
// Await waits till promise is settled.
// Error handling - try/catch block.

// const example = async () => {
//   return 'hello there'
// }

// async function someFunc() {
//   const result = await example()
//   console.log(result);
//   console.log('hello world');
// }

// console.log(example());
// someFunc();

const users = [
  { Id: 1, name: "john" },
  { Id: 2, name: "susan" },
  { Id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

// Using Async/Await.
const getData = async () => {
  try {
    // Preferred way.
    const user = await getUser("susan");
    const articles = await getArticles(user.Id);
    console.log(articles);

    // Normal way.
    // const user = await getUser("johns");
    // if (user) {
    //   const articles = await getArticles(user.Id);
    //   console.log(articles);
    // }
  } catch (error) {
    console.log(error);
  }
};
getData();

// Using .then and .catch to acces the user or articles.
// getUser("anna")
//   .then((user) => getArticles(user.Id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);

    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name: ${name}`);
    }
  });
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);

    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong Id`);
    }
  });
}
