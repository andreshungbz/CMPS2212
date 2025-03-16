// app.js
const express = require('express');
const path = require('path'); // from Node.js

const app = express();
const PORT = 3000;

// logging middleware
app.use((req, res, next) => {
  console.log(
    `[Logging Middleware] ${req.ip} made a ${req.method} request to ${
      req.path
    } using the ${req.protocol.toUpperCase()} protocol`
  );
  next(); // this is needed to pass control to the appropriate route
});

// route 1 - a basic route that sends a message
app.get('/', (req, res) => {
  res.send('Hello world!\n');
});

// route 2 - JSON response route
app.get('/api/users', (req, res) => {
  const example = [
    { name: 'John', city: 'Belmopan' },
    { name: 'Jane', city: 'Belize City' },
    { name: 'Gerald', city: 'New York City' },
  ];

  res.json(example);
});

// route 3 - redirecting route
// use curl -L http://localhost:3000/wip
app.get('/wip', (req, res) => {
  res.status(301);
  res.redirect('/');
});

// route 4 - routing to a file, using Node.js path to construct the absolute path to the image
app.get('/image', (req, res) => {
  const imagePath = path.join(__dirname, 'random.png');
  res.sendFile(imagePath);
});

// route 5 - route that handles URL query parameters
// when using curl, make sure to escape the '?' character
app.get('/greeting', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}\n`);
});

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// have Express.js server listen on designated port
app.listen(PORT, () => {
  console.log(`Express Server running on http://localhost:3000/`);
});
