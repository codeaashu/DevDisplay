import express from 'express';
import cors from 'cors';

import { collectDefaultMetrics, register } from "./prom-config.js"

import { healthcheckRouter } from './routes/healthcheck.routes.js';
import { categoryRouter } from "./routes/category.routes.js"
import { relatedQueryRouter } from "./routes/relatedQuery.routes.js"
import { relatedTopicRouter } from './routes/relatedTopic.routes.js';
import { interestRouter } from './routes/interest.routes.js';

const app = express();

const corsOptions = {
    origin: process.env.CORS_POLICY,
    credentials: true
}

collectDefaultMetrics({ register: register })

app.use(cors(corsOptions));
app.use(express.json());

app.get("/metrics", async (req, res) => {
    res.setHeader("Content-Type", register.contentType);
    res.send(await register.metrics());
})

app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/interestOverTime", interestRouter);
app.use("/api/v1/relatedQuery", relatedQueryRouter);
app.use("/api/v1/relatedTopic", relatedTopicRouter);

export default app;