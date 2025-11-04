# Task Management API

A simple Node.js and Express API to manage tasks. This project demonstrates RESTful endpoints, error handling, and modular route structure.

## Project Setup

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>

2. Go into the project folder:

cd task-management


3. Install dependencies:

npm install

### Run the Project
npm start


Server runs on http://localhost:3000

API Endpoints
Method	        Endpoint                     	Description
GET	              /	                       Root endpoint (welcome message)
GET	              /tasks	               Get all tasks
GET	              /task/:id	               Get a task by ID; 
                                           returns 400 if ID is invalid, 404 if task not found
POST	         /tasks	                   Create a new task
DELETE	          /task/:id	              Delete a task by ID; 
                                          returns 400/404 errors accordingly
GET	            /health	                  Health check endpoint, 
                                        returns  200 OK Notes
                                        node_modules/ is ignored via .gitignore

API responses are documented in src/api-responses.txt


---



### Test Setup Instructions

1. Open a **new terminal** (like a fresh clone):
```bash
git clone <your-repo-url>
cd task-management
npm install
npm start


Check your endpoints in Postman or browser:

GET http://localhost:3000/ → should show welcome message (or empty JSON)

GET http://localhost:3000/tasks → list of tasks

GET http://localhost:3000/task/1 → task object

GET http://localhost:3000/health → should return { "status": "OK" } (if /health route exists)
