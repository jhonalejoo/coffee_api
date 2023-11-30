const Coffee = require('../database/models/coffees.model')

class CoffeeService {
    constructor(){

    }
    async find() {
        const res = await Coffee.findAll()
        return res
    }
    async create(data) {
        const res = await Coffee.create(data)
        return res
    }
}
module.exports =CoffeeService