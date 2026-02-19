const { v4: uuidv4 } = require('uuid');

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./models/product');
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
   .then(() => {
      console.log("Succesfully Mongo connected to port 27017")
   })
   .catch(err => {
      console.log("Oh no !! Error: ", err);
   })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => { //lets make an async handler for this route
   const { category } = req.query;
   if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
   }
   else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
   }
   // console.log("ALL PRODUCTS", products);
   // res.send("PRODUCTS ARE HERE");
})

app.get('/products/new', (req, res) => {
   res.render("products/new");
})

app.post('/products', async (req, res) => {
   const newProduct = new Product(req.body);
   await newProduct.save();
   res.redirect(`products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
   const { id } = req.params;
   const productId = await Product.findById(id);
   res.render("products/show", { productId });
})

app.get('/products/:id/edit', async (req, res) => {
   const { id } = req.params;
   const product = await Product.findById(id);
   res.render("products/edit", { product });
})

app.put('/products/:id', async (req, res) => {
   const { id } = req.params;
   const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
   res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
   const { id } = req.params;
   await Product.findByIdAndDelete(id);
   res.redirect('/products')
})

//products?category=dairy etcc

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});