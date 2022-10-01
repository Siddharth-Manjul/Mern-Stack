const express = require("express");
const app = express();
let { people } = require("./data");

// Static Assets
app.use(express.static("./methods-public"));

// Parse Form Data
app.use(express.urlencoded({ extended: false }));

// Read Data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// Insert Data
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send(`Please provide valid credentials`);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
