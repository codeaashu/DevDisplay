import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">
          This is the project Showcase page - Want to Build this page as a contributer
        </h1>
      </header>
      <h1 className="text-2xl font-bold">Click here to check out the feature details 👇🏻</h1>
      <a href="https://github.com/codeaashu/DevDisplay/issues/571#issue-2678911438" target="_blank" rel="noreferrer">
        <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>🌟 Add Project Showcase Features 💌 & Get 8 Benefits 🌟</b>
          </span>
        </button>
      </a>
    </div>
  );
};

export default ProjectsPage;
