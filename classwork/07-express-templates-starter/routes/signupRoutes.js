import express from 'express';
import path from 'path';
const router = express.Router();

let signups = [];

router.get('/', (req, res) => {
  res.send('Home page\n');
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Sign Up',
    message: 'Drop your contact below',
    confirm: "Let's Go",
  });
});

router.post('/signup', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  // Add the signup to the in-memory storage
  signups.push({ name, email });
  res.render('thankyou', {
    title: 'Thank You',
    name,
    email,
  });
});

router.get('/signups', (req, res) => {
  res.json(signups);
});

export default router;
