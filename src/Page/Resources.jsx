import React from 'react';
import { Link } from 'react-router-dom';

const resources = [
  // Add resources here
];

const ResourcesPage = () => {
  return (
    
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">
          This is the Tech Resources Page - Want to Build this page as a contributer
        </h1>
      </header>

        <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="DSA-Companywiseimportant"
            className="bg-blue-500 text-white rounded-lg p-6 flex items-center justify-center hover:bg-blue-600"
          >
            Company-wise DSA Problems
          </Link>
          {/* Add other resources here */}
        </div>
      </div> 
      <h1 className="text-2xl font-bold">Click here for features details 👇🏻</h1>
      <a href="https://github.com/codeaashu/DevDisplay/issues/600#issue-2758465270" target="_blank" rel="noreferrer">
        <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>🌟 Add Tech Resources Features 💌 & Get 8 Benefits 🌟</b>
          </span>
        </button>
      </a>
      <h2 className="mt-8 text-2xl font-bold">Benefits of Contribution</h2>
      <a
        href="https://drive.google.com/file/d/17Wh9xxN_SIeEVcejoSN7K7tUhWXPvSxR/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="mt-4 inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>📄 View the Benefits of Contributing to DevDisplay</b>
          </span>
        </button>
      </a>
    </div>
  );
};

export default ResourcesPage;
