// Filename: hello.js

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home page.\n');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('What do you want to know?\n');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Find me at address 4325 Boulevard\n');
  } else if (req.url === '/purchase') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Buy now!\n');
  } else if (req.url === '/game') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Play a video game.\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found.\n');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
