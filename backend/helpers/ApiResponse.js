// standardized API response format
import Constants from "../constants.js";

class ApiResponse {
  constructor(status, message, data = null, errorType = 'UNSPECIFIED', error = null) {
    this.success = status < 300 ? true : false; // Boolean value indicating whether the request was successful or not
    this.message = message, // Brief description of the result
    this.data = data || null, // Contains the actual response data (if any)
    this.status = status || 200 // HTTP status code

    // If the environment is development, include the error details in the response
    // POLICY DECISION ?? Only include error details in response if in development mode
    if(!this.success) {
      this.error = Constants.ENV === 'development' ? error : null;
      this.errorType = Constants.ENV === 'development' ? errorType : null;
    }

    // Log the response details to the console
    // DEVELOPMENT ONLY
    if (Constants.ENV === 'development') {
      console.log("[API RESPONSE START]");
      console.log(`[API RESPONSE] ${this.success ? 'SUCCESS' : 'FAILURE'}`);
      console.log(`[API RESPONSE] STATUS: ${this.status}`);
      console.log(`[API RESPONSE] MESSAGE: ${this.message}`);
      console.log("[API RESPONSE] DATA:-");
      console.dir(this.data);
      if(!this.success) {
        console.log("[API RESPONSE] ERROR:-");
        console.dir(this.error);
        console.log(`[API RESPONSE] ERROR TYPE: ${this.errorType}`);
      }
      console.log(`[API RESPONSE] TIMESTAMP: ${new Date().toISOString()}`);
      console.log("[API RESPONSE END]");
    }
  }
}

// Helper functions to send API responses
const successResponse = (res, data, message) => {
  res.status(200).json(new ApiResponse(200, message, data));
}
const errorResponse = (res, status, message, errorType, error) => {
  res.status(status).json(new ApiResponse(status, message, null, errorType, error));
}
export { successResponse, errorResponse };