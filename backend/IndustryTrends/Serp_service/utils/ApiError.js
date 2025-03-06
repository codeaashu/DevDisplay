export class ApiError extends Error {
    constructor(statusCode, message, data = [], stackTrace = null) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = false;

        if(stackTrace) {
            this.stackTrace = stackTrace;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}