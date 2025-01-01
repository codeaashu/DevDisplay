import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'User',
      enum: ['User', 'Project Lead', 'Designer', 'Developer', 'Tester', 'Documentor'],
    },
    submittedIdeas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Idea',
      },
    ],
    votedIdeas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Idea',
      },
    ],
  },
  { timestamps: true },
);

const userModel = mongoose.model('User', userSchema);

export default userModel;
