import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Submitted',
      enum: ['Submitted', 'Selected'],
    },
    tags: {
      type: [String],
      required: true,
    },
    media: {
      type: [String],
    },
    submissionDate: {
      type: Date,
      default: Date.now(),
    },
    votes: {
      type: Number,
      default: 0,
    },
    voters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true },
);

const ideaModel = mongoose.model('Idea', ideaSchema);

export default ideaModel;
