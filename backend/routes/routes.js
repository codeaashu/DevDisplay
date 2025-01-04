import { Router } from 'express';
import { errorResponse, successResponse } from '../helpers/ApiResponse.js';

const publicRouter = Router();

publicRouter.get('/health', (_req, res) => {
  const health = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };

  try {
    successResponse(res, { status: 'ok' }, 'Health check successful');
  } catch (error) {
    health.message = error;
    errorResponse(res, 503, 'Health check failed', 'INTERNAL_SERVER_ERROR', error);
  }
});

export { publicRouter };