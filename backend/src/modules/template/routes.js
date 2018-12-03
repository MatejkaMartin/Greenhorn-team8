import { Router } from 'express';

import {
  addTemplateController,
  templateFileUploadController,
  templateGetController,
  getAssignedTemplatesController,
  unassignTemplateController,
  assignTemplateController
} from './templateController';

const router = Router();

router.post('/add', addTemplateController);
router.post('/upload', templateFileUploadController);
router.get('/', templateGetController);
router.get('/assignedTemplates',getAssignedTemplatesController)
router.delete('/assignedTemplates',unassignTemplateController)
router.post('/assignTemplates', assignTemplateController )

export default router;
