const express = require('express')
const router = express.Router()
const coffeesController = require('../controllers/coffees.controller')

router
   .get('/',coffeesController.get)
   .post('/',coffeesController.create)

module.exports =router   