import express from 'express';
import {display} from '../controllers/userController.js'

const router = express.Router();

router.get('/', display);

export default router;