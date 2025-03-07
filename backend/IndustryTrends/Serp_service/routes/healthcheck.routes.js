import { Router } from "express";
import { healthcheckController } from "../controllers/healthcheck.controllers.js";

const router = Router();

router.route("/").get(healthcheckController);

export { router as healthcheckRouter }