// Filename: baby-server.js

// Use the http package
// import http from 'node:http';
const http = require('http');

// Create the web server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  res.end('Hello, world! This is our first Node.js web application.\n');
});

// Start the web server and listen for requests
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
