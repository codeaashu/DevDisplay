import { Category } from "../models/categories.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import logger from "../loki-config.js";
import { totalRequestCounter } from "../prom-config.js"

const getAllCategories = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching all categories");
    try {
        const categories = await Category.find();
        if (categories) {
            res.status(200).json(new ApiResponse(200, "Successfully fetched all categories", categories));
        }
        else {
            throw new ApiError(404, "No categories found in the database");
        }

    } catch (error) {
        logger.error("Something went wrong while fetching categories", error);
        throw new ApiError(500, "Something went wrong while fetching categories", error);
    }
})

const getCategoriesByIndex = asyncHandler(async (req, res) => {
    totalRequestCounter.inc();
    logger.info("Fetching categories by index");
    try {
        const { index } = req.params;
        if(!index) {
            throw new ApiError(400, "Category index is required");
        }
        const categories = await Category.find({index: index});
        if(!categories) {
            throw new ApiError(404, "No categories found in the database");
        } else {
            res.status(200).json(new ApiResponse(200, "Successfully fetched categories", categories));
        }
    } catch (error) {
        logger.error("Something went wrong while fetching categories", error);
        throw new ApiError(500, "Something went wrong while fetching categories", error);
    }
})

export { getAllCategories, getCategoriesByIndex };