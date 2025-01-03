const CONSTANTS = {
  PORT: process.env.PORT || 5000,
  ORIGIN_URL: process.env.ORIGIN_URL || 'http://localhost:3000',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/devdisplay',
  JSON_LIMIT: '50mb',
  ENV: process.env.NODE_ENV || 'development',
};

export default CONSTANTS;