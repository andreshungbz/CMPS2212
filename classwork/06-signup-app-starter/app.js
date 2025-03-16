import express from 'express';
import signupRoutes from './routes/signupRoutes.js';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

const loggingMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

app.use(loggingMiddleware);

// How to use the routes middleware
app.use('/', signupRoutes);

app.use((req, res) => {
  res.status(404).send('404 Not Found.\n');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
