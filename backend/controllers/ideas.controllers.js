import Ideas from '../models/ideas.models.js';
import { apiResponse } from '../utils/response.utils.js';

// Submit a new idea
export const submitIdea = async (req, res) => {
  try {
    const { title, description, submittedBy, submitterEmail, tags, resourcesNeeded, mediaUrls } = req.body;

    // Check if submission is open
    if (!Ideas.isSubmissionOpen()) {
      return res
        .status(400)
        .json(apiResponse(400, null, 'Idea submission is only allowed during the first week of each month'));
    }

    // Get current submission period
    const { month, year } = Ideas.getCurrentSubmissionPeriod();

    // Check if user already submitted an idea this month
    const existingIdea = await Ideas.findOne({
      submitterEmail,
      submissionMonth: month,
      submissionYear: year,
    });

    if (existingIdea) {
      return res.status(400).json(apiResponse(400, null, 'You can only submit one idea per month'));
    }

    // Create new idea
    const newIdea = new Ideas({
      title,
      description,
      submittedBy,
      submitterEmail,
      tags: tags || [],
      resourcesNeeded,
      mediaUrls: mediaUrls || [],
      submissionMonth: month,
      submissionYear: year,
    });

    await newIdea.save();

    res.status(201).json(apiResponse(201, newIdea, 'Idea submitted successfully'));
  } catch (error) {
    console.error('Error submitting idea:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Get all ideas for current month
export const getCurrentMonthIdeas = async (req, res) => {
  try {
    const { month, year } = Ideas.getCurrentSubmissionPeriod();
    const { page = 1, limit = 10, sortBy = 'votes', order = 'desc' } = req.query;

    const skip = (page - 1) * limit;
    const sortOrder = order === 'desc' ? -1 : 1;

    const ideas = await Ideas.find({
      submissionMonth: month,
      submissionYear: year,
      isArchived: false,
    })
      .sort({ [sortBy]: sortOrder, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-voters'); // Don't expose voter details

    const totalIdeas = await Ideas.countDocuments({
      submissionMonth: month,
      submissionYear: year,
      isArchived: false,
    });

    res.status(200).json(
      apiResponse(
        200,
        {
          ideas,
          currentPage: parseInt(page),
          totalPages: Math.ceil(totalIdeas / limit),
          totalIdeas,
          submissionPeriod: `${month} ${year}`,
          isSubmissionOpen: Ideas.isSubmissionOpen(),
        },
        'Ideas retrieved successfully',
      ),
    );
  } catch (error) {
    console.error('Error getting ideas:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Get trending ideas
export const getTrendingIdeas = async (req, res) => {
  try {
    const { limit = 5 } = req.query;
    const trendingIdeas = await Ideas.getTrendingIdeas(parseInt(limit));

    res.status(200).json(apiResponse(200, trendingIdeas, 'Trending ideas retrieved successfully'));
  } catch (error) {
    console.error('Error getting trending ideas:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Vote for an idea
export const voteForIdea = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const { userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json(apiResponse(400, null, 'User email is required'));
    }

    const idea = await Ideas.findById(ideaId);
    if (!idea) {
      return res.status(404).json(apiResponse(404, null, 'Idea not found'));
    }

    // Check if user can vote (hasn't voted already)
    if (!idea.canUserVote(userEmail)) {
      return res.status(400).json(apiResponse(400, null, 'You have already voted for this idea'));
    }

    // Add vote
    idea.addVote(userEmail);
    await idea.save();

    res.status(200).json(apiResponse(200, { votes: idea.votes }, 'Vote added successfully'));
  } catch (error) {
    console.error('Error voting for idea:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Remove vote from an idea
export const removeVoteFromIdea = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const { userEmail } = req.body;

    if (!userEmail) {
      return res.status(400).json(apiResponse(400, null, 'User email is required'));
    }

    const idea = await Ideas.findById(ideaId);
    if (!idea) {
      return res.status(404).json(apiResponse(404, null, 'Idea not found'));
    }

    // Remove vote
    const voteRemoved = idea.removeVote(userEmail);
    if (!voteRemoved) {
      return res.status(400).json(apiResponse(400, null, 'You have not voted for this idea'));
    }

    await idea.save();

    res.status(200).json(apiResponse(200, { votes: idea.votes }, 'Vote removed successfully'));
  } catch (error) {
    console.error('Error removing vote:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Get idea by ID
export const getIdeaById = async (req, res) => {
  try {
    const { ideaId } = req.params;

    const idea = await Ideas.findById(ideaId).populate('collaborators', 'name email role').select('-voters'); // Don't expose voter details

    if (!idea) {
      return res.status(404).json(apiResponse(404, null, 'Idea not found'));
    }

    res.status(200).json(apiResponse(200, idea, 'Idea retrieved successfully'));
  } catch (error) {
    console.error('Error getting idea:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Select idea for development (admin function)
export const selectIdeaForDevelopment = async (req, res) => {
  try {
    const { ideaId } = req.params;

    const idea = await Ideas.findById(ideaId);
    if (!idea) {
      return res.status(404).json(apiResponse(404, null, 'Idea not found'));
    }

    // Mark as selected for development
    idea.status = 'selected';
    idea.selectedForDevelopment = true;
    idea.developmentStartDate = new Date();

    await idea.save();

    res.status(200).json(apiResponse(200, idea, 'Idea selected for development'));
  } catch (error) {
    console.error('Error selecting idea:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Join idea collaboration
export const joinIdeaCollaboration = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const { name, email, role } = req.body;

    const idea = await Ideas.findById(ideaId);
    if (!idea) {
      return res.status(404).json(apiResponse(404, null, 'Idea not found'));
    }

    if (idea.status !== 'selected' && idea.status !== 'in_development') {
      return res.status(400).json(apiResponse(400, null, 'This idea is not open for collaboration yet'));
    }

    // Check if user already joined
    const existingCollaborator = idea.collaborators.find((collaborator) => collaborator.email === email);

    if (existingCollaborator) {
      return res.status(400).json(apiResponse(400, null, 'You have already joined this project'));
    }

    // Add collaborator
    idea.collaborators.push({ name, email, role });
    if (idea.status === 'selected') {
      idea.status = 'in_development';
    }

    await idea.save();

    res.status(200).json(apiResponse(200, idea.collaborators, 'Successfully joined the collaboration'));
  } catch (error) {
    console.error('Error joining collaboration:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};

// Get submission status
export const getSubmissionStatus = async (req, res) => {
  try {
    const { userEmail } = req.query;
    const { month, year } = Ideas.getCurrentSubmissionPeriod();
    const isSubmissionOpen = Ideas.isSubmissionOpen();

    let hasSubmittedThisMonth = false;
    if (userEmail) {
      const existingIdea = await Ideas.findOne({
        submitterEmail: userEmail,
        submissionMonth: month,
        submissionYear: year,
      });
      hasSubmittedThisMonth = !!existingIdea;
    }

    // Calculate days left for submission
    const now = new Date();
    const currentDay = now.getDate();
    const daysLeftForSubmission = isSubmissionOpen ? 7 - currentDay + 1 : 0;

    res.status(200).json(
      apiResponse(
        200,
        {
          isSubmissionOpen,
          submissionPeriod: `${month} ${year}`,
          hasSubmittedThisMonth,
          daysLeftForSubmission,
          submissionEndsAt: isSubmissionOpen ? new Date(now.getFullYear(), now.getMonth(), 7, 23, 59, 59) : null,
        },
        'Submission status retrieved successfully',
      ),
    );
  } catch (error) {
    console.error('Error getting submission status:', error);
    res.status(500).json(apiResponse(500, null, 'Internal server error'));
  }
};
