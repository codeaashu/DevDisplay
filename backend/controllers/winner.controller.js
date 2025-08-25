import winnerModels from '../models/winner.models.js';
import { selectWinnerForMonth } from '../services/winner.service.js';

export const getLatestWinner = async (req, res) => {
  try {
    const latest = await winnerModels.findOne().sort({ createdAt: -1 }).populate('ideaId');

    if (!latest) return res.json({ message: 'No winner found' });
    res.json(latest);
  } catch (error) {
    console.error('Error fetching latest winner:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const selectWinner = async (req, res) => {
  try {
    const now = new Date();
    const year = Number(req.query.year ?? now.getFullYear());
    const month = Number(req.query.month ?? now.getMonth());

    const winner = await selectWinnerForMonth(year, month);

    if (!winner) {
      return res.status(404).json({ message: 'No ideas found for the specified month' });
    }

    const populated = await winner.populate('ideaId'); // ✅ fixed field
    res.json({ message: 'Winner selected', winner: populated });
  } catch (e) {
    console.error('Error selecting winner:', e);
    res.status(500).json({ message: 'Internal server error' });
  }
};
