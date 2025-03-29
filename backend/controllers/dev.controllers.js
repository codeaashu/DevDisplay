import * as Dev_models from "../models/post.models.js";
import * as responseClass from "../utils/response.utils.js";
import { pickRandomPeriod } from "../utils/randomPeriod.utils.js"

// Helper function to fetch posts based on time period
const fetchPostsForPeriod = async (timePeriod) => {
    let model;
    switch (timePeriod) {
        case "daily":
            model = Dev_models.Post_daily;
            break;
        case "weekly":
            model = Dev_models.Post_weekly;
            break;
        case "monthly":
            model = Dev_models.Post_monthly;
            break;
        default:
            throw new responseClass.ApiError(400, "Invalid time period specified.");
    }

    // Fetching posts for the chosen period
    const response = await model.find();
    if (!response || response.length === 0) {
        throw new responseClass.ApiError(404, `No trending posts found for time period: '${timePeriod}'`);
    }
    return response;
};

const fetchTrendingPosts = async (req, res) => {
    // Extract the "since" parameter from the URL, defaulting to "daily" if not provided
    const { since = 'daily' } = req.params;

    try {
        // Fetch posts based on the time period
        const posts = await fetchPostsForPeriod(since);

        // Return a consistent response with the fetched posts
        return res.status(200).json(new responseClass.ApiResponse(
            200,
            `Fetched trending posts for time period: '${since}'`,
            posts
        ));

    } catch (error) {
        // Generic error handling for unexpected errors
        console.error(error); // Optional: Add logging to track errors
        return res.status(500).json(new responseClass.ApiResponse(
            500,
            `Something went wrong while fetching trending posts for time period: '${since}' --> \n${error.message || error}`
        ));
    }
}

const fetchRandomPost = async (req, res) => {
    const since = pickRandomPeriod();
    try {
        let posts;
        switch (since) {
            case "daily":
                posts = await Dev_models.Post_daily.aggregate([
                    { $sample: { size: 1 } }
                ])
                break;
            case "weekly":
                posts = await Dev_models.Post_weekly.aggregate([
                    { $sample: { size: 1 } }
                ])
                break;
            case "monthly":
                posts = await Dev_models.Post_monthly.aggregate([
                    { $sample: { size: 1 } }
                ])
                break;
            default:
                posts = await Dev_models.Post_daily.aggregate([
                    { $sample: { size: 1 } }
                ])
                break;
        }
        if (posts.length > 0) {
            console.log('Random Document:', posts[0]);
            return res.status(200).json(new responseClass.ApiResponse(200, `Fetched random post for time period: '${since}'`, posts[0]));
        } else {
            console.log('No documents found.');
            return res.status(404).json(new responseClass.ApiResponse(404, `No random posts found for time period: '${since}'`));
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(new responseClass.ApiResponse(500, `Something went wrong while fetching random post for time period: '${since}' --> \n${error.message || error}`));
    }
}

export {
    fetchTrendingPosts,
    fetchRandomPost
};
