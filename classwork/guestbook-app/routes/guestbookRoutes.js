// guestbookRoutes.js

import express from 'express';
import {
  getHome,
  getGuestBook,
  postGuestBook,
  getMessages,
} from '../controllers/messagesController.js';

const guestbookRoutes = express.Router();

guestbookRoutes.get('/', getHome);
guestbookRoutes.get('/guestbook', getGuestBook);
guestbookRoutes.post('/guestbook', postGuestBook);
guestbookRoutes.get('/messages', getMessages);

export default guestbookRoutes;
