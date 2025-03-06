import { createLogger, transports } from "winston"
import LokiTransport from "winston-loki"

const loggerOptions = {
    transports: [
        new LokiTransport({
            labels: {
                service: "serp_service"
            },
            host: "http://127.0.0.1:3100"
        })
    ]
};

const logger = createLogger(loggerOptions);

export default logger