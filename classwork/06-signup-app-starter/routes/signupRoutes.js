import express from 'express';
const router = express.Router();
import path from 'path';

// an array to temporarily store our form data. Later we will switch this out for a DBMS
let signups = [];

router.get('/', (req, res) => {
  res.send('Home page\n');
});

// Display the signup form.  Notice it is a GET method
router.get('/signup', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'signup.html'));
});

// Handle the signup form submission. Notice it is a POST method
router.post('/signup', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  // Add the signup to the in-memory storage
  signups.push({ name, email });
  res.send(`Thank you for signing up, ${name}!`);
});

// Route: Display all signups (for testing purposes)
router.get('/signups', (req, res) => {
  res.json(signups);
});

export default router;
