const express = require('express');
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/tasks', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// POST /tasks - Create a new task
router.post('/tasks', (req, res) => {
  try {
    const { title, priority } = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      priority: priority || "low",
      createdAt: new Date()
    };

    const tasks = req.app.locals.tasks;
    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// GET /task/:id - Retrieve task by ID
router.get('/task/:id', (req, res) => {
  const tasks = req.app.locals.tasks;
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

module.exports = router;
