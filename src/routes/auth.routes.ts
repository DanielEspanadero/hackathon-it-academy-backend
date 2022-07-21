import { Router } from 'express';
import { register, login } from '../controllers/auth.controllers';

const router = Router();

// Routes related to user registration and login.
router.post('/register', register);
router.post('/login', login);

export default router;