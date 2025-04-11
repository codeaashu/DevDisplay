import { Router } from "express";
import * as devControllers from "../controllers/dev.controllers.js"

const router = Router()

router.get("/posts/:since", devControllers.fetchTrendingPosts)
router.get("/getRandomPost", devControllers.fetchRandomPost)

export { router as devRouter };