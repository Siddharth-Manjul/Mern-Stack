const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/bigger.txt", `hello world ${i}\n`, { flag: "a" });
}
