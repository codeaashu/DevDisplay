import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const Test = mongoose.model('test', testSchema);
