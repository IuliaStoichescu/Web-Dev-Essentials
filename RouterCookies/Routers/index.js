const express = require('express');
const app = express();
const PORT = 3000;
const shelterRoute = require('./routes/shelters');
const dogRoute = require('./routes/dogs');
const adminRoute = require('./routes/admin');


app.use('/shelters', shelterRoute);
app.use('/dogs', dogRoute);
app.use('/admin', adminRoute);

app.listen(PORT, () => {
   console.log('Server 3000 up and running...')
})