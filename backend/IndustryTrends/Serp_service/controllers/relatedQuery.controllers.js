import { Category } from "../models/categories.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import logger from "../loki-config.js";
import { totalRequestCounter } from "../prom-config.js"

const getRelatedQueriesByCategory = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching related queries by category");
    const { category } = req.params;
    if (!category) {
        throw new ApiError(400, "Category is required");
    }

    try {
        const relatedQueriesByCategory = await Category.aggregate([
            {
                $match: {
                    category: category,
                },
            },
            {
                $lookup: {
                    from: "relatedqueries",
                    localField: "_id",
                    foreignField: "category",
                    as: "RelatedQueries",
                },
            },
            {
                $unwind: "$RelatedQueries",
            },
            {
                $sort: {
                    "RelatedQueries.createdAt": -1,
                },
            },
            {
                $limit: 1,
            },
        ])

        if (!relatedQueriesByCategory) {
            throw new ApiError(404, "No related queries found");
        }

        res.status(200).json(new ApiResponse(200, "Successfully fetched related queries by category", relatedQueriesByCategory));
    } catch (error) {
        logger.error("Something went wrong while fetching related queries by category", error);
        throw new ApiError(500, "Something went wrong while fetching related queries by category", error);
    }
})

const getRelatedQueriesForAllCategories = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching related queries for all categories");
    try {
        const relatedQueriesForAllCategories = await Category.aggregate([
            {
                $lookup: {
                    from: "relatedqueries",
                    localField: "_id",
                    foreignField: "category",
                    as: "RelatedQueries",
                },
            },
            {
                $unwind: "$RelatedQueries",
            },
            {
                $sort: {
                    "RelatedQueries.createdAt": -1,
                },
            },
            {
                $group: {
                    _id: "$_id",
                    category: {
                        $first: "$category",
                    },
                    relatedQueries: {
                        $first: "$RelatedQueries",
                    },
                },
            },
        ])

        if (!relatedQueriesForAllCategories) {
            throw new ApiError(404, "No related queries found");
        }

        res.status(200).json(new ApiResponse(200, "Successfully fetched related queries for all categories", relatedQueriesForAllCategories));
    } catch (error) {
        logger.error("Something went wrong while fetching related queries for all categories", error);
        throw new ApiError(500, "Something went wrong while fetching related queries for all categories", error);
    }
})

export { getRelatedQueriesByCategory, getRelatedQueriesForAllCategories }