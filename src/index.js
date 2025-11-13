const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// 🟢 Pre-fill 5 sample tasks
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Test with Postman", completed: false, priority: "low", createdAt: new Date() },
  { id: 4, title: "Document API responses", completed: false, priority: "medium", createdAt: new Date() },
  { id: 5, title: "Write README.md", completed: false, priority: "high", createdAt: new Date() }
];
app.locals.tasks = tasks;

// Mount tasks router
app.use('/', taskRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Task Manager API is running 🚀');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
