const { MongoClient } = require('mongodb')

let _db = {}

// These are exported as a utility function so other files can share the instance
module.exports = {
    connectToMongo: function(callback){
        MongoClient(process.env.GAMEBORROWER_DB, { useUnifiedTopology: true }).connect()
        .then(client => {
            console.log({client})
            _db = client.db('borrow')
            return callback()
        })
        .catch( err => {
            return callback(err)
        })
    },
    getDatabase: function(){
        return _db
    },
    getBorrowers: function(){
        _db.collection('borrowed').find().toArray(function (err, result) {
            console.log(result)
        })
    }
}