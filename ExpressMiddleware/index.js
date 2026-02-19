const express = require('express');
const app = express();
const PORT = 3000;
var morgan = require('morgan');
const AppError = require('./AppError');
app.use(morgan('tiny')); //code to runs on every single request
// app.use('/', (req, res, next) => {
//    console.log('My first middleware hihi!!');
//    next();
// })
app.use((req, res, next) => {
   req.requestTime = Date.now();
   console.log(req.method, req.path)
   next();
})

const verifyPassword = (req, res, next) => {
   const { password } = req.query;
   if (password === 'hehe') {
      next();
   }
   // res.send('Sorry you need a password!!');
   // res.status(401);
   // throw new Error('Sorry you need a password!!')
   throw new AppError('Paswword reqired', 401);
}

app.get('/', (req, res) => {
   console.log(`Request time: ${req.requestTime}`);//was added in middleware
   res.send("HOME PAGE")
})

app.get('/cats', (req, res) => {
   res.send("MEOW MEOW")
})

app.get('/admin', (req, res) => {
   throw new AppError('You are not an admin!!', 403);
})

app.get('/secret', verifyPassword(), (req, res) => {
   res.send("I love cats!!");
})

app.get('/error', (req, res) => {

})

app.use((req, res) => {
   res.status(404).send("NOT FOUND!")
})
app.use((err, req, res, next) => {
   res.status(500).send("Oh no !! Error!!");
   // next(err);
})

app.use((err, req, res, next) => {
   const { status = 500, message = 'Something went wrong' } = err; //we give status a default value
   res.status(status).send(message);
}) //we can also do this , cleaner

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});