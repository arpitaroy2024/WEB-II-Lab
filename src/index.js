const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();

// Middleware to parse JSON body
app.use(express.json());

// ✅ Pre-fill one sample task
const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];
app.locals.tasks = tasks;

// Mount router
app.use('/tasks', taskRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Task Manager API is running 🚀');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
