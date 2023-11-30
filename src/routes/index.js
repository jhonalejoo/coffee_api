const express = require('express')
const coffeesRouter = require('./coffees.router')

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/coffees',coffeesRouter)
}

module.exports  =routerApi