const express= require('express')
require('dotenv').config()
const cors= require('cors')
const helmet= require('helmet')
const morgan = require('morgan')

const connetDB= require('./utils/db')
connetDB()

const app= express()

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'PUT', 'DELETE', 'POST', 'PATCH'],
  credentials: true
}))
app.use(express.json())
app.use(helmet())
app.use(morgan('dev'))

const authRoutes = require('./routes/authRoutes')
const projectRoutes = require('./routes/projectRoutes')
const taskRoutes = require('./routes/taskRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')

app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/tasks', taskRoutes)
app.use('/api/dashboard', dashboardRoutes)

app.get("/", (req, res)=> {res.send(`Backend running on successfully`)})

const port= process.env.PORT || 5050
app.listen(port, ()=>console.log(`Server running on port ${port}`))