var express = require('express');
var mongo = require('../mongo')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("hit borrower file")
    mongo.getDatabase().collection('borrowed').find({userId: 1}).toArray(function (err, result) {
        if (err) {
            console.error("error occured in borrowers file")
            res.json([])
        }
        
        console.log(result)
        res.json(result)
    })
});

router.post('/', function(req, res, next) {
    mongo.getDatabase().collection('borrowed').insertOne(
        {userId: 1, persons: ["Casey", "Hannah", "Logan"]},
        (result) => {
            console.log("finished post")
            console.log(result)
            res.json(result)
        })
})

router.delete('/', function(req, res, next) {
    mongo.getDatabase().collection('borrowed').deleteMany(
        {userId: 1}, {},
        (result) => {
            console.log("finished post")
            console.log(result)
            res.json(result)
        })
})

// Router implements middleware interface, so it's valid to pass to app.use()
module.exports = router;
