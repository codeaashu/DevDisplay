import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primaryColor dark:bg-secondaryColor">
      <div className="text-center">
        <h1 className="font-spaceMono text-9xl font-bold text-textPrimary dark:text-white">404</h1>
        <p className="mt-4 font-poppoins text-2xl font-medium text-textPrimary dark:text-white">Page Not Found</p>
        <p className="mt-2 font-poppoins text-lg text-gray-500 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/Home"
          className="mt-8 inline-block rounded-lg bg-textSecondary px-6 py-3 font-poppoins font-semibold text-white transition duration-300 hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
