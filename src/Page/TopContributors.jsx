import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer/Footer';
import Navbar from '../components/Navbar';

const ContributorsPage = () => {
  const [contributors, setContributors] = useState([]);
  const [sortType, setSortType] = useState('commits');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/repos/codeaashu/DevDisplay/stats/contributors');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const formattedContributors = data.map((contributor) => ({
          id: contributor.author.id,
          login: contributor.author.login,
          avatar_url: contributor.author.avatar_url,
          commits: contributor.total,
          additions: contributor.weeks.reduce((sum, week) => sum + week.a, 0),
          deletions: contributor.weeks.reduce((sum, week) => sum + week.d, 0),
        }));

        setContributors(formattedContributors);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  const sortedContributors = [...contributors].sort((a, b) => {
    if (sortType === 'commits') return b.commits - a.commits;
    if (sortType === 'additions') return b.additions - a.additions;
    if (sortType === 'deletions') return b.deletions - a.deletions;
    return 0;
  });

  const filteredContributors = sortedContributors.filter((contributor) =>
    contributor.login.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const topContributors = sortedContributors.slice(0, 5);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 p-6 text-white">
        <h1 className="mb-6 text-center text-3xl font-bold">DevDisplay Contributors</h1>
        <p className="mb-4 text-center text-lg">
          Thank you all contributors who strive hard to contribute to this project.
        </p>

        {loading && <p className="text-center text-lg">Loading contributors...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {contributors.length > 0 && (
          <>
            <div className="flex items-center justify-center gap-4 p-6">
              <h2 className="mb-4 text-center text-2xl font-semibold">Top 5 Contributors</h2>
              <select
                className="rounded bg-gray-800 p-2 text-white"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="commits">Sort by Commits</option>
                <option value="additions">Sort by Additions</option>
                <option value="deletions">Sort by Deletions</option>
              </select>
            </div>

            <div className="mb-6 flex flex-wrap justify-center gap-6">
              {topContributors.map((contributor) => (
                <div key={contributor.id} className="w-56 rounded-lg bg-gray-800 p-4 text-center">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="mx-auto h-16 w-16 rounded-full"
                  />
                  <p className="mt-2 font-semibold">{contributor.login}</p>
                  <p>Commits: {contributor.commits}</p>
                  <p>
                    Additions: <span className="text-green-400">{contributor.additions}</span> ++
                  </p>
                  <p>
                    Deletions: <span className="text-red-400">{contributor.deletions}</span> --
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex justify-center gap-4 p-6">
          <input
            type="text"
            placeholder="Search contributors..."
            className="rounded bg-gray-800 p-2 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {contributors.length > 0 && (
          <>
            <h2 className="mb-4 text-center text-2xl font-semibold">All Contributors</h2>
            <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredContributors.map((contributor) => (
                <div key={contributor.id} className="rounded-lg bg-gray-800 p-4 text-center">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="mx-auto h-20 w-20 rounded-full"
                  />
                  <p className="mt-2 font-semibold">{contributor.login}</p>
                  <p>Commits: {contributor.commits}</p>
                  <p>
                    Additions: <span className="text-green-400">{contributor.additions}</span> ++
                  </p>
                  <p>
                    Deletions: <span className="text-red-400">{contributor.deletions}</span> --
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ContributorsPage;
