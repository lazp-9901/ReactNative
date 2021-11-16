const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//database
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true})

const db =   mongoose.connection;

db.once('open', ()=>{
    console.log('connected to MongoDB database ...');
})

app.use(cors())

//middleware
app.use(bodyParser.json());

//Routes
const Todo = require('./routes/todo');
app.use('/todo', Todo);


app.listen(3000, console.log('listeing on port 3000'));