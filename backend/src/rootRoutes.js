import { Router } from 'express';

import authRoutes from './modules/auth/routes';
import catalogRoutes from './modules/catalog/routes';
import peopleRoutes from './modules/people/routes';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/catalogs', catalogRoutes);
router.use('/api/people', peopleRoutes);



export default router;
