import { Category } from "../models/categories.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import logger from "../loki-config.js";
import { totalRequestCounter } from "../prom-config.js"

const getRelatedTopicsByCategory = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching related topics by category");
    const { category } = req.params;
    if (!category) {
        throw new ApiError(400, "Category is required");
    }

    try {
        const relatedTopicsByCategory = await Category.aggregate([
            {
                $match: {
                    category: category,
                },
            },
            {
                $lookup: {
                    from: "relatedtopics",
                    localField: "_id",
                    foreignField: "category",
                    as: "RelatedTopics",
                },
            },
            {
                $unwind: "$RelatedTopics",
            },
            {
                $sort: {
                    "RelatedTopics.createdAt": -1,
                },
            },
            {
                $limit: 1,
            },
        ])

        if (!relatedTopicsByCategory) {
            throw new ApiError(404, "No related topics found");
        }

        res.status(200).json(new ApiResponse(200, "Successfully fetched related topics by category", relatedTopicsByCategory));
    } catch (error) {
        logger.error("Something went wrong while fetching related topics by category", error);
        throw new ApiError(500, "Something went wrong while fetching related topics by category", error);
    }
})

const getRelatedTopicsForAllCategories = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching related topics for all categories");
    try {
        const relatedTopicsForAllCategories = await Category.aggregate([
            {
                $lookup: {
                    from: "relatedtopics",
                    localField: "_id",
                    foreignField: "category",
                    as: "RelatedTopics",
                },
            },
            {
                $unwind: "$RelatedTopics",
            },
            {
                $sort: {
                    "RelatedTopics.createdAt": -1,
                },
            },
            {
                $group: {
                    _id: "$_id",
                    category: {
                        $first: "$category",
                    },
                    relatedTopics: {
                        $first: "$RelatedTopics",
                    },
                },
            },
        ])

        if (!relatedTopicsForAllCategories) {
            throw new ApiError(404, "No related topics found");
        }

        res.status(200).json(new ApiResponse(200, "Successfully fetched related topics for all categories", relatedTopicsForAllCategories));
    } catch (error) {
        logger.error("Something went wrong while fetching related topics for all categories", error);
        throw new ApiError(500, "Something went wrong while fetching related topics for all categories", error);
    }
})

export { getRelatedTopicsByCategory, getRelatedTopicsForAllCategories }