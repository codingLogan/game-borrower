const { MongoClient } = require('mongodb')

let _db

// These are exported as a utility function so other files can share the instance
module.exports = {
    connectToMongo: async function(){
        try {
            const client = await MongoClient(process.env.GAMEBORROWER_DB, { useUnifiedTopology: true }).connect()
            console.log("DB Connection: Established!")
            _db = client.db('borrow')
        } catch (err) {
            console.log("DB Connection: Failed!")
            console.error(err, "try connecting again")
        }
    },
    getDatabase: function(){
        if ( _db ) return _db
        else console.error("connect is missing, where'd it go?")
    },
    getBorrowers: function(){
        _db.collection('borrowed').find().toArray(function (err, result) {
            console.log(result)
        })
    }
}