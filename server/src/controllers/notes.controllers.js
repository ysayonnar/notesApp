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
        //обязательно в документации указать на обязательное наличие каждого из полей
        try {
            const { id, title, content, date } = req.body
            if(!id || !title || !content || !date){
                return res.status(400).json({msg: 'All parametrs required.'})
            }
            const dbRequest = await db.query('UPDATE notes SET title = $1 , content = $2, date = $3 WHERE id = $4', [title, content, date, id])
            res.json({msg: 'Successfully updated.'})
        } catch (e) {
            console.log(e)
            res.status(400).json({msg: 'Something went wrong.'})
        }
    }

    async deleteNote(req,res){
        const id = req.body.id
        if(!id){
            return res.status(400).json({msg: 'Id required.'})
        }
        const dbRequest = await db.query('DELETE FROM notes WHERE id = $1', [id])
        res.json({ msg: 'Successfully deleted' })
    }
}


module.exports = new NotesController()