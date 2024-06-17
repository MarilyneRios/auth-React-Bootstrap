
import express from 'express';
import { display, signin, signup, signout } from '../controllers/authControllers.js';

const router = express.Router();

router.get('/', display);
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);

export default router;