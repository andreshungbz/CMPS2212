import { getAllSignups, addSignup } from '../models/subscriberModel.js';

export const getHome = (req, res) => {
  res.send('Home page\n');
};

export const getSignup = (req, res) => {
  res.render('signup', {
    title: 'Sign Up',
    message: 'Drop your contact below',
    confirm: "Let's Go",
  });
};

export const postSignup = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  try {
    const newSignup = await addSignup(name, email);
    res.render('thankyou', { title: 'Thank You', ...newSignup });
  } catch (error) {
    if (error.code === '23505') {
      return res.status(400).send('This email is already registered.');
    }
    res.status(500).send('An error occurred during signup.');
  }
};

export const getSignups = async (req, res) => {
  try {
    const signups = await getAllSignups();
    res.json(signups);
  } catch (error) {
    res.status(500).send('An error occurred fetching signups.');
  }
};
