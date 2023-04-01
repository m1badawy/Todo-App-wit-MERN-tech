const mongoose = require('mongoose')
require('dotenv').config()


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const connection = mongoose
    .connect(process.env.CONNECTIONSTRING, connectionParams)
    .then(() => {
        console.log("Connected to database")
    })
    .catch((err) =>{
        console.log("Error connecting to database.", err)
    })

    module.exports = connection