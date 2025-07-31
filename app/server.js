const express = require('express');
const app = express();
const PORT = 3001;

let todos = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the TODO API! - My First APP!');
});

app.get('/todos', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), task: req.body.task };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


