import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import Constants from '../constants.js';
import { User } from '../database/models/User.model.js';
import { notFound, unauthorized, internalServerError, badRequest } from '../helpers/ApiError.js';

/* services for auth */

// omit passwordHash and refreshToken from user object
const omitPasswordHashAndRefreshToken = (user) => {
  const { passwordHash, refreshToken, ...userWithoutPasswordHashAndRefreshToken } = user;
  return userWithoutPasswordHashAndRefreshToken;
};

// check if user exists
/** async checkIfUserExists(username, email, throwError = false): lean(User) | null */
const checkIfUserExists = async (username, email, throwError = true) => {
  try {
    const user = await User.findOne({ $or: [{ username }, { email }] }).lean();
    if (!user) {
      if (throwError) {
        throw notFound('User not found');
      }
      return null;
    }
    return user;
  } catch (error) {
    throw internalServerError('Failed to check if user exists');
  }
};

// check if password is correct
/** async checkIfPasswordIsCorrect(user, passwordToVerify): void */
const checkIfPasswordIsCorrect = async (storedPasswordHash, passwordToVerify, throwError = true) => {
  try {
    const isPasswordCorrect = await bcrypt.compare(passwordToVerify, storedPasswordHash);
    if (!isPasswordCorrect) {
      if (throwError) {
        throw unauthorized('Incorrect password');
      }
      return false;
    }
    return true;
  } catch (error) {
    throw internalServerError('Failed to check if password is correct');
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

// validate refresh token
/** async validateRefreshToken(refreshToken): User | Error */
const validateRefreshToken = async (refreshToken) => {
  try {
    // checks summary:
    // 1. refresh token is signed using the correct secret
    // 2. refresh token format is correct
    // 3. refresh token issuer is the correct origin
    // 4. refresh token has not expired
    // 5. refresh token user id is references valid user
    // 6. refresh token matches the user's refresh token

    // check if refresh token is signed using the correct secret
    const decoded = jwt.verify(refreshToken, Constants.REFRESH_TOKEN_SECRET);
    if(!decoded) {
      console.log("REFRESH_TOKEN_ERROR: Undefined");
      throw unauthorized('Refresh token is invalid or has expired');
    }

    // validate refresh token format
    const { iss: issuer, sub: userId, iat: issuedAt, purpose } = decoded;
    if(!userId || !issuedAt || !purpose) {
      console.log("REFRESH_TOKEN_ERROR: Wrong format");
      throw badRequest('Refresh token is invalid or has expired');
    }

    // check if refresh token is issued by the correct origin
    if(issuer !== Constants.ORIGIN_URL) {
      console.log("REFRESH_TOKEN_ERROR: Origin mismatch");
      throw unauthorized('Refresh token is invalid or has expired');
    }

    // check if refresh token has expired
    if(issuedAt + Constants.REFRESH_TOKEN_MAXAGE < Date.now()) {
      console.log("REFRESH_TOKEN_ERROR: Expired");
      throw unauthorized('Refresh token is invalid or has expired');
    }

    // check if user id is valid
    const user = await User.findById(userId).lean();
    if(!user) {
      console.log("REFRESH_TOKEN_ERROR: User not found, userID is invalid");
      throw unauthorized('Refresh token is invalid or has expired');
    }

    // check if refresh token matches the user's refresh token
    if(user.refreshToken !== refreshToken) {
      console.log("REFRESH_TOKEN_ERROR: Refresh token does not match");
      throw unauthorized('Refresh token is invalid or has expired');
    }

    return user;
  } catch (error) {
    throw internalServerError('Failed to validate refresh token');
  }
}

// generate access token
/** async generateAccessToken(user): string */
const generateAccessToken = (user) => {
  const accessTokenPayload = {
    iss: Constants.ORIGIN_URL,
    sub: user._id,
    iat: Date.now(),
    purpose: 'access',
  }

  return jwt.sign(
    accessTokenPayload,
    Constants.ACCESS_TOKEN_SECRET,
    { expiresIn: Constants.ACCESS_TOKEN_MAXAGE, algorithm: Constants.JWT_ALGORITHM }
  );
}

// generate refresh token
/** async generateRefreshToken(user): string */
const generateRefreshToken = (user) => {
  const refreshTokenPayload = {
    iss: Constants.ORIGIN_URL,
    sub: user._id,
    iat: Date.now(),
    purpose: 'refresh',
  }

  return jwt.sign(
    refreshTokenPayload,
    Constants.REFRESH_TOKEN_SECRET,
    { expiresIn: Constants.REFRESH_TOKEN_MAXAGE, algorithm: Constants.JWT_ALGORITHM }
  );
}

export {
  checkIfUserExists,
  checkIfPasswordIsCorrect,
  validateRequest,
  validateRefreshToken,
  generateAccessToken,
  generateRefreshToken,
};