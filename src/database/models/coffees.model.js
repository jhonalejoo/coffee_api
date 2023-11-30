const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../libs/sequelize')

class Coffee extends Model {
   
}

Coffee.init(
   {
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
},{
   sequelize,
   timestamps: true,
   modelName:'coffee'
})

module.exports = Coffee