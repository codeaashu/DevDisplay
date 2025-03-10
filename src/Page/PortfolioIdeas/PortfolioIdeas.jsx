import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer/Footer';
import portfoliosData from './portfolio.json'; // Import the JSON file

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden md:inline">Back</span>
          </button>
        </a>

        <div className="text-2xl font-bold">
          <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-12 w-12" />
        </div>
      </div>
    </nav>
  );
};

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search portfolios..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full rounded-lg bg-gray-700 px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
      />
      <svg
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

const PortfolioIdeas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPortfolio, setNewPortfolio] = useState({
    author: '',
    screenshot: '',
    liveUrl: '',
    repo: '',
    techStack: '',
  });

  useEffect(() => {
    setPortfolios(portfoliosData); // Load portfolios from JSON file
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPortfolios([...portfolios, newPortfolio]);
    setNewPortfolio({
      author: '',
      screenshot: '',
      liveUrl: '',
      repo: '',
      techStack: '',
    });
    setIsModalOpen(false);
  };

  const filteredPortfolios = portfolios.filter((portfolio) =>
    portfolio.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div className="w-64">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-[#00a6fb] px-4 py-2 text-white transition-colors hover:bg-[#0089d2]"
        >
          Add Portfolio
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Add New Portfolio</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Author</label>
                <input
                  type="text"
                  value={newPortfolio.author}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, author: e.target.value })}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Screenshot UR]L</label>
                <input
                  type="url"
                  value={newPortfolio.screenshot}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, screenshot: e.target.value })}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Live URL</label>
                <input
                  type="url"
                  value={newPortfolio.liveUrl}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, liveUrl: e.target.value })}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Repository URL</label>
                <input
                  type="url"
                  value={newPortfolio.repo}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, repo: e.target.value })}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Tech Stack</label>
                <input
                  type="text"
                  value={newPortfolio.techStack}
                  onChange={(e) => setNewPortfolio({ ...newPortfolio, techStack: e.target.value })}
                  className="w-full rounded-lg bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
                  required
                  placeholder="e.g., React, Node.js, MongoDB"
                />
              </div>
              <div className="mt-6 flex gap-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#00a6fb] px-4 py-2 text-white transition-colors hover:bg-[#0089d2]"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg bg-gray-800 text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Screenshot</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Live URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Repository</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Tech Stack</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredPortfolios.map((portfolio, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-6 py-4">{portfolio.author}</td>
                <td className="px-6 py-4">
                  <img
                    src={portfolio.screenshot}
                    alt={`${portfolio.author}'s portfolio`}
                    className="h-20 w-32 rounded object-cover"
                  />
                </td>
                <td className="px-6 py-4">
                  <a
                    href={portfolio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00a6fb] hover:underline"
                  >
                    View Live
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={portfolio.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00a6fb] hover:underline"
                  >
                    View Code
                  </a>
                </td>
                <td className="px-6 py-4">{portfolio.techStack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Navbar />
      <div className="flex-grow">
        <PortfolioIdeas />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
