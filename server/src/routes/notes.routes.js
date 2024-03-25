//1. получение заметок для нужного пользователя(из jwt доставать id)
//2. добавление заметок для нужного пользователя(из jwt доставать id)
//3. обновление заметок для нужного пользователя(из jwt доставать id)
//4. удаление заметок для нужного пользователя(из jwt доставать id)

//вот это (из jwt доставать id) вынести в мидлварину

const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const Router = require('express')
const controller = require('../controllers/notes.controllers')
const router = new Router()

const authenticateToken = (req,res,next) =>{
    const authHeader = req.headers['authorization']
	const token = authHeader
    if(!token){
        return res.status(401).json({msg: 'Token required!'})
    }
    jwt.verify(token, secret, (err, data) =>{
        if(err){
            return res.status(403).json({msg: 'Incorrect jwt token!'})
        }
        req.data = data
        next()
    })
}

router.get('/get', authenticateToken, controller.getNotes)
router.post('/create', authenticateToken, controller.createNote)
router.put('/update', authenticateToken, controller.updateNote)
router.delete('/delete', authenticateToken, controller.deleteNote)

module.exports = router