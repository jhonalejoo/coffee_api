const { Model, DataTypes } = require('sequelize')
const Coffee = require('./coffees.model')
const sequelize = require('../../libs/sequelize')


class Comment extends Model {
}

Comment.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name_user: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_user'
    },
    email_user: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email_user'
    },
    phone_user: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'phone_user'
    },
    Comment: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'comment'
    } 
},{
    sequelize,
    timestamps: true,
    modelName:'comment'
})


Comment.belongsTo(Coffee,{foreignKey: 'coffe_id'})

module.exports = Comment