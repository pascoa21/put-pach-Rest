const { request } = require('express')
const express = require('express')
const router = express.Router()
const controller = require('../Controllers/gamesController')
const cors = require('cors')

router.put("/games/:id", cors(), controller.atualizar)

module.exports = router