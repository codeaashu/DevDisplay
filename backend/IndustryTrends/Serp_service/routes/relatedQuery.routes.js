import { Router } from "express";
import { getRelatedQueriesByCategory, getRelatedQueriesForAllCategories } from "../controllers/relatedQuery.controllers.js";

const router = Router();

router.route("/getRelatedQueriesByCategory/:category").get(getRelatedQueriesByCategory)
router.route("/getRelatedQueriesForAllCategories").get(getRelatedQueriesForAllCategories)

export { router as relatedQueryRouter }