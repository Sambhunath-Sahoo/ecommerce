const express = require("express");
const products = require("./data/products");

const app = express();
const port = 4000;

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
