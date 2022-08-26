const { readFile } = require("fs");

console.log("Started the first task");

// Check file path.
readFile("../Content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
  console.log("Completed first task");
});

console.log("Starting new task");
