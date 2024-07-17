import express from 'express';
import {display,  updateUser,
} from '../controllers/userController.js'
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', display);
router.post('/update/:id', verifyToken, updateUser);

export default router;