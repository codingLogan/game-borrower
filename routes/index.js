var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("we made it here")
  res.render('index', { title: 'Express Did not find a file' });
});

// Router implements middleware interface, so it's valid to pass to app.use()
module.exports = router;
