import { Router } from "express";
import { getAllCategories, getCategoriesByIndex } from "../controllers/category.controllers.js";

const router = Router();

router.route("/getAllCategories").get(getAllCategories);
router.route("/getCategoriesByIndex/:index").get(getCategoriesByIndex);

export { router as categoryRouter }