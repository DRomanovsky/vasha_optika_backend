const Router = require('express')
const router = new Router()
const goodsController = require('../controllers/goodsController')
const authChecker = require('../middleware/AuthMiddleware')

router.post('/', authChecker, goodsController.create)
router.delete('/delete/:id', authChecker, goodsController.delete)
router.get('/', goodsController.getAll)
router.get('/:id', goodsController.getOne)

module.exports = router