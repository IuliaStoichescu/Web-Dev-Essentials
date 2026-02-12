const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')
// if for example we want to import our own data
//const someData = require('./data.json)
app.use(express.static(path.join(__dirname, 'assets')));//use this folder
app.set('view engine', 'ejs');// Set the view engine to EJS
app.set('views', path.join(__dirname, '/views'));// Set the directory for EJS templates
app.get('/', (req, res) => {
   res.render('home');
})

app.get('/rand', (req, res) => {
   const randomNum = Math.floor(Math.random() * 10) + 1;
   res.render('random', { randomNum });
})

app.get('/r/:subreddit', (req, res) => {
   const { subreddit } = req.params;
   const data = redditData[subreddit];
   if (data) {
      res.render('subreddit', { ...data }); ///spreading, will have access to all data
   }
   else {
      res.render('notfound', { subreddit })
   }
});

app.get('/cats', (req, res) => {
   const cats = ['July', 'Clemi', 'Kitty', 'Zambi', 'Blacky'];
   res.render("cats", { cats });
})

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});