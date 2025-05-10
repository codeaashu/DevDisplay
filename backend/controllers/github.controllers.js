import * as Repo_models from '../models/repositories.models.js';
import * as Dev_models from '../models/developers.models.js';
import * as responseClass from '../utils/response.utils.js';
import { pickRandomPeriod } from '../utils/randomPeriod.utils.js';

// Helper function to fetch developers based on time period
const fetchDevsForPeriod = async (timePeriod) => {
  let model;
  switch (timePeriod) {
    case 'daily':
      model = Dev_models.Dev_daily;
      break;
    case 'weekly':
      model = Dev_models.Dev_weekly;
      break;
    case 'monthly':
      model = Dev_models.Dev_monthly;
      break;
    default:
      throw new responseClass.ApiError(400, 'Invalid time period specified.');
  }

  // Fetching developers for the chosen period
  const response = await model.find();
  if (!response || response.length === 0) {
    throw new responseClass.ApiError(404, `No trending developers found for time period: '${timePeriod}'`);
  }
  return response;
};

// Helper function to fetch repositories based on time period
const fetchReposForPeriod = async (timePeriod) => {
  let model;
  switch (timePeriod) {
    case 'daily':
      model = Repo_models.Repo_daily;
      break;
    case 'weekly':
      model = Repo_models.Repo_weekly;
      break;
    case 'monthly':
      model = Repo_models.Repo_monthly;
      break;
    default:
      throw new responseClass.ApiError(400, 'Invalid time period specified.');
  }

  // Fetching repositories for the chosen period
  const response = await model.find();
  if (!response || response.length === 0) {
    throw new responseClass.ApiError(404, `No trending repositories found for time period: '${timePeriod}'`);
  }
  return response;
};

// Controller function for fetching trending developers
const fetchTrendingDevs = async (req, res) => {
  // Extract the "since" parameter from the URL
  const { since = 'daily' } = req.params; // Default to 'daily' if no "since" is provided

  try {
    // Fetch developers based on the time period
    const devs = await fetchDevsForPeriod(since);

    // Return a consistent response
    return res
      .status(200)
      .json(new responseClass.ApiResponse(200, `Fetched trending developers for time period: '${since}'`, devs));
  } catch (error) {
    // Generic error handling for unexpected errors
    console.error(error); // Optional: Add logging to track errors
    return res
      .status(500)
      .json(
        new responseClass.ApiResponse(
          500,
          `Something went wrong while fetching trending developers for time period: '${since}' --> \n${error.message || error}`,
        ),
      );
  }
};

// Controller function for fetching trending repositories
const fetchTrendingRepos = async (req, res) => {
  // Extract the "since" parameter from the URL
  const { since = 'daily' } = req.params; // Default to 'daily' if no "since" is provided

  try {
    // Fetch repositories based on the time period
    const repos = await fetchReposForPeriod(since);

    // Return a consistent response
    return res
      .status(200)
      .json(new responseClass.ApiResponse(200, `Fetched trending repositories for time period: '${since}'`, repos));
  } catch (error) {
    // Generic error handling for unexpected errors
    console.error(error); // Optional: Add logging to track errors
    return res
      .status(500)
      .json(
        new responseClass.ApiResponse(
          500,
          `Something went wrong while fetching trending repositories for time period: '${since}' --> \n${error.message || error}`,
        ),
      );
  }
};

const fetchRandomDev = async (req, res) => {
  const since = pickRandomPeriod();
  try {
    let devs;
    switch (since) {
      case 'daily':
        devs = await Dev_models.Dev_daily.aggregate([{ $sample: { size: 1 } }]);
        break;
      case 'weekly':
        devs = await Dev_models.Dev_weekly.aggregate([{ $sample: { size: 1 } }]);
        break;
      case 'monthly':
        devs = await Dev_models.Dev_monthly.aggregate([{ $sample: { size: 1 } }]);
        break;
      default:
        devs = await Dev_models.Dev_daily.aggregate([{ $sample: { size: 1 } }]);
        break;
    }
    if (devs.length > 0) {
      console.log('Random Document:', devs[0]);
      return res
        .status(200)
        .json(new responseClass.ApiResponse(200, `Fetched random developer for time period: '${since}'`, devs[0]));
    } else {
      console.log('No documents found.');
      return res
        .status(404)
        .json(new responseClass.ApiResponse(404, `No random developer found for time period: '${since}'`));
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        new responseClass.ApiResponse(
          500,
          `Something went wrong while fetching random developer for time period: '${since}' --> \n${error.message || error}`,
        ),
      );
  }
};

const fetchRandomRepo = async (req, res) => {
  const since = pickRandomPeriod();
  try {
    let repos;
    switch (since) {
      case 'daily':
        repos = await Repo_models.Repo_daily.aggregate([{ $sample: { size: 1 } }]);
        break;
      case 'weekly':
        repos = await Repo_models.Repo_weekly.aggregate([{ $sample: { size: 1 } }]);
        break;
      case 'monthly':
        repos = await Repo_models.Repo_monthly.aggregate([{ $sample: { size: 1 } }]);
        break;
      default:
        repos = await Repo_models.Repo_daily.aggregate([{ $sample: { size: 1 } }]);
        break;
    }
    if (repos.length > 0) {
      console.log('Random Document:', repos[0]);
      return res
        .status(200)
        .json(new responseClass.ApiResponse(200, `Fetched random repo for time period: '${since}'`, repos[0]));
    } else {
      console.log('No documents found.');
      return res
        .status(404)
        .json(new responseClass.ApiResponse(404, `No random repo found for time period: '${since}'`));
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(
        new responseClass.ApiResponse(
          500,
          `Something went wrong while fetching random repo for time period: '${since}' --> \n${error.message || error}`,
        ),
      );
  }
};

export { fetchTrendingDevs, fetchTrendingRepos, fetchRandomDev, fetchRandomRepo };
