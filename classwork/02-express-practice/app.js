// app.js
import express from 'express';
import signupRoutes from './routes/signupRoutes.js';

const app = express();
const PORT = 3000;

// parse form data middleware
app.use(express.urlencoded({ extended: true }));

// logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // this is needed to pass control to the appropriate route
});

// use the signup routes
app.use('/', signupRoutes);

// 404 middleware
app.use((req, res, next) => {
  res.status(404).send('404 Not Found\n');
});

// have Express.js server listen on designated port
app.listen(PORT, () => {
  console.log(`Express Server running on http://localhost:3000/`);
});
