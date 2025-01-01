import express from 'express';
import { authMiddleware } from '../../middleware/auth-middleware.js';
import { createIdea, voteIdeas } from '../../controller/idea-controller.js';

const router = express.Router();

router.post('/idea', authMiddleware, createIdea);
router.post('/vote/:id', authMiddleware, voteIdeas);

export default router;
