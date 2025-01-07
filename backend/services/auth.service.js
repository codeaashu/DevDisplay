import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import Constants from '../constants.js';
import User from '../database/models/User.model.js';
import { notFound, unauthorized, internalServerError, badRequest } from '../helpers/ApiError.js';

/* services for auth */

// omit passwordHash and refreshToken from user object
const omitPasswordHashAndRefreshToken = (user) => {
  const { passwordHash, refreshToken, ...userWithoutPasswordHashAndRefreshToken } = user;
  return userWithoutPasswordHashAndRefreshToken;
};

// check if user exists
/** async checkIfUserExists(username, email, throwError = true): lean(User) | null */
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
/** async checkIfPasswordIsCorrect(user, passwordToVerify, throwError = true): void */
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
/** async generateAccessToken(userId): string */
const generateAccessToken = (userId) => {
  const accessTokenPayload = {
    iss: Constants.ORIGIN_URL,
    sub: userId,
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
/** async generateRefreshToken(userId): string */
const generateRefreshToken = (userId) => {
  const refreshTokenPayload = {
    iss: Constants.ORIGIN_URL,
    sub: userId,
    iat: Date.now(),
    purpose: 'refresh',
  }

  return jwt.sign(
    refreshTokenPayload,
    Constants.REFRESH_TOKEN_SECRET,
    { expiresIn: Constants.REFRESH_TOKEN_MAXAGE, algorithm: Constants.JWT_ALGORITHM }
  );
}

// hashes the password using bcrypt
/** hashUserPassword(password) => passwordHash */
const hashUserPassword = async (password) => {
  const passwordHash = await bcrypt.hash(password, Constants.SALT_ROUNDS);
  return passwordHash;
}

// updates refresh token in user doc
/** updateRefreshTokenOfUser(userId, newRefreshToken) => lean(updatedUser) | throw(error) */
const updateRefreshTokenOfUser = async (userId, newRefreshToken) => {
  try {
    const user = await User.findById(userId).lean();
    if (!user) {
      notFound('User not found');
      return;
    }
    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {...user, refreshToken: newRefreshToken},
    ).lean();
    if(!updatedUser) {
      internalServerError('Failed to Update the users credentials in database');
    }

    return updatedUser;
  } catch (error) {
    throw internalServerError('Failed to check if user exists');
  }
}

export {
  omitPasswordHashAndRefreshToken,
  checkIfUserExists,
  checkIfPasswordIsCorrect,
  validateRefreshToken,
  generateAccessToken,
  generateRefreshToken,
  hashUserPassword,
  updateRefreshTokenOfUser
};