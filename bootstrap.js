const mongo = require('./mongo')

// Attempt to connect to a Mongo instance, and give the instance to all routes
async function establishConnection() {
  await mongo.connectToMongo()
  .then(()=>{
    console.log("boostrap complete")
  })
}

establishConnection()

console.log({env: process.env.GAMEBORROWER_DB})