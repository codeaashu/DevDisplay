import IdeaSubmission from '../models/ideaSubmission.models.js';

const parseList = (val) => {
  if (!val) return [];
  try {
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch (error) {
    return String(val)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
};

export const createIdea = async (req, res) => {
  try {
    const title = req.body.tittle || req.body.title;
    const description = req.body.description || '';

    const tags = parseList(req.body.tags);
    const resources = parseList(req.body.resources);

    const mediaUrls = (req.files || []).map((f) => `/uploads/${f.filename}`);

    if (!title || !title.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const idea = await IdeaSubmission.create({
      title: title.trim(),
      description,
      tags,
      resources,
      mediaUrls,
    });

    res.status(201).json({ message: 'Idea created', idea });
  } catch (err) {
    console.error('Create idea error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getIdeas = async (_req, res) => {
  try {
    const ideas = await IdeaSubmission.find().sort({ createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    console.error('Fetch ideas error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getIdeaById = async (req, res) => {
  try {
    const idea = await IdeaSubmission.findById(req.params.id);
    if (!idea) return res.status(404).json({ error: 'Not found' });
    res.json(idea);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

export const voteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.ip;

    const idea = await IdeaSubmission.findById(id);
    if (!idea) {
      return res.status(404).json({ error: 'Idea not found' });
    }

    const index = idea.voters.indexOf(userId);

    if (index === -1) {
      idea.voters.push(userId);
      idea.votes += 1;
    } else {
      idea.voters.splice(index, 1);
      idea.votes -= 1;
    }

    await idea.save();

    res.json({
      message: 'Vote toggled',
      votes: idea.votes,
      voters: idea.voters,
      idea,
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
