const Project= require('../models/Project')
const User= require('../models/User')

exports.createProject= async (req, res) => {

  try {
    const project= await Project.create({...req.body, admin: req.user.id, members: [req.user.id]})
    res.status(201).json(project)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.getProjects= async (req, res) => {
  try {
    const projects= await Project.find({members: req.user.id}).populate('members', 'name email')
    res.json(projects)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.addMember= async (req, res) => {

  try {
    const project= await Project.findById(req.params.id)
    if (!project) return res.status(404).json({message: 'Project not found'})
    
    if (project.admin.toString() !== req.user.id) return res.status(403).json({message: 'Only admin can add members'})

    const user= await User.findOne({email: req.body.email})
    if (!user) return res.status(404).json({message: 'User not found'})
    const exists= project.members.some(m=> m.toString() === user._id.toString())
    if(exists) {return res.status(400).json({message: 'User already added'})
  }
    project.members.push(user._id)
    await project.save()

    res.json({message: 'Member added'})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}