import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    submittedBy: {
      type: String,
      required: true,
      trim: true,
    },
    submitterEmail: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    resourcesNeeded: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    mediaUrls: [
      {
        type: String,
        trim: true,
      },
    ],
    votes: {
      type: Number,
      default: 0,
    },
    voters: [
      {
        email: {
          type: String,
          required: true,
        },
        votedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    submissionMonth: {
      type: String,
      required: true,
    },
    submissionYear: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['submitted', 'selected', 'in_development', 'completed'],
      default: 'submitted',
    },
    selectedForDevelopment: {
      type: Boolean,
      default: false,
    },
    developmentStartDate: {
      type: Date,
    },
    collaborators: [
      {
        name: String,
        email: String,
        role: String,
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    tasks: [
      {
        title: String,
        description: String,
        assignedTo: String,
        status: {
          type: String,
          enum: ['open', 'in_progress', 'completed'],
          default: 'open',
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Index for efficient querying
ideaSchema.index({ submissionMonth: 1, submissionYear: 1 });
ideaSchema.index({ votes: -1 });
ideaSchema.index({ status: 1 });

// Virtual for getting submission period
ideaSchema.virtual('submissionPeriod').get(function () {
  return `${this.submissionMonth}-${this.submissionYear}`;
});

// Method to check if user can vote
ideaSchema.methods.canUserVote = function (userEmail) {
  return !this.voters.some((voter) => voter.email === userEmail);
};

// Method to add vote
ideaSchema.methods.addVote = function (userEmail) {
  if (this.canUserVote(userEmail)) {
    this.voters.push({ email: userEmail });
    this.votes += 1;
    return true;
  }
  return false;
};

// Method to remove vote
ideaSchema.methods.removeVote = function (userEmail) {
  const voterIndex = this.voters.findIndex((voter) => voter.email === userEmail);
  if (voterIndex > -1) {
    this.voters.splice(voterIndex, 1);
    this.votes -= 1;
    return true;
  }
  return false;
};

// Static method to get current submission period
ideaSchema.statics.getCurrentSubmissionPeriod = function () {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  return { month, year };
};

// Static method to check if submission is open
ideaSchema.statics.isSubmissionOpen = function () {
  const now = new Date();
  const dayOfMonth = now.getDate();
  // Submission open during first 7 days of month
  return dayOfMonth <= 7;
};

// Static method to get trending ideas
ideaSchema.statics.getTrendingIdeas = function (limit = 5) {
  const { month, year } = this.getCurrentSubmissionPeriod();
  return this.find({
    submissionMonth: month,
    submissionYear: year,
    isArchived: false,
  })
    .sort({ votes: -1, createdAt: -1 })
    .limit(limit)
    .populate('collaborators', 'name email role');
};

const Ideas = mongoose.model('Ideas', ideaSchema);

export default Ideas;
