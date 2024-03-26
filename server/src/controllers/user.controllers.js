const db = require('../database/db')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')

const generateAccessToken = (id, username) =>{
    const payload = {
        id,
        username
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class UserController{
    async registration(req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(200).json({msg: 'The username or password is too short.', errors: errors})
            }
            const {username, password} = req.body
            const candidate = await db.query(
                'SELECT * FROM person WHERE username=$1',
                [username.toLowerCase()])
            if(candidate.rows.length != 0){
                return res.status(200).json({msg: `User with name '${username}' already existing.`})
            }
            const hashPassword = bcrypt.hashSync(password, 7)
            const newPerson = await db.query(
		        'INSERT INTO person (username, password) values ($1, $2) RETURNING *',
				[username.toLowerCase(), hashPassword])
            res.json({msg: 'User was successfully registered.'})
        } catch (e) {
            console.log(e)
            res.status(400).json({msg: 'registration error'})
        }
    }

    async login(req, res){
        try {
            const {username, password} = req.body
            const user = await db.query('SELECT * FROM person WHERE username = $1', [username])
            if(user.rows.length === 0){
                return res.status(400).json({msg: `User with name '${username}' was not found.`})
            }
            const validPassword = bcrypt.compareSync(password, user.rows[0].password)
            if(!validPassword){
                return res.status(400).json({msg: 'Incorrect password!'})
            }
            const token = generateAccessToken(user.rows[0].id, user.rows[0].username)
            return res.json({ 'jwt-token': token })

        } catch (e) {
            console.log(e)
			res.status(400).json({ msg: 'login error' })
        }
    }

    async getUsers(req,res){
        try {
            const data = await db.query('SELECT * FROM person')
            res.json(data.rows)
        } catch (e) {
            console.log(e)
            res.status(404)
        }
    }
}

module.exports = new UserController()