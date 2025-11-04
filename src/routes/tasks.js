const express = require('express');
const router = express.Router();

// Sample tasks array
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build REST API", completed: true },
  { id: 3, title: "Test API routes", completed: false },
];

// GET /tasks - return all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /task/:id - return task by ID
router.get('/task/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
