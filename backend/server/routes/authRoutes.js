import express from 'express';
import { login, logout, profile, register } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, profile);
router.post('/logout', logout);

export default router;
