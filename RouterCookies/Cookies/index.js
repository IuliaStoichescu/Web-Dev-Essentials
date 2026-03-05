const express = require('express');
const app = express();
const PORT = 3000;
const cookieParser = require('cookie-parser');//to access name 
app.use(cookieParser('thisismysecret'))
app.get('/greet', (req, res) => {
   // req.cookie
   const { name = 'No-name' } = req.cookies;
   res.send(`Hei there , ${name}!!`);
})

app.get('/getsignedcookie', (req, res) => {
   res.cookie('fruit', 'raspberry', { signed: true });
   res.send('Sign your fruit cookie');
})

app.get('/verifyfruit', (req, res) => {
   console.log(req.cookies);
   console.log(req.signedCookies);
   res.send(req.cookies);
})

app.get('/setname', (req, res) => {
   res.cookie('name', 'some name')//respond with cookies , can see in the dev tools after request
   res.send('Ok i sent you a cookie!!')
})

app.listen(PORT, () => {
   console.log('Server 3000 up and running...')
})