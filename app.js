const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


const MONGO_URL = "mongodb://127.0.0.1:27017/e-commerce";

main()
.then(() => {
    console.log("connected to db");
})
.catch((err) => {clearImmediate
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


//Index Route
app.get("/products", async(req, res) => {
 const allProducts = await Product.find({});
 res.render("./products/index.ejs", { allProducts });
});



//New Route
app.get("/products/new", async(req, res) => {
  res.render("./products/new.ejs");
});

//show Route
app.get("/products/:id", async(req, res) => {
  let {id} = req.params;
   const product = await Product.findById(id);
   res.render("./products/show.ejs", { product });
});

//create Route
app.post("/products", async(req, res) => {
const newProduct = new Product(req.body.product);
await newProduct.save();
res.redirect("/products");
});

//Edit Route
app.get("/products/:id/edit", async (req, res) => {
  let {id} = req.params;
  const product = await Product.findById(id);
  res.render("./products/edit.ejs", { product });
});

//update Route
app.put("/products/:id", async (req, res) => {
  let {id} = req.params;
  await Product.findByIdAndUpdate(id, {...req.body.product});
    res.redirect(`/products/${id}`);
  });

  //delete route
  app.delete("/products/:id", async (req, res) => {
    let {id} = req.params;
    let deletedProduct = await Product.findByIdAndDelete(id);
     res.redirect("/products" );
  });

  //search route
  app.get('/search', (req, res) => {
    res.render("./products/search.ejs");
  });
  

//search route
app.post("/search", async (req, res) => {
  try {
    const { query } = req.body;
    const products = await Product.find({ "title": { $regex: query, $options: 'i' } });
    res.render("./products/search.ejs", { products });
} catch (error) {
    console.error("Error rendering search results:", error);
    res.status(500).send("Internal Server Error");
}
});


app.listen(8080, () => {
    console.log("server is listening on port: 8080");
});