const {Coffee,CoffeeSchema} = require('./coffees.model')

function setupModels(sequelize){
    Coffee.init(CoffeeSchema,Coffee.config(sequelize))
}

module.exports =setupModels