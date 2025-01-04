import express from 'express';
import { authMiddleware } from '../../middleware/auth-middleware.js';
import {
  createIdea,
  voteIdeas,
  getTopTrendingIdeas,
  getIdea,
  deleteIdea,
  updateIdea,
  getAllIdeas,
} from '../../controller/idea-controller.js';

const router = express.Router();

router.post('/idea', createIdea);
router.post('/vote/:id', voteIdeas);
router.get('/idea/trending', getTopTrendingIdeas);
router.get('/idea/:id', getIdea);
router.delete('/idea/:id', deleteIdea);
router.patch('/idea/:id', updateIdea);
router.get('/idea', getAllIdeas);

export default router;
