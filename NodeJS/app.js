//  npm - global command, comes with node.
// npm --version

// Local dependency - Use it only in this particular project.
// npm i <packageName>

// Global dependency - use it in any project.
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package).
// manual approach (create package.json in the root, create properties etc).
// npm init (step by step, press emter to skip).
// npm init -y (everything default).

// RUN "npm install" WHENEVER USING THE SHARED CODE ON OTHER SYSTEM OTHERWISE THE PACKAGES WON'T WORK.

// Dev dependency command - npm i <packageName> --save-dev (or -D).
// Prefer to use nodemon as dev dependency.

const _ = require("lodash");

const items = [1, [2, 3, [4]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello World");