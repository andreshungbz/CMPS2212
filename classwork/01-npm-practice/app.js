// app.js
const express = require('express');

const app = express();

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

const adminMiddleware = (req, res, next) => {
  if (req.headers['x-admin'] === 'true') {
    console.log('[Access granted to /pay]');
    next();
  } else {
    console.log('[Access denied to /pay]');
    res.status(403).send('403 Forbidden: Admin access required.\n');
  }
};

app.get('/pay', adminMiddleware, (req, res) => {
  res.send('Payment Processed\n');
});

app.get('/', (req, res) => {
  res.send('Home page.\n');
});

app.get('/about', (req, res) => {
  res.send('What do you want to know?\n');
});

app.get('/contact', (req, res) => {
  res.send('1234 Boulevard\n');
});

app.get('/purchase', (req, res) => {
  res.send('Buy now!\n');
});

app.get('/game', (req, res) => {
  res.send('A game\n');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found.\n');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
