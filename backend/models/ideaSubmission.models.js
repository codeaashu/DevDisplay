import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 2, maxlength: 140 },
    description: { type: String, default: '' },
    tags: { type: [String], default: [] },
    resources: { type: [String], default: [] },
    mediaUrls: { type: [String], default: [] },
    votes: { type: Number, default: 0 },
    voters: [{ type: String }],
  },
  { timestamps: true },
);

const IdeaSubmission = mongoose.model('IdeaSubmission', IdeaSchema);

export default IdeaSubmission;
