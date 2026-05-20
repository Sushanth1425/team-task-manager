const router = require('express').Router()
const auth = require('../middleware/authMiddleware')
const Task = require('../models/Task')
const Project = require('../models/Project')

router.get('/', auth, async(req,res)=>{
  try{
    const projects = await Project.find({members: req.user.id})
    const projectIds = projects.map(p=> p._id)
    const tasks = await Task.find({project: {$in: projectIds}})
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