const express = require('express')
const app = express() //instânciar o express
const router = require('./routes/gamesRoutes')

app.use(express.json())
app.use('/', router)


module.exports = app