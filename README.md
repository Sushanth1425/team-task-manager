# Team Task Manager

A full-stack Team Task Management Web Application built using the MERN stack.

This application allows users to create projects, manage team members, assign tasks, track task progress, and monitor dashboard analytics with role-based access control.

---

# Live Demo

## Frontend
https://team-task-manager-seven-virid.vercel.app/

## Backend API
https://team-task-manager-71fa.onrender.com/

---

# GitHub Repository

https://github.com/Sushanth1425/team-task-manager

---

# Features

## Authentication
- User Signup
- User Login
- JWT Authentication
- Protected Routes

## Project Management
- Create Projects
- Add Members to Projects
- View Assigned Projects

## Task Management
- Create Tasks
- Assign Tasks to Team Members
- Update Task Status
- Priority Levels
- Due Dates

## Dashboard
- Total Tasks
- Tasks by Status
- Overdue Tasks
- Tasks Per User

## Role-Based Access Control

### Admin
- Create Projects
- Add Members
- Create Tasks
- Assign Tasks

### Member
- View Assigned Projects
- Update Assigned Task Status

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

## Deployment
- Vercel (Frontend)
- Render (Backend)

---

# Folder Structure

## Backend

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── package.json
└── server.js
```

## Frontend

```bash
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── vite.config.js
```

---

# Environment Variables

## Backend `.env`

```env
PORT=5050
MONGO_URI=ur_mongodb_connection_string
JWT_SECRET=ur_secret_key
FRONTEND_URL=http://localhost:5173
```

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5050/api
```



+










---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Sushanth1425/team-task-manager.git
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend folder.

Run backend:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5050
```

---

## 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` file inside frontend folder.

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Signup

```http
POST /api/auth/signup
```

### Login

```http
POST /api/auth/login
```

---

## Projects

### Create Project

```http
POST /api/projects
```

### Get Projects

```http
GET /api/projects
```

### Add Member

```http
POST /api/projects/:id/members
```

---

## Tasks

### Create Task

```http
POST /api/tasks
```

### Get Tasks

```http
GET /api/tasks
```

### Update Task Status

```http
PUT /api/tasks/:id
```

---

## Dashboard

### Get Dashboard Stats

```http
GET /api/dashboard
```

---

# Security Features

- JWT Authentication
- Password Hashing using bcryptjs
- Protected API Routes
- Input Validation
- Helmet Security Middleware
- CORS Protection
- XSS Sanitization using DOMPurify

---

# Screenshots

## Login Page
<img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/bdd61a4a-cbad-4d37-8141-36514cb7951d" />

## Signup Page
<img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/d94dc803-a151-45be-8606-024d16375fb2" />

## Dashboard
<img width="1920" height="1032" alt="Image" src="https://github.com/user-attachments/assets/3e41e8f3-99d4-41a3-8698-e9104a3f63e7" />


## Task Creation and Updation
Add screenshot here
<img width="1920" height="1212" alt="Image" src="https://github.com/user-attachments/assets/f1f664cc-3124-445b-b8b1-b1ddd9df48ad" />


---




# Author

**Sushanth Balasekaran**


GitHub: [https://github.com/Sushanth1425](https://github.com/Sushanth1425)

---