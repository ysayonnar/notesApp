const db = require('../database/db')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')
const { json } = require('express')

class NotesController{
    async getNotes(req,res){
        try {
            const data = req.data
            const notes = await db.query('SELECT * FROM notes WHERE userId = $1', [data.id])
            res.json({
                notes: notes.rows,
                userData: data
            })
        } catch (e) {
            console.log(e)
            res.json('Error, check logs.')
        }
    }

    async createNote(req,res){
        try {
            const {title, content, date} = req.body
            if(!title || !content || !date){
                return res.status(400).json({msg: 'all data expected.'})
            }
            const userId = req.data.id
            const data = await db.query('INSERT INTO notes (title, content, date, userId) values ($1, $2, $3, $4)', [title, content, date, userId])
            res.json({msg: 'successfully created.'})
        } catch (e) {
            console.log(e)
			res.json('Error, check logs.')
        }
    }

    //здесь айдишник тоже буду передавать в body 
    async updateNote(req,res){
        res.json({ msg: req.data })
    }

    async deleteNote(req,res){
        res.json({ msg: req.data })
    }
}


module.exports = new NotesController()