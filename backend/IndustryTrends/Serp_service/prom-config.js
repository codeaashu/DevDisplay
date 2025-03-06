import { collectDefaultMetrics, Counter, register } from 'prom-client';

const totalRequestCounter = new Counter({
    name: "total_requests",
    help: "tells total number of requests"
})

export { collectDefaultMetrics, register, totalRequestCounter }