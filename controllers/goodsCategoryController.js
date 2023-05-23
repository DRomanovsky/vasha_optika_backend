const {GoodsCategory} = require('../models/models')
const ApiError = require('../error/ApiError')

class GoodsCategoryController{
    async create(req,res){
        const {name} = req.body
        const goodsCategory = await GoodsCategory.create({name})
        return res.json(goodsCategory)
    }
    async getAll(req,res){
        const goodsCategories = await GoodsCategory.findAll()
        return res.json(goodsCategories)
    }
    async delete(req, res){
        const {id} = req.params
        const goodsCategory = await GoodsCategory.destroy(
            {
                where:{id}
            }
        )
        return res.json(goodsCategory) 
    }
}

module.exports = new GoodsCategoryController()