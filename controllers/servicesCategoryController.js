const {ServicesCategory} = require('../models/models')
const ApiError = require('../error/ApiError')

class ServicesCategoryController{
    async create(req,res){
        const {name} = req.body
        const servicesCategory = await ServicesCategory.create({name})
        return res.json(servicesCategory)
    }
    async getAll(req,res){
        const servicesCategories = await ServicesCategory.findAll()
        return res.json(servicesCategories)
    }
    async getOne(req,res){
        const {id} = req.params
        const servicesCategory = await ServicesCategory.findOne(
            {
                where:{id}
            }
        )
        return res.json(servicesCategory)
    }
    async delete(req, res){
            const {id} = req.params
            
            const servicesCategory = await ServicesCategory.destroy(
                {
                    where:{id}
                }
            )
            return res.json(servicesCategory) 
    }
}

module.exports = new ServicesCategoryController()