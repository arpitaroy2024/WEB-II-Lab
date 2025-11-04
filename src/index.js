console.log("-------- MY CODE IS RUNNING -------");

const express = require('express');
const app = express();

const tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build REST API", completed: true },
  { id: 3, title: "Test API routes", completed: false },
];

const port = 3000;

console.log("RUNNING FROM:", __filename);

// Routes
app.get('/', (req, res) => {
  res.send('Home route works!');
});

app.get('/abc', (req, res) => {
  res.send('ABC route works!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/task/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

// Show all routes
console.log('ROUTE STACK:', app._router.stack);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

