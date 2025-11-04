console.log("-------- MY CODE IS RUNNING -------");

const express = require('express');
const app = express();
const port = 3000;

console.log("RUNNING FROM:", __filename);

// Import tasks router
const tasksRouter = require('./routes/tasks');

// Use tasks router
app.use('/', tasksRouter);

// Other routes
app.get('/', (req, res) => {
  res.send('Home route works!');
});

app.get('/abc', (req, res) => {
  res.send('ABC route works!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

// Show all routes
console.log('ROUTE STACK:', app._router.stack);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

