// Attempt to connect to a Mongo instance, and give the instance to all routes
const mongo = require('./mongo')
mongo.connectToMongo(res => {
  if ( res ) {
    console.error(res)
  }
})

console.log({env: process.env.GAMEBORROWER_DB})