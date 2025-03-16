import { retrieveMessages, addMessage } from '../../models/messageModel.js';

export const getHome = (req, res) => {
  res.render('guestbook', {
    title: 'Guestbook',
    links: [
      'http://localhost:3000/guestbook',
      'http://localhost:3000/messages',
    ],
  });
};

export const getGuestBook = (req, res) => {
  res.render('guestbook-submission', { title: 'Submit Message' });
};

export const postGuestBook = (req, res) => {
  // get name and message from request using object destructuring syntax
  const { name, message } = req.body;

  // error check empty values
  if (!name || !message) {
    return res.status(400).res.send('Name and/or email is missing!\n');
  }

  const newMessage = addMessage(name, message);
  res.render('thankyou', {
    title: 'Thank You',
    ...newMessage,
  });
};

export const getMessages = (req, res) => {
  res.json(retrieveMessages());
};
