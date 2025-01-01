import IdeaService from '../service/idea-service.js';

const ideaService = new IdeaService();

const createIdea = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const userId = req.body.userId;

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

    const idea = await ideaService.createIdea({
      title,
      description,
      tags,
      userId,
      submissionDate: now,
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

export { createIdea, deleteIdea, updateIdea, getIdea, voteIdeas };
