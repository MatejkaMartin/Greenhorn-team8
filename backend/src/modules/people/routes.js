import { Router } from 'express';

import {
  peopleController,peopleAddController,peopleDeleteController
} from './peopleController';

const router = Router();
router.get('/', peopleController);
router.post('/add', peopleAddController);
router.delete('/delete/:id', peopleDeleteController);

export default router;
