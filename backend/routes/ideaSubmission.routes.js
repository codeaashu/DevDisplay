import express from 'express';
import multer from 'multer';
import path from 'path';
import { createIdea, getIdeaById, getIdeas, voteIdea } from '../controllers/ideaSubmission.controllers.js';

const router = express.Router();

const uploadDir = path.join(process.cwd(), 'uploads');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    cb(null, `${Date.now()}-${base}${ext}`);
  },
});
const fileFilter = (_req, file, cb) => {
  const allowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Only image files are allowed'));
};
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

// Routes
router.post('/', upload.array('media', 10), createIdea);
router.get('/', getIdeas);
router.get('/:id', getIdeaById);
router.post('/:id/vote', voteIdea);

export { router as ideaRouter };
