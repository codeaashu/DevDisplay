import express from 'express';

import { getLatestWinner, selectWinner } from '../controllers/winner.controller.js';

const router = express.Router();

router.get('/latest', getLatestWinner);
router.post('/select', selectWinner);

export { router as winnerRouter };
