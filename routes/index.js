const Router = require('express')
const router = new Router()
const usersRouter = require('./usersRouter')
const goodsRouter = require('./goodsRouter')
const servicesRouter = require('./servicesRouter')
const goodsCategoryRouter = require('./goodsCategoryRouter')
const servicesCategoryRouter = require('./servicesCategoryRouter')

router.use('/user', usersRouter)
router.use('/good', goodsRouter)
router.use('/service', servicesRouter)
router.use('/goodCategory', goodsCategoryRouter)
router.use('/serviceCategory', servicesCategoryRouter)


module.exports = router