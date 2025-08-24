import express from 'express';
import { devRouter } from './routes/dev.routes.js';
import { githubRouter } from './routes/github.routes.js';

import { getSubscribers } from './controllers/subscribers.controllers.js';
import Subscribers from './models/subscribers.models.js';
import { ideaRouter } from './routes/ideaSubmission.routes.js';
import { winnerRouter } from './routes/winner.routes.js';
import cors from 'cors';
const app = express();

app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the devRouter for the "/api/v1/trending/dev" route
app.use('/devdisplay/v1/trending/dev', devRouter);

// Use the githubRouter for the "/api/v1/trending/github" route
app.use('/devdisplay/v1/trending/github', githubRouter);

app.use('/devdisplay/v1/subscribers', getSubscribers);

// IdeaSubmission routes
app.use('/devdisplay/v1/idea-submissions', ideaRouter);
app.use('/devdisplay/v1/winners', winnerRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the DevDisplay API!',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'DevDisplay API is healthy!',
  });
});

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message,
  });
});

export default app;
