var express = require('express');
var mongo = require('../mongo')
var router = express.Router();

// Games Collection
router.get('/games', function(req, res, next) {
    console.log("hit api/games")
    
    const mongoCallback = function (err, result) {
        if (err) {
            console.error("error occured in api/games")
            res.json([])
        }
        
        console.log(result)
        res.json(result)
    }
    
    mongo.getDatabase().collection('games').find().toArray(mongoCallback)
});

module.exports = router