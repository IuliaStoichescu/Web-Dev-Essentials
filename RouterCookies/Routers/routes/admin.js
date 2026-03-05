const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
   if (req.query.isAdmin) {
      next();
   } //.../admin/deleteeverything?isAdmin=true
   res.send("Sorry not an admin!!");
})

router.get('/topsecret', (req, res) => {
   res.send("This is top secret!!");
})

router.get('/deleteEverything', (req, res) => {
   res.send("DELETED EVERYTHING!");
})

module.exports = router;