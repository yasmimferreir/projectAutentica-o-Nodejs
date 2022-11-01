const router = require('express').Router()

//importação do controller
const UserController = require('./../controllers/UserController')

//exportar 
router.post('/create', UserController.create)
router.post('/login', UserController.login)

module.exports = router