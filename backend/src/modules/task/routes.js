import { Router } from 'express';

import {
  taskAddController,taskGetController,taskFileUploadController,updateTaskController
} from './taskController';

const router = Router();
router.post('/add', taskAddController);
router.get('/', taskGetController);
router.post('/upload', taskFileUploadController);
router.patch('/:id', updateTaskController);
export default router;
