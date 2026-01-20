require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const TodoModel = require('./Models/Todo.js')

const app = express()

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : '*',
  credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())

// MongoDB connection
// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI
console.log('MONGODB_URI:', MONGODB_URI) // Add this line to debug
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err))

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findById(id)
    .then(todo => {
        todo.done = !todo.done;
        return todo.save();
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id : id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})