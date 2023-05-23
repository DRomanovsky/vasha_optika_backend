const {Services} = require('../models/models')
const ApiError = require('../error/ApiError')

class ServicesController{
    async create(req, res, next){
        try{
            const {name, price, servicesCategoryId} = req.body
    
            const service = await Services.create({name, price, servicesCategoryId})
    
            return res.json(service)
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {servicesCategory} = req.query
        let services
        if(!servicesCategory){
            services = await Services.findAndCountAll()
        }
        if(servicesCategory){
            services = await Services.findAndCountAll({where:{servicesCategory}})
        }
        return res.json(services)
    }
    async getOne(req,res){
        const {id}= req.params
        const service = await Services.findOne(
            {
                where:{id}
            }
        )
        return res.json(service)
    }
    async delete(req, res){
        const {id} = req.params
        const services = await Services.destroy(
            {
                where:{id}
            }
        )
        return res.json(services) 
    }   
}

module.exports = new ServicesController()