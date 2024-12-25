import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">
          This is the project Showcase page - Want to Build this page as a contributer
        </h1>
      </header>
      <h1 className="text-2xl font-bold">Click here for features details 👇🏻</h1>
      <a href="https://github.com/codeaashu/DevDisplay/issues/603#issue-2758471902" target="_blank" rel="noreferrer">
        <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>🌟 Add Project Showcase Features 💌 & Get 8 Benefits 🌟</b>
          </span>
        </button>
      </a>
      <h2 className="mt-8 text-2xl font-bold">Benefits of Contribution</h2>
      <a href="/Benefits of Contributing to DevDisplay.pdf" target="_blank" rel="noreferrer">
        <button className="mt-4 inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>📄 View the Benefits of Contributing to DevDisplay</b>
          </span>
        </button>
      </a>
    </div>
  );
};

export default ProjectsPage;
