// a promise block wrapper, helps to reduce the try-catch blocks in controllers
// also standardizes the error handling by forwarding the error to the error-handling middleware

const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise
      .resolve(fn(req, res, next)) // converts the sync function into a async promise
      .catch((err) => next(err)); // pass the error to the error-handling middleware
  };
};

export default asyncHandler;
