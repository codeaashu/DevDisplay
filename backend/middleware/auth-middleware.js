import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/server-config.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token after 'Bearer'

    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized',
        success: false,
      });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);

    // Handle JWT errors more specifically
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        message: 'Invalid token',
        success: false,
      });
    }

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        message: 'Token expired',
        success: false,
      });
    }

    res.status(500).json({
      message: 'Internal Server error. Something went wrong in auth-middleware',
      success: false,
      err: error.message,
      data: {},
    });
  }
};
