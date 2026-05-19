const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.signup = async (req, res) => {

  try {
    const {name, email, pwd}= req.body
    if(!name || !email || !pwd) return res.status(400).json({message:'All fields required'})

    const exists = await User.findOne({email})
    if (exists) return res.status(400).json({message: 'User already exists'})
    
    const hashed = await bcrypt.hash(pwd, 10)
    const user = await User.create({name, email, pwd: hashed
    })
    
    res.status(201).json({message: "User created successfully"})

  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.login = async (req, res) => {
  try {
    const {email, pwd} = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({message: 'Invalid credentials'})

    const match = await bcrypt.compare(pwd, user.pwd)
    if (!match) return res.status(400).json({message: 'Invalid credentials'})    

    const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '7d'})
    res.json({token, user})

  } catch (err) {
    res.status(500).json({message: err.message})
  }
}