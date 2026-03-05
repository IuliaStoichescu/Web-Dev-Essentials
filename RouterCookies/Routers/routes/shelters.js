const express = require('express');
const router = express.Router();
// all /shelters dissapear because we set the route in index
//or we can rename
router.get('/', (req, res) => {
   res.send("ALL SHELTERS");
})

router.post('/', (req, res) => {
   res.send("CREATE SHELTER");
})

router.get('/:id', (req, res) => {
   res.send("VIEW ONE SHELTER");
})

router.get('/:id/edit', (req, res) => {
   res.send("EDITING ONE SHELTER");
})

module.exports = router;