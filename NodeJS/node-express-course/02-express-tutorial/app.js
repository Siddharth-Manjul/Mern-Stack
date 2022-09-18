const express = require("express");
const app = express();
const { products } = require("./data");

// Sending JSON directly.
// app.get("/", (req, res) => {
//   res.json(products);
// });

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// Req Params.
app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});


// Single Product search using ID (Params).
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(400).send("Product does not exist!");
  }
  return res.json(singleProduct);
});

// Review (Params).
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Mast hai vro");
});

// Query String.
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("Hello World");
})

app.listen(5000, () => {
  console.log("Server is listening on port 5k...");
});
