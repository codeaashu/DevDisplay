import React from 'react';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-blue-600"></div>
    </div>
  );
};

export default Loader;
