const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is our home page");
  }
  if (req.url === "/about") {
    res.end("This is our about page");
  }
  
});

server.listen(5000);