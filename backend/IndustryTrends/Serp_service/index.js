import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';
import "./cron/index.js";
import logger from './loki-config.js';

dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        logger.error('Something went wrong with the database connection', error);
        console.log('Something went wrong with the database connection', error);
        process.exit(1);
    })