import express from 'express';
import path from 'path';
const router = express.Router();

import {
  getHome,
  getSignup,
  postSignup,
  getSignups,
} from '../controllers/subscriberController.js';

router.get('/', getHome);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/signups', getSignups);

export default router;
