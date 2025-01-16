// API error helper functions
import { errorResponse } from './ApiResponse.js';

const badRequest = (message, error) => errorResponse(400, message, error);
const validationError = (message, error) => errorResponse(400, message, error);
const semanticError = (message, error) => errorResponse(422, message, error);
const unauthorized = (message, error) => errorResponse(401, message, error);
const forbidden = (message, error) => errorResponse(403, message, error);
const notFound = (message, error) => errorResponse(404, message, error);
const conflict = (message, error) => errorResponse(409, message, error);
const internalServerError = (message, error) => errorResponse(500, message, error);
const unsupportedMediaType = (message, error) => errorResponse(415, message, error);

export {
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  conflict,
  internalServerError,
  validationError,
  semanticError,
  unsupportedMediaType,
};