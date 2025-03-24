import { retrieveMessages, addMessage } from '../models/messageModel.js';

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

export const postGuestBook = async (req, res) => {
  // get name and message from request using object destructuring syntax
  const { name, message } = req.body;

  // error check empty values
  if (!name || !message) {
    return res.status(400).res.send('Name and/or email is missing!\n');
  }

  try {
    const newMessage = await addMessage(name, message);
    res.render('thankyou', {
      title: 'Thank You',
      ...newMessage,
    });
  } catch (error) {
    res.status(500).send('An error occurred during add message.');
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await retrieveMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).send('An error occurred fetching messages.');
  }
};
