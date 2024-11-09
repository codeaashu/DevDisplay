import React from 'react';

const IdeaSubmissionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Idea Submission</h1>
      </header>
      <main className="mt-4">
        <form className="rounded-lg bg-white p-4 shadow">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Title</label>
            <input type="text" className="w-full rounded-lg border p-2" />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Description</label>
            <textarea className="w-full rounded-lg border p-2"></textarea>
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Tags</label>
            <input type="text" className="w-full rounded-lg border p-2" />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Category</label>
            <select className="w-full rounded-lg border p-2">
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>
          <button type="submit" className="rounded-lg bg-blue-500 px-4 py-2">
            Submit
          </button>
        </form>
        <section className="mt-8">
          <h2 className="text-xl font-bold">Top Ideas</h2>
          {/* Add idea cards here */}
        </section>
      </main>
    </div>
  );
};

export default IdeaSubmissionPage;
