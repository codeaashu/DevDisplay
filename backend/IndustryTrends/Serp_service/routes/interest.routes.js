import { Router } from "express";
import { getInterestOverTimeByCategory, getInterestOverTimeForAllCategories } from "../controllers/interest.controllers.js"

const router = Router();

router.route("/getInterestByCategory/:category").get(getInterestOverTimeByCategory);
router.route("/getInterestForAllCategories").get(getInterestOverTimeForAllCategories);

export { router as interestRouter }