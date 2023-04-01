const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const router = require('./router')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.use('/', router)
app.use(express.static('Client'))


//port is 5000
app.listen(process.env.PORT)