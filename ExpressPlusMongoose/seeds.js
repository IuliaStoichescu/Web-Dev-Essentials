const Product = require('./models/product');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
   .then(() => {
      console.log("Succesfully Mongo connected to port 27017")
   })
   .catch(err => {
      console.log("Oh no !! Error: ", err);
   })

//CREATE ONE PRODUCT
// const p = new Product(
//    {
//       name: 'Ruby Grapefruit',
//       price: 1.99,
//       category: 'fruit'
//    }
// )
// p.save()
//    .then(p => console.log(p))
//    .catch(err => {
//       console.log("Error with new product", err)
//    })
//use farmStand
//show collections
//db.products.find()

//CREATE MUTIPLE PRODUCTS
const seedProducts = [
   {
      name: 'Ruby Grapefruit',
      price: 1.99,
      category: 'fruit'
   },
   {
      name: 'Yellow Tomato',
      price: 2.99,
      category: 'vegetable'
   },
   {
      name: 'Sour Pickle',
      price: 1.50,
      category: 'vegetable',
   },
   {
      name: 'Blue Cheese',
      price: 2.50,
      category: 'dairy'
   },
   {
      name: 'Vanilla Oat Milk',
      price: 4.50,
      category: 'dairy'
   }
];
Product.insertMany(seedProducts)
   .then(p => console.log(p))
   .catch(err => {
      console.log("Error with new product", err)
   })