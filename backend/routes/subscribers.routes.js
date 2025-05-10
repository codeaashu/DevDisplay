import { Router } from 'express';
import { getSubscribers } from '../controllers/subscribers.controllers.js';

const router = Router();

router.get('/', getSubscribers);

export { router as subscribersRouter };
