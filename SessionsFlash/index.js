const express = require('express');
const app = express();
const session = require('express-session');
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUnitialized: false };
app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
   // 
   if (req.session.count) {
      req.session.count += 1;
   }
   else {
      req.session.count = 1;
   }
   res.send(`You viewed this page ${req.session.count} times`);
})

app.get('/register', (req, res) => {
   const { username = 'Anynomous' } = req.query;
   req.session.username = username;
   res.redirect('/greet');
})
//.../register?username=iuli it will show welcome back iuli
app.get('/greet', (req, res) => {
   const { username } = req.session;
   res.send(`Welcome back ${username}!!`)
})

app.listen(3000, () => {
   console.log('Server works on pprt 3000..')
})