const express = require('express');
const router = express.Router();

// Sample tasks array
let tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Build REST API", completed: false },
];

// GET all tasks
router.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET a single task by ID with error handling
router.get('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Check for invalid ID format
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
});

// POST a new task
router.post('/tasks', (req, res) => {
    const { title, completed } = req.body;
    const newTask = { id: tasks.length + 1, title, completed: completed || false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// DELETE a task by ID
router.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.json({ message: "Task deleted successfully" });
});

module.exports = router;
