const {Router} = require('express')
const { getUsers, register } = require('../controllers/auth')
const {validationMiddleware} = require('../middlewares/auth-middleware')
const { registerValidation, loginValidation } = require('../validators/auth')
const router = Router()

router.get('/get-users', getUsers)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware)

module.exports = router