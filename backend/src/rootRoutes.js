import { Router } from 'express';

import authRoutes from './modules/auth/routes';
import catalogRoutes from './modules/catalog/routes';
import usersRoutes from './modules/users/routes';
import taskRoutes from './modules/task/routes';
import templateRoutes from './modules/template/routes';
import peopleRoutes from './modules/people/routes'
import templateRoutes from './modules/task_templates/routes'

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/catalogs', catalogRoutes);
router.use('/api/users', usersRoutes);
router.use('/api/tasks', taskRoutes);
router.use('/api/people', peopleRoutes);
router.use('/api/templates', templateRoutes);

export default router;
