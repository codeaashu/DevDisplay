import IdeaService from '../service/idea-service.js';
import { uploadImageToCloudinary } from '../utils/cloudinary.js';

const ideaService = new IdeaService();

const createIdea = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const userId = req.body.userId;
    const imageFile = req.file;
    console.log(imageFile);

    const now = new Date();

    // Find the user's most recent idea submission
    const existingIdea = await ideaService.find({ userId });

    if (existingIdea) {
      // Check if the submission date is within the current month
      const lastSubmissionDate = new Date(existingIdea.submissionDate);

      // If the last submission is in the current month, restrict the user from submitting
      if (lastSubmissionDate.getMonth() === now.getMonth() && lastSubmissionDate.getFullYear() === now.getFullYear()) {
        return res.status(400).json({
          message: 'You can only submit one idea per month. Please wait until the 1st of next month.',
        });
      }
    }

    let imageUrl = null;
    if (imageFile) {
      imageUrl = await uploadImageToCloudinary(imageFile.buffer); // Upload directly using the buffer
    }
    console.log(imageUrl);

    const idea = await ideaService.createIdea({
      title,
      description,
      tags,
      userId,
      submissionDate: now,
      media: imageUrl,
    });

    await idea.save();

    res.status(200).json({
      success: true,
      message: 'Idea created successfully',
      data: idea,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong in idea-controller',
      success: false,
      err: error.message,
      data: {},
    });
  }
};
const deleteIdea = async (req, res) => {
  try {
    const ideaId = req.params.id;
    const response = await ideaService.deleteIdea(ideaId);
    res.status(200).json({
      success: true,
      message: 'Idea deleted successfully',
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong in idea-controller',
      success: false,
      err: error.message,
      data: {},
    });
  }
};
const updateIdea = async (req, res) => {
  try {
    const ideaId = req.params.id;
    const data = req.body;
    const response = await ideaService.updateIdea(ideaId, data);
    res.status(200).json({
      success: true,
      message: 'Idea updated successfully',
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong in idea-controller',
      success: false,
      err: error.message,
      data: {},
    });
  }
};
const getIdea = async (req, res) => {
  try {
    const ideaId = req.params.id;
    const response = await ideaService.getIdea(ideaId);
    res.status(200).json({
      success: true,
      message: 'Idea fetched successfully',
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong in idea-controller',
      success: false,
      err: error.message,
      data: {},
    });
  }
};

const voteIdeas = async (req, res) => {
  try {
    const ideaId = req.params.id;
    const userId = req.body.userId;

    const response = await ideaService.voteOnIdea(ideaId, userId);

    res.status(200).json({
      success: true,
      message: 'Voted successfully',
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong in idea-controller',
      success: false,
      err: error.message,
      data: {},
    });
  }
};

const getTopTrendingIdeas = async (req, res) => {
  try {
    const trendingIdeas = await ideaService.getTopTrendingIdeas();

    res.status(200).json({
      success: true,
      message: 'Top 5 trending ideas fetched successfully',
      data: trendingIdeas,
      err: {},
    });
  } catch (error) {
    console.error('Error in getTopTrendingIdeas Controller:', error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong while fetching top trending ideas',
      success: false,
      err: error.message,
      data: {},
    });
  }
};

const getAllIdeas = async (req, res) => {
  try {
    const ideas = await ideaService.getAllIdeas();

    res.status(200).json({
      success: true,
      message: 'All ideas fetched successfully',
      data: ideas,
      err: {},
    });
  } catch (error) {
    console.error('Error in getAllIdeas Controller:', error);
    res.status(500).json({
      message: 'Internal Server error. Something went wrong while fetching all ideas',
      success: false,
      err: error.message,
      data: {},
    });
  }
};

export { createIdea, deleteIdea, updateIdea, getIdea, voteIdeas, getTopTrendingIdeas, getAllIdeas };
