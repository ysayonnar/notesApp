const dotenv = require('dotenv');
const express = require('express')
const authRouter = require('./routes/user.routes')
const notesRouter = require('./routes/notes.routes')

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use('/auth', authRouter)
app.use('/protected', notesRouter)

app.listen(PORT, () =>{
    console.log(`Server listen on port ${PORT}.`)
})
