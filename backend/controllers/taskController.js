const Task = require('../models/Task')
const Project = require('../models/Project')

exports.createTask = async (req, res)=> {
  try {
    const project = await Project.findById(req.body.project)
    if (!project) return res.status(404).json({message: 'Project not found'})
      
    if (!project.members.includes(req.user.id)) 
      return res.status(403).json({message: 'Not a project member'})
        
    if (req.body.assignedTo && !project.members.includes(req.body.assignedTo)) 
      return res.status(400).json({message: 'Assigned user is not in project'})

    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.getTasks = async (req, res)=> {
  try {
    const {projectId}= req.query
    const filter= {}
    if(projectId) {filter.project= projectId}

    const tasks= await Task.find(filter).populate('assignedTo', 'name email').populate('project', 'name')
    res.json(tasks)

  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.updateTask= async (req, res)=> {
  try {
    const task= await Task.findById(req.params.id)

    if (!task) return res.status(404).json({message: 'Task not found'})

    if (task.assignedTo && task.assignedTo.toString() !== req.user.id) return res.status(403).json({message: 'Access denied'})
    task.status = req.body.status || task.status
    await task.save()

    res.json(task)

  } catch (err) {
    res.status(500).json({message: err.message})
  }
}