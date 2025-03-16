import express from 'express';
const router = express.Router();

// import path from 'path'; // from Node.js

// // route 1 - a basic route that sends a message
// app.get('/', (req, res) => {
//   res.send('Hello world!\n');
// });

// // route 2 - JSON response route
// app.get('/api/users', (req, res) => {
//   const example = [
//     { name: 'John', city: 'Belmopan' },
//     { name: 'Jane', city: 'Belize City' },
//     { name: 'Gerald', city: 'New York City' },
//   ];

//   res.json(example);
// });

// // route 3 - redirecting route
// // use curl -L http://localhost:3000/wip
// app.get('/wip', (req, res) => {
//   res.status(301);
//   res.redirect('/');
// });

// // route 4 - routing to a file, using Node.js path to construct the absolute path to the image
// app.get('/image', (req, res) => {
//   const imagePath = path.join(__dirname, 'random.png');
//   res.sendFile(imagePath);
// });

// // route 5 - route that handles URL query parameters
// // when using curl, make sure to escape the '?' character
// app.get('/greeting', (req, res) => {
//   const name = req.query.name || 'Guest';
//   res.send(`Hello, ${name}\n`);
// });

let signups = [];

router.get('/signup', (req, res) => {
  res.send(`
    <h1>Sign Up</h1>
    <form method="POST" action="/signup">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br/><br/>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br/><br/>
      <button type="submit">Sign Up</button>
    </form>
  `);
});

router.post('/signup', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  signups.push({ name, email });
  res.send(`Thank you for signing up, ${name}`);
});

router.get('/signups', (req, res) => {
  res.json(signups);
});

export default router;
