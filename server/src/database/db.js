import {Pool} from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const USER = procces.env.USER
const PASSWORD = process.env.PASSWORD
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

const pool = new Pool({
	user: USER,
	password: PASSWORD,
	host: 'localhost',
	port: DB_PORT,
	database: DB_NAME, // еще не вписал в .env
})

module.exports = pool
