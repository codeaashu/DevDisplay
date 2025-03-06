import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/categories.models.js";
import logger from "../loki-config.js";
import { totalRequestCounter } from "../prom-config.js"

const getInterestOverTimeByCategory = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching interest over time by category");
    const { category } = req.params;
    if (!category) {
        throw new ApiError(400, "Category is required");
    }

    try {
        const interestOverTimeByCategory = await Category.aggregate([
            {
                $match: {
                    category: category
                }
            },
            {
                $lookup: {
                    from: "interests",
                    localField: "_id",       // The _id of the current collection
                    foreignField: "category", // The category field in the "interests" collection
                    as: "RoboticsInterestOverTime" // The name of the field in the output document containing the lookup results
                }
            },
            {
                $unwind: "$RoboticsInterestOverTime" // Unwind the array from the lookup to individual documents
            },
            {
                $sort: {
                    "RoboticsInterestOverTime.timestamp": -1 // Sort by timestamp in descending order (latest first)
                }
            },
            {
                $limit: 1 // Limit to 1 document (latest entry)
            }
        ])

        if (!interestOverTimeByCategory) {
            throw new ApiError(404, "No data found");
        }

        res.status(200).json(new ApiResponse(200, "Successfully fetched interest over time by category", interestOverTimeByCategory));
    } catch (error) {
        logger.error("Something went wrong while fetching interest over time by category", error);
        throw new ApiError(500, "Something went wrong while fetching interest over time by category", error);
    }
})

const getInterestOverTimeForAllCategories = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching interest over time for all categories");
    try {
        const interestOverTimeForAllCategories = await Category.aggregate([
            {
                $lookup: {
                    from: "interests",
                    localField: "_id", // The _id of the current collection
                    foreignField: "category", // The category field in the "interests" collection
                    as: "InterestOverTime", // The name of the field in the output document containing the lookup results
                },
            },
            {
                $unwind: "$InterestOverTime", // Unwind the array from the lookup to individual documents
            },
            {
                $sort: {
                    "InterestOverTime.timestamp": -1, // Sort by timestamp in descending order (latest first)
                },
            },
            {
                $group: {
                    _id: "$_id", // Group by the category _id
                    category: { $first: "$category" }, // Retain the category name (or any other fields you want)
                    InterestOverTime: {
                        $first: "$InterestOverTime",
                    }, // Get the latest interest data
                },
            },
        ])
    
        if(!interestOverTimeForAllCategories) {
            throw new ApiError(404, "No data found");
        }
    
        res.status(200).json(new ApiResponse(200, "Successfully fetched interest over time for all categories", interestOverTimeForAllCategories));
    } catch (error) {
        logger.error("Something went wrong while fetching interest over time for all categories", error);
        throw new ApiError(500, "Something went wrong while fetching interest over time for all categories", error);
    }
})

export { getInterestOverTimeByCategory, getInterestOverTimeForAllCategories }