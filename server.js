require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database.'))

app.use(express.json())

const projectsRouter = require('./routes/projects')
app.use('/projects', projectsRouter)

app.listen(3000, () => console.log('Server started.'))
