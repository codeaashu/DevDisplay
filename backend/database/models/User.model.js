import { Schema, Model } from 'mongoose';
import Constants from '../../constants.js';

const UserSchema = new Schema({
  // credentials
  username: {
    type: String,
    required: [true, "Username is a required field"],
    unique: true,
    index: true,
    trim: true,
    minlength: Constants.USERNAME_MINLEN,
    maxlength: Constants.USERNAME_MAXLEN,
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
    unique: true,
    trim: true,
    index: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Password is a required field"],
  },

  // profile
  fullName: {
    type: String,
    required: [true, "Full name is a required field"],
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true,
    maxlength: Constants.BIO_MAXLEN
  },
  avatar: { type: String },
  portfolio: { type: String },
  skills: [{ type: String, trim: true }],
  social: {
    GitHub: { type: String },
    LinkedIn: { type: String },
    Twitter: { type: String },
    Instagram: { type: String },
  },

  // meta
  emailVerified: { type: Boolean, default: false },
  refreshToken: { type: String },
}, {
  timestamps: true,
});

export default Model('User', UserSchema);