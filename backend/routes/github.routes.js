import { Router } from 'express';
import * as githubControllers from '../controllers/github.controllers.js';

const router = Router();

router.get('/repositories/:since', githubControllers.fetchTrendingRepos);
router.get('/getRandomRepo', githubControllers.fetchRandomRepo);
router.get('/developers/:since', githubControllers.fetchTrendingDevs);
router.get('/getRandomDev', githubControllers.fetchRandomDev);

export { router as githubRouter };
