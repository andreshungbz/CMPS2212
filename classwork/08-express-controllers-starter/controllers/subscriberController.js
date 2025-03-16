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

export const postSignup = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  const newSignup = addSignup(name, email);
  res.render('thankyou', { title: 'Thank You', ...newSignup });
};

export const getSignups = (req, res) => {
  res.json(getAllSignups());
};
