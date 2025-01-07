import { validationError } from "../helpers/ApiError.js";

/* Services for commonly required tasks */

// validate using zod schema
/** validates(object, schema, message) => data | throw(error) */
const validate = (object, schema, message = "Input is in wrong format") => {
  const result = schema.safeParse(object);
  if (result.success) {
    return result.data;
  } else {
    throw validationError(message, result.error);
  }
}

// validate request (body, cookies, headers, query, params)
/** async validateRequest(req, needsBody = true, protectedRoute = false, queryOrParams = false, refreshRequest = false): void | true */
const validateRequest = async (req, needsBody = true, protectedRoute = false, queryOrParams = false, refreshRequest = false) => {
  if(needsBody && (!req.body || Object.keys(req.body).length === 0)) {
    throw badRequest('Request body is missing or empty');
  }
  if(protectedRoute && (!req.headers || !req.headers.authorization)) {
    throw unauthorized('Authorization header is missing or empty');
  }
  if(refreshRequest && (!req.cookies || !req.cookies.refreshToken)) {
    throw unauthorized('Refresh token is missing or empty');
  }
  if(queryOrParams && (
    (!req.query || Object.keys(req.query).length === 0) || 
    (!req.params || Object.keys(req.params).length === 0)
  )) {
    throw badRequest('Request query and params both are missing or empty');
  }
  return true;
}

export { validate, validateRequest };