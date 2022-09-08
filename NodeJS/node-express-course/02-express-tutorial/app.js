const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./basic-node.html");

const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { content: "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { content: "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { content: "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
  console.log("User just hit the server");
});

server.listen(5000);
