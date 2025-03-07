import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import logger from "../loki-config.js";
import { totalRequestCounter } from "../prom-config.js"

const healthcheckController = asyncHandler((_, res) => {
    totalRequestCounter.inc();
    logger.info("Healthcheck");
    res.status(200).json(new ApiResponse(200, "OK", null));
})

export { healthcheckController }