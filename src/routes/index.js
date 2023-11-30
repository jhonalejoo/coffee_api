const express = require('express')
const coffeesRouter = require('./coffees.router')
const commentsRouter = require('./comments.router')


function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/coffees',coffeesRouter)
    router.use('/comments',commentsRouter)
}

module.exports  =routerApi