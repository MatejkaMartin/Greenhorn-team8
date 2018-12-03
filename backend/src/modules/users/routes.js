import { Router } from 'express';

import {
  getUsersController,
  addUserController,
  deleteUserController
} from './usersController';

const router = Router();
router.get('/', getUsersController);
router.post('/add', addUserController);
router.delete('/delete/:id', deleteUserController);

export default router;
