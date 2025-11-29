import express from 'express';
import {
  submitIdea,
  getCurrentMonthIdeas,
  getTrendingIdeas,
  voteForIdea,
  removeVoteFromIdea,
  getIdeaById,
  selectIdeaForDevelopment,
  joinIdeaCollaboration,
  getSubmissionStatus,
} from '../controllers/ideas.controllers.js';

const router = express.Router();

// Get submission status
router.get('/status', getSubmissionStatus);

// Get trending ideas
router.get('/trending', getTrendingIdeas);

// Get current month ideas
router.get('/current', getCurrentMonthIdeas);

// Get specific idea by ID
router.get('/:ideaId', getIdeaById);

// Submit a new idea
router.post('/submit', submitIdea);

// Vote for an idea
router.post('/:ideaId/vote', voteForIdea);

// Remove vote from an idea
router.delete('/:ideaId/vote', removeVoteFromIdea);

// Select idea for development (admin route)
router.put('/:ideaId/select', selectIdeaForDevelopment);

// Join idea collaboration
router.post('/:ideaId/collaborate', joinIdeaCollaboration);

export { router as ideasRouter };
