const Router = require('express')
const router = new Router()
const servicesController = require('../controllers/servicesController')
const authChecker = require('../middleware/AuthMiddleware')

router.post('/', authChecker, servicesController.create)
router.delete('/delete/:id', authChecker, servicesController.delete)
router.get('/', servicesController.getAll)
router.get('/:id', servicesController.getOne)

module.exports = router