const router = require('express').Router()
const auth = require('../middleware/authMiddleware')
const Task = require('../models/Task')

router.get('/', auth, async(req,res)=>{
  try{
    const tasks = await Task.find()
    const total = tasks.length
    const todo = tasks.filter(t=> t.status === 'To Do').length
    const progress = tasks.filter(t=> t.status === 'In Progress').length
    const done = tasks.filter(t=> t.status === 'Done').length
    const overdue = tasks.filter(t=> t.dueDate && new Date(t.dueDate)< new Date() && t.status !== 'Done').length

    res.json({total, todo, progress, done, overdue})
    
  }catch(err){
    res.status(500).json({message: err.message})
  }
})

module.exports = router