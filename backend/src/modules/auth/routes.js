import { Router } from 'express';

import {
  authController,setPasswordController
} from './authController';

const router = Router();
router.post('/', authController);
router.post('/setPassword', setPasswordController);

export default router;
