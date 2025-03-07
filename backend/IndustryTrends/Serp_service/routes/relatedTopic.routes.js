import { Router } from "express";
import { getRelatedTopicsByCategory, getRelatedTopicsForAllCategories } from "../controllers/relatedTopic.controllers.js"

const router = Router();

router.route("/getRelatedTopicsByCategory/:category").get(getRelatedTopicsByCategory);
router.route("/getRelatedTopicsForAllCategories").get(getRelatedTopicsForAllCategories);

export { router as relatedTopicRouter }