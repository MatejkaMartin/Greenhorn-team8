import { Router } from 'express';

import {
  templatesController,
} from './templatesController';

const router = Router();
router.get('/', templatesController);

export default router;
