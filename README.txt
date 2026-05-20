Team Task Manager

A full-stack Team Task Management Web Application built using the MERN stack.

This application allows users to create projects, manage team members, assign tasks, track task progress, and monitor dashboard analytics with role-based access control.

==================================================
LIVE DEMO
==================================================

Frontend:
https://team-task-manager-seven-virid.vercel.app/

Backend API:
https://team-task-manager-71fa.onrender.com/

==================================================
GITHUB REPOSITORY
==================================================

https://github.com/Sushanth1425/team-task-manager

==================================================
FEATURES
==================================================

AUTHENTICATION
---------------
- User Signup
- User Login
- JWT Authentication
- Protected Routes

PROJECT MANAGEMENT
-------------------
- Create Projects
- Add Members to Projects
- View Assigned Projects

TASK MANAGEMENT
----------------
- Create Tasks
- Assign Tasks to Team Members
- Update Task Status
- Priority Levels
- Due Dates

DASHBOARD
----------
- Total Tasks
- Tasks by Status
- Overdue Tasks
- Tasks Per User

ROLE-BASED ACCESS CONTROL
--------------------------

ADMIN
------
- Create Projects
- Add Members
- Create Tasks
- Assign Tasks

MEMBER
--------
- View Assigned Projects
- Update Assigned Task Status

==================================================
TECH STACK
==================================================

FRONTEND
---------
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

BACKEND
--------
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

DEPLOYMENT
------------
- Vercel (Frontend)
- Render (Backend)

==================================================
FOLDER STRUCTURE
==================================================

BACKEND
--------

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

FRONTEND
---------

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

==================================================
ENVIRONMENT VARIABLES
==================================================

BACKEND .env
--------------

PORT=5050
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173

FRONTEND .env
---------------

VITE_API_URL=http://localhost:5050/api

==================================================
INSTALLATION & SETUP
==================================================

1. CLONE REPOSITORY
--------------------

git clone https://github.com/Sushanth1425/team-task-manager.git

==================================================
2. BACKEND SETUP
==================================================

cd backend
npm install

Create .env file inside backend folder.

Run backend:

npm run dev

Backend runs on:

http://localhost:5050

==================================================
3. FRONTEND SETUP
==================================================

cd frontend
npm install

Create .env file inside frontend folder.

Run frontend:

npm run dev

Frontend runs on:

http://localhost:5173

==================================================
API ENDPOINTS
==================================================

AUTHENTICATION
---------------

Signup
POST /api/auth/signup

Login
POST /api/auth/login

--------------------------------------------------

PROJECTS
---------

Create Project
POST /api/projects

Get Projects
GET /api/projects

Add Member
POST /api/projects/:id/members

--------------------------------------------------

TASKS
------

Create Task
POST /api/tasks

Get Tasks
GET /api/tasks

Update Task Status
PUT /api/tasks/:id

--------------------------------------------------

DASHBOARD
-----------

Get Dashboard Stats
GET /api/dashboard

==================================================
SECURITY FEATURES
==================================================

- JWT Authentication
- Password Hashing using bcryptjs
- Protected API Routes
- Input Validation
- Helmet Security Middleware
- CORS Protection
- XSS Sanitization using DOMPurify

==================================================
SCREENSHOTS
==================================================

LOGIN PAGE
------------
https://github.com/user-attachments/assets/bdd61a4a-cbad-4d37-8141-36514cb7951d

SIGNUP PAGE
-------------
https://github.com/user-attachments/assets/d94dc803-a151-45be-8606-024d16375fb2

DASHBOARD
-----------
https://github.com/user-attachments/assets/3e41e8f3-99d4-41a3-8698-e9104a3f63e7

TASK CREATION AND UPDATION
---------------------------
https://github.com/user-attachments/assets/f1f664cc-3124-445b-b8b1-b1ddd9df48ad

==================================================
AUTHOR
==================================================

Sushanth Balasekaran

GitHub:
https://github.com/Sushanth1425