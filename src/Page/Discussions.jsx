import React from 'react';

const DiscussionsPage = () => {
  return (
    <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-center text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">
          This is the Portfolio Builder page - Want to Build this page as a contributor
        </h1>
      </header>
      <h1 className="text-center text-4xl font-bold">Click here for features details 👇🏻</h1>
      <a href="https://github.com/codeaashu/DevDisplay/issues/605#issue-2758476487" target="_blank" rel="noreferrer">
        <button className="mx-auto mt-4 block inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm text-xl transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>🌟 Add Idea Submission Features 💌 & Get 8 Benefits 🌟</b>
          </span>
        </button>
      </a>
      <h2 className="mt-8 text-center text-3xl font-bold">Benefits of Contribution</h2>
      <a
        href="https://drive.google.com/file/d/17Wh9xxN_SIeEVcejoSN7K7tUhWXPvSxR/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="mx-auto mt-4 block inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-lg text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>📄 View the Benefits of Contributing to DevDisplay</b>
          </span>
        </button>
      </a>
    </div>
  );
};

export default DiscussionsPage;
