const Router = require('express')
const router = new Router()
const goodsCategoryController = require('../controllers/goodsCategoryController')
const authChecker = require('../middleware/AuthMiddleware')

router.post('/', authChecker, goodsCategoryController.create)
router.delete('/delete/:id', authChecker, goodsCategoryController.delete)
router.get('/', goodsCategoryController.getAll)

module.exports = router