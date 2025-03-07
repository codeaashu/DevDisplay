import cron from "node-cron";
import { getDataFromAPI } from "./apiCall.jobs.js";
import logger from "../loki-config.js";

// Schedule cron job to run at every minute
cron.schedule('0 1 * * *', () => {  
    logger.info("Cron job started!");
    console.log("Cron job started!");
    // Replace with the function calls responsible for calling the SERP APIs and updating MongoDB
    getDataFromAPI()
        .then(() => {
            logger.info(`Successfully called the APIs and updated the database`);
            console.log(`Successfully called the APIs and updated the database`);
        })
        .catch((error) => {
            logger.error(`Something went wrong while calling the APIs`, error);
            console.log(`Something went wrong while calling the APIs`, error);
        });
});

// Handling server shutdown gracefully...
process.on("SIGINT", () => {
    logger.info("Gracefully shutting down...");
    console.log("Gracefully shutting down...");
    process.exit(0);  // Exit with status code 0 to indicate clean exit
});
