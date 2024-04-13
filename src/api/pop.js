const router = require('express').Router();

router.get('/pop', (req, res) => {
  res.send('pop');
});

module.exports = router;
