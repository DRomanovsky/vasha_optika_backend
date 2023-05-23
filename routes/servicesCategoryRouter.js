const Router = require('express')
const router = new Router()
const servicesCategoryController = require('../controllers/servicesCategoryController')
const authChecker = require('../middleware/AuthMiddleware')

router.post('/', authChecker, servicesCategoryController.create)
router.delete('/delete/:id', authChecker, servicesCategoryController.delete)
router.get('/', servicesCategoryController.getAll)
router.get('/:id', servicesCategoryController.getOne)

module.exports = router