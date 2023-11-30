const {models} = require ('../libs/sequelize')

class CoffeeService {
    constructor(){

    }
    async find() {
        const res = await models.Coffee.findAll()
        return res
    }
    async create(data) {
        const res = await models.Coffee.create(data)
        return res
    }
}
module.exports =CoffeeService