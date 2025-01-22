import React, { useState, useEffect } from 'react';
import Navbar from './commonComponents/Navbar';
import Footer from './commonComponents/Footer';

const TopGithubRepo = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/repositories?since=100');
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <section className="p-8 text-center">
          <h1 className="mb-6 text-4xl text-[#00a6fb]">Top GitHub Repositories</h1>
          <p className="text-gray-300">Loading...</p>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-[#00a6fb]">Top GitHub Repositories</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {repos.map((repo) => (
            <div key={repo.id} className="rounded-lg bg-gray-800 p-6 shadow-lg transition hover:shadow-xl">
              <h2 className="text-2xl font-semibold text-[#00a6fb]">{repo.name}</h2>
              <p className="text-gray-300">{repo.description}</p>
              <div className="mt-4">
                <span className="text-gray-500">Stars: {repo.stargazers_count}</span> |{' '}
                <span className="text-gray-500">Forks: {repo.forks_count}</span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[#00a6fb] hover:underline"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TopGithubRepo;
