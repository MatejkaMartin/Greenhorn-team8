import { Router } from 'express';

import {
  catalogController,
} from './catalogController';

const router = Router();
router.get('/', catalogController);

export default router;
