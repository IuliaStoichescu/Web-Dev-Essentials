//get a server up and running with express
const express = require('express');
const app = express();

// app.use((req, res) => {
//    console.log("Got a request");//everytime we have an incoming request this will run
//    // res.send("<h1>Hello from Express!</h1>");//send a response to the client
// })
app.get('/', (req, res) => {
   res.send("<h1>Hello from Express!</h1>");
});

app.post('/cats', (req, res) => {
   res.send("<h1>Got a POST request!</h1>");
});

app.get('/cats', (req, res) => {
   res.send("<h1>Meow!</h1>");
});

app.get('/dogs', (req, res) => {
   res.send("<h1>Woof!</h1>");
});
//generic response for any other route
app.get(/(.*)/, (req, res) => {
   res.send("<h1>404 Not Found</h1>");
});

app.get('/r/:subreddit', (req, res) => {
   const { subreddit } = req.params;//destructuring to get the value of subreddit from the request parameters
   res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});//pattern matching route, :subreddit is a placeholder for any value that comes after /r/

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
//query strings
app.get('/search', (req, res) => {
   const { q } = req.query;
   if (!q) {
      res.send("<h1>Nothing found if nothing searched!</h1>");
   }
   res.send(`<h1>Search results for: ${q}</h1>`);
});
//query string is the part of the URL that comes
// after the ? and is used to pass data to the server,
// in this case we are looking for a query parameter called q
//localhost:3000/search?q=dogs will return "Search results for: dogs"
