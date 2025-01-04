const Constants = {
  PORT: process.env.PORT || 5000,
  ORIGIN_URL: process.env.ORIGIN_URL || 'http://localhost:3000',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/devdisplay',
  JSON_LIMIT: '50mb',
  ENV: process.env.NODE_ENV || 'development',
  API_BASE: '/api/v1',

  // constraints
  USERNAME_MINLEN: 3,
  USERNAME_MAXLEN: 20,
  BIO_MAXLEN: 200,

  // JWT
  JWT_ALGORITHM: 'ES256',
  REFRESH_TOKEN_MAXAGE: 60 * 60 * 24 * 7, // 1 week
  ACCESS_TOKEN_MAXAGE: 60 * 20, // 20 minutes
};

export default Constants;