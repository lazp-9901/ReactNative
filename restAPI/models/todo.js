const mongoose = require('mongoose');

const toDo = new mongoose.Schema({
    work: String,
    time: String
});

module.exports = mongoose.model('todo', toDo);