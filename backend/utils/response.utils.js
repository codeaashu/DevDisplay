export class ApiResponse {
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status < 400;
  }
}

export class ApiError extends Error {
  constructor(status, message, data = null, errors = [], stackTrace = null) {
    super(message);
    this.status = status;
    this.message = message;
    this.data = data;
    this.errors = errors;
    this.success = false;

    if (stackTrace) {
      this.stackTrace = stackTrace;
    } else {
      Error.captureStackTrace(this);
    }
  }
}
