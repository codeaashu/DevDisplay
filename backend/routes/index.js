import express from 'express';
import userRoutes from '../routes/v1/user.js';
import ideaRoutes from '../routes/v1/idea.js';

const router = express.Router();

router.use('/v1', userRoutes);
router.use('/v1', ideaRoutes);

export default router;
