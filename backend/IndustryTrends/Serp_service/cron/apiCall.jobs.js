//create function to call the APIs and get the data for each category and send it to cron job for scheduling!
import axios from "axios";
import { Category } from "../models/categories.models.js";
import { Interest } from "../models/interest_over_time.models.js";
import { RelatedTopic } from "../models/related_topics.models.js";
import { RelatedQuery } from "../models/related_queries.models.js";
import logger from "../loki-config.js";

// Retry logic for fetching data
const fetchDataWithRetry = async (url, params, retries = 3, delay = 1000) => {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const response = await axios.get(url, { params });
            return response.data; // return data if successful
        } catch (error) {
            attempt++;
            console.error(`Attempt ${attempt} failed for ${params.cat} with error:`, error.message);
            if (attempt >= retries) {
                throw new Error(`Failed to fetch data after ${retries} attempts: ${error.message}`);
            }
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay)); // wait before retrying
        }
    }
};

export async function getDataFromAPI() {
    logger.info("Fetching data from APIs");

    const url = "https://serpapi.com/search.json";

    // Query database to get the list of categories
    try {
        logger.info("Fetching categories from the database");
        const categories = await Category.find();
        for (const category of categories) {
            // Call the APIs and get the data for each category with retry logic
            logger.info(`Fetching data for category ${category.category}`);
            try {
                const interestOverTime = await fetchDataWithRetry(url, {
                    engine: "google_trends",
                    api_key: process.env.SERP_API_KEY,
                    cat: category.index,
                    data_type: "TIMESERIES"
                });

                const relatedTopics = await fetchDataWithRetry(url, {
                    engine: "google_trends",
                    api_key: process.env.SERP_API_KEY,
                    cat: category.index,
                    data_type: "RELATED_TOPICS"
                });

                const relatedQueries = await fetchDataWithRetry(url, {
                    engine: "google_trends",
                    api_key: process.env.SERP_API_KEY,
                    cat: category.index,
                    data_type: "RELATED_QUERIES"
                });

                // Update the database with the data
                try {
                    logger.info(`Updating the database for category ${category.category}`);
                    // Update the interestOverTime collection
                    const interestOverTimeData = interestOverTime;
                    const interestOverTimeEntry = {
                        category: category._id,
                        engine: interestOverTimeData.search_parameters.engine,
                        timeline_data: interestOverTimeData.interest_over_time.timeline_data,
                        data_type: interestOverTimeData.search_parameters.data_type
                    };
                    await Interest.insertOne(interestOverTimeEntry);
                    logger.info(`Successfully updated the interestOverTime collection for category ${category.category}`);
                    console.log(`Successfully updated the interestOverTime collection for category ${category.category}`);
                } catch (error) {
                    logger.error(`Something went wrong while updating the interestOverTime collection for category ${category.category}`, error);
                    console.log(`Something went wrong while updating the interestOverTime collection for category ${category.category}`, error);
                }

                try {
                    logger.info(`Updating the relatedTopics collection for category ${category.category}`);
                    // Update the relatedTopics collection
                    const relatedTopicsData = relatedTopics;
                    const relatedTopicsEntry = {
                        engine: relatedTopicsData.search_parameters.engine,
                        category: category._id,
                        data_type: relatedTopicsData.search_parameters.data_type,
                        rising: relatedTopicsData.related_topics.rising,
                        top: relatedTopicsData.related_topics.top
                    };
                    await RelatedTopic.insertOne(relatedTopicsEntry);
                    logger.info(`Successfully updated the relatedTopics collection for category ${category.category}`);
                    console.log(`Successfully updated the relatedTopics collection for category ${category.category}`);
                } catch (error) {
                    logger.error(`Something went wrong while updating the relatedTopics collection for category ${category.category}`, error);
                    console.log(`Something went wrong while updating the relatedTopics collection for category ${category.category}`, error);
                }

                try {
                    logger.info(`Updating the relatedQueries collection for category ${category.category}`);
                    // Update the relatedQueries collection
                    const relatedQueriesData = relatedQueries;
                    const relatedQueriesEntry = {
                        engine: relatedQueriesData.search_parameters.engine,
                        category: category._id,
                        data_type: relatedQueriesData.search_parameters.data_type,
                        rising: relatedQueriesData.related_queries.rising,
                        top: relatedQueriesData.related_queries.top
                    };
                    await RelatedQuery.insertOne(relatedQueriesEntry);
                    logger.info(`Successfully updated the relatedQueries collection for category ${category.category}`);
                    console.log(`Successfully updated the relatedQueries collection for category ${category.category}`);
                } catch (error) {
                    logger.error(`Something went wrong while updating the relatedQueries collection for category ${category.category}`, error);
                    console.log(`Something went wrong while updating the relatedQueries collection for category ${category.category}`, error);
                }

            } catch (error) {
                logger.error(`Something went wrong while calling APIs for category ${category.category}`, error);
                console.log(`Something went wrong while calling APIs for category ${category.category}`, error);
            }
        }
    } catch (error) {
        logger.error(`Something went wrong while getting the categories from the database`, error);
        console.log(`Something went wrong while getting the categories from the database`, error);
    }
}



