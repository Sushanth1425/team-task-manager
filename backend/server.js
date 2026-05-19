const express= require('express')
require('dotenv').config()
const cors= require('cors')
const helmet= require('helmet')

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

app.get("/", (req, res)=> {res.send(`Backend running on successfully`)})

const port= process.env.PORT || 5050
app.listen(port, ()=>console.log(`Server running on port ${port}`))