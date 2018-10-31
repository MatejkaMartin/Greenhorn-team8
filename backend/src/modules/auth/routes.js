import { Router } from 'express';

import {
  authController,
} from './authController';

const router = Router();
router.post('/', authController);

export default router;
