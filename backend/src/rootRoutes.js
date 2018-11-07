import { Router } from 'express';

import authRoutes from './modules/auth/routes';
import catalogRoutes from './modules/catalog/routes'

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/catalogs', catalogRoutes);

export default router;
