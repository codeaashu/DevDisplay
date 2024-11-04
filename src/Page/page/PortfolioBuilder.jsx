import React from 'react';

const PortfolioBuilderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Portfolio Builder</h1>
      </header>
      <main className="mt-4">
        <form className="rounded-lg bg-white p-4 shadow">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Skills</label>
            <input type="text" className="w-full rounded-lg border p-2" />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Experience</label>
            <input type="text" className="w-full rounded-lg border p-2" />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Projects</label>
            <input type="text" className="w-full rounded-lg border p-2" />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Education</label>
            <input type="text" className="w-full rounded-lg border p-2" />
          </div>
          <button type="submit" className="rounded-lg bg-blue-500 px-4 py-2">
            Publish Portfolio
          </button>
        </form>
        <section className="mt-8">
          <h2 className="text-xl font-bold">Template Selection</h2>
          {/* Add template selection here */}
        </section>
      </main>
    </div>
  );
};

export default PortfolioBuilderPage;
