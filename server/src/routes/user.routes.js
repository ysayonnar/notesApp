const Router = require('express')
const controller = require('../controllers/user.controllers')
const router = new Router()
const {check} = require('express-validator')


router.post('/registration',[
    check("username", 'Name cant be empty.').isLength({min: 3, max: 15}),
    check("password", 'Password is too short.').isLength({min: 4, max: 20})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router