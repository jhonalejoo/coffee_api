const { Model, DataTypes } = require('sequelize')

const COFFEE_TABLE = 'coffees'

class Coffee extends Model {
   static config(sequelize) {
      return {
         sequelize,
         tableName: COFFEE_TABLE,
         modelName: 'Coffee',
         timestamps: true
      }
   }
}

const CoffeeSchema = {
   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
   },
   name: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'name'
   }, 
   image: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'image'
   }
}

module.exports = { Coffee, CoffeeSchema }