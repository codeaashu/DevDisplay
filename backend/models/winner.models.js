import mongoose from 'mongoose';

const winnerSchema = new mongoose.Schema({
  ideaId: { type: mongoose.Schema.Types.ObjectId, ref: 'IdeaSubmission', required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

winnerSchema.index({ month: 1, year: 1 }, { unique: true });
export default mongoose.model('Winner', winnerSchema);
