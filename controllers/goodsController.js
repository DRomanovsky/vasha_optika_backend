const uuid = require('uuid')
const path = require('path')
const {Goods} = require('../models/models')
const ApiError = require('../error/ApiError')
const { appendFile } = require('fs')

class GoodsController{
    async create(req,res, next){
        try{
            const {name, price, description, goodsCategoryId} = req.body
            const {image} = req.files
            let fileName = uuid.v4( + ".jpg")
            image.mv(path.resolve(__dirname, '..', "static", fileName))
    
            const good = await Goods.create({name, price, description, image: fileName, goodsCategoryId})
    
            return res.json(good)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {goodsCategoryId, limit, page} = req.query
        limit = limit || 6
        page = page || 1
        let offset = page * limit - limit
        let goods
        if(!goodsCategoryId){
            goods = await Goods.findAndCountAll({limit, offset})
        }
        if(goodsCategoryId){
            goods = await Goods.findAndCountAll({where:{goodsCategoryId}, limit, offset})
        }
        return res.json(goods)
    }
    async getOne(req,res){
        const {id}= req.params
        const good = await Goods.findOne(
            {
                where:{id}
            }
        )
        return res.json(good)
    }
    async delete(req, res){
        const {id} = req.params
        const goods = await Goods.destroy(
            {
                where:{id}
            }
        )
        return res.json(goods) 
    }   
}

module.exports = new GoodsController()