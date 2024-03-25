const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DB_PORT = process.env.DB_PORT
const DB_NAME = process.env.DB_NAME

const pool = new Pool({
	user: USER,
	password: PASSWORD,
	host: 'localhost',
	port: DB_PORT,
	database: DB_NAME,
})

module.exports = pool
