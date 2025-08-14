import React, { useState } from 'react';

export default function IdeaSubmissionForm() {
  const [idea, setIdea] = useState({
    title: '',
    description: '',
    tags: '',
    resources: '',
    media: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setIdea({ ...idea, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Idea submitted:', idea);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-100 p-6 text-center">
        ✅ Your idea has been submitted!
        <p>Thanks for contributing to DevDisplay.</p>
      </div>
    );
  }

  return (
    <form
      className="mx-auto max-w-lg rounded-lg border border-[#00a6fb]/40 bg-gray-900/90 p-6 shadow-[0_0_35px_rgba(0,166,251,0.75)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,166,251,0.9)]"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-4 text-center text-2xl font-bold text-[#00a6fb]">Submit Your Idea</h2>

      <input
        name="title"
        maxLength="100"
        placeholder="Idea Title"
        className="mb-3 w-full rounded border bg-gray-800 p-2 text-white"
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Idea Description"
        className="mb-3 w-full rounded border bg-gray-800 p-2 text-white"
        rows="4"
        onChange={handleChange}
        required
      />

      <input
        name="tags"
        placeholder="Tags (comma separated)"
        className="mb-3 w-full rounded border bg-gray-800 p-2 text-white"
        onChange={handleChange}
      />

      <textarea
        name="resources"
        placeholder="Resources Needed"
        className="mb-3 w-full rounded border bg-gray-800 p-2 text-white"
        rows="2"
        onChange={handleChange}
      />

      <input
        type="file"
        name="media"
        className="mb-3 w-full bg-gray-800 text-white"
        accept="image/*,.pdf"
        onChange={handleChange}
      />

      <button type="submit" className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Submit Idea
      </button>
    </form>
  );
}
