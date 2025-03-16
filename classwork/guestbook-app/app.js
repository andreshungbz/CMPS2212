// app.js

import express from 'express';
import guestbookRoutes from './routes/guestbookRoutes.js';
import path from 'path';
import os from 'os';

// setup Express instance
const app = express();
const PORT = 3000;

// use urlencoded middleware
app.use(express.urlencoded({ extended: true }));
// set static folder
app.use(express.static(path.join(process.cwd(), 'public')));

// use EJS templating
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// logging middleware
const logger = (req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} HTTP request made to ${
      req.url
    }`
  );

  next();
};

// use global middleware that logs request details
app.use(logger);

// use guestbookRoutes
app.use('/', guestbookRoutes);

// 404 handler
const handler404 = (req, res, next) => {
  res.render('error', {
    code: 404,
    message: 'Page Not Found!',
  });
};

// use 404 handler
app.use(handler404);

// run Express server
app.listen(PORT, () => {
  console.log(
    `Express server started at http://${getLocalIpAddress()}:${PORT}`
  );
});

// Get local IP address
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}
