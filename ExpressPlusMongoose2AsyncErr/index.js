const { v4: uuidv4 } = require('uuid');

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const Product = require('./models/product');
const mongoose = require('mongoose');
const AppError = require('./AppError');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
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

app.post('/products', async (req, res, next) => {
   try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.redirect(`products/${newProduct._id}`)
   } catch (e) {
      next(e);
   }

})

// app.get('/products/:id', async (req, res, next) => {
//    try {
//       const { id } = req.params;
//       const productId = await Product.findById(id);
//       if (!productId) {
//          throw new AppError('Count not find product', 404);
//       }
//       res.render("products/show", { productId });
//    } catch (e) {
//       next(e);
//    }
// })
function wrapAsync(fn) {
   return function (req, res, next) {
      fn(req, res, next).catch(e => next(e));
   }
}
app.get('/products/:id', wrapAsync(async (req, res, next) => {
   const { id } = req.params;
   const productId = await Product.findById(id);
   if (!productId) {
      throw new AppError('Count not find product', 404);
   }
   res.render("products/show", { productId });
}))

app.get('/products/:id/edit', async (req, res, next) => {
   const { id } = req.params;
   const product = await Product.findById(id);
   if (!product) {
      return next(new AppError('Count not find product', 404));
   }
   res.render("products/edit", { product });
})

app.put('/products/:id', async (req, res, next) => {
   try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
      res.redirect(`/products/${product._id}`);
   } catch (e) {
      next(e);
   }

})

app.delete('/products/:id', async (req, res) => {
   const { id } = req.params;
   await Product.findByIdAndDelete(id);
   res.redirect('/products')
})

const handleValidationError = err => {
   console.dir(err);
   return err;
}

app.use((err, req, res, next) => {
   console.log(err.name);
   if (err.name === 'ValidationError') err = handleValidationError(err);
   next(err);
})

app.use((err, req, res, next) => {
   const { status = 500, message = 'Something went wrong' } = err;
   res.status(status).send(message);
})

//products?category=dairy etcc

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});