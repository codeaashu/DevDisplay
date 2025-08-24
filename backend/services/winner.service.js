import winnerModels from '../models/winner.models.js';
import IdeaSubmission from '../models/ideaSubmission.models.js';

export async function selectWinnerForMonth(year, month) {
  const start = new Date(year, month, 1, 0, 0, 0, 0);
  const end = new Date(year, month + 1, 1, 0, 0, 0, 0);

  const existing = await winnerModels.findOne({ month, year });
  if (existing) return existing;

  const topIdea = await IdeaSubmission.find({ createdAt: { $gte: start, $lt: end } })
    .sort({ votes: -1 })
    .limit(1);

  if (!topIdea.length) return null;

  const winner = await winnerModels.create({
    ideaId: topIdea[0]._id,
    month,
    year,
  });

  return winner;
}
