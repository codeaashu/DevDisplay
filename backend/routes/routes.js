import { Router } from 'express';
import { errorResponse, successResponse } from '../helpers/ApiResponse.js';
import Constants from '../constants.js';

const publicRouter = Router();

publicRouter.get(`${Constants.API_BASE}/health`, (_req, res) => {
  const health = {
    uptime: Math.floor(process.uptime()),
    message: 'OK',
    timestamp: new Date().toISOString(),
  };

  try {
    successResponse(res, health, 'Health check successful');
  } catch (error) {
    health.message = error;
    errorResponse(res, 503, 'Health check failed', 'INTERNAL_SERVER_ERROR', error);
  }
});

export { publicRouter };