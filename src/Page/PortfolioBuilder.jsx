import React from 'react';

const PortfolioBuilderPage = () => {
  return (
    <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-center text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">
          This is the Portfolio Builder page - Want to Build this page as a contributor
        </h1>
      </header>
      <h1 className="text-center text-4xl font-bold">Click here for features details 👇🏻</h1>
      <a href="https://github.com/codeaashu/DevDisplay/issues/602#issue-2758470667" target="_blank" rel="noreferrer">
        <button className="mx-auto mt-4 block inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm text-xl transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <span>
            <b>🌟 Add Portfolio Building Features 💌 & Get 8 Benefits 🌟</b>
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
      <div className="mt-8 p-6 rounded-lg bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Dynamic Portfolio Generator (Coming Soon)</h2>
        <p className="mb-4">Build and customize your interactive portfolio with drag-and-drop widgets, live project demos, and real-time analytics.</p>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Upload Portfolio Screenshot</label>
          <input type="file" accept="image/*" className="mb-2" onChange={e => alert('Screenshot upload coming soon!')} />
          <div className="mt-2 text-sm text-gray-300">Screenshots will appear here after upload.</div>
        </div>
        <div className="mt-4 text-sm text-gray-400">Drag-and-drop widgets and analytics coming soon.</div>
      </div>
    </div>
  );
};

export default PortfolioBuilderPage;