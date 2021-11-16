const express = require('express');
const router = express.Router();
const toDo = require('../models/todo');


//get all todo
router.get('/', async(req, res)=>{
    const todos = await toDo.find();
    res.json(todos);
});

router.post('/new', async(req,res)=>{
    const newToDo = new toDo(req.body);
    const saveNewToDo = await newToDo.save();
    res.json(newToDo);
});

//get by ID
router.get('/get/:id', async(req,res)=>{
    const todo = await toDo.findById({_id: req.params.id});
    res.json(todo);
})

router.delete('/delete/:id', async(req,res)=>{
    const todo = await toDo.findByIdAndDelete({_id: req.params.id});
    res.json(todo);
})

router.patch('/update/:id', async(req,res)=>{
    const todo = await toDo.updateOne({_id: req.params.id} ,{$set: req.body});
    res.json(todo);
})

//get rondom todo
router.get('/random', async(req,res)=>{
    const count = await toDo.countDocuments();//dem so document
    const random = Math.floor(Math.random()*count);
    const todo = await toDo.findOne().skip(random); 
    res.json(todo);
})

module.exports = router;