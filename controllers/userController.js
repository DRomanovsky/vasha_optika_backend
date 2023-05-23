const ApiError = require('../error/ApiError')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const {Users} = require('../models/models')

const generateToken = (id, email) => {
    return jwt.sign(
        {id, email},
        process.env.SECRET_KEY,
        {expiresIn:'24h'}
    )
}

class UserController{
    async login(req, res, next){
        const {email, password} = req.body
        const user = await Users.findOne({where:{email}})
        if(!user){
            return next(ApiError.internal('Пользователь не найден!'))
        }
        let comparePassword = (password == user.password ? true : false)
        if(!comparePassword){
            return next(ApiError.badRequest('Пользователь не найден!'))
        }
        const token = generateToken(user.id, user.email)
        return res.json({token})
    }
    async check(req,res){
        const token = generateToken(req.user.id, req.user.email)
        return res.json({token})
    }
}

module.exports = new UserController()