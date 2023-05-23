const sequelize = require ('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type:DataTypes.STRING}
})
const Services = sequelize.define('services',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
})
const ServicesCategory = sequelize.define('services_category', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type:DataTypes.STRING}
})
const Goods = sequelize.define('goods',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    image: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    description: {type:DataTypes.STRING},
    price: {type:DataTypes.STRING},
})
const GoodsCategory = sequelize.define('goods_category', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type:DataTypes.STRING}
})
const Orders = sequelize.define('orders', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    content:{type:DataTypes.STRING},
    totalPrice: {type:DataTypes.STRING}
})

GoodsCategory.hasMany(Goods)
Goods.belongsTo(GoodsCategory)

ServicesCategory.hasMany(Services)
Services.belongsTo(ServicesCategory)

module.exports = {
    Users,
    Goods,
    Services,
    ServicesCategory,
    GoodsCategory,
    Orders
}