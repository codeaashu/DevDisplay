import React from 'react';
import projectsData from '../DB/projects.json';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Calculate leaderboard data
const leaderboard = projectsData
  .map((user) => ({
    username: user.github_username,
    avatar: user.Projects?.[0]?.maker_image || '',
    projectCount: user.Projects ? user.Projects.length : 0,
  }))
  .sort((a, b) => b.projectCount - a.projectCount);

const Leaderboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="mb-8 flex items-center">
        <button
          className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="hidden md:inline">Back</span>
        </button>
        <h1 className="ml-4 text-3xl font-bold">Top Project Builder Leaderboard</h1>
      </div>
      <div className="mb-8 text-center">
        <span className="text-lg font-semibold text-[#00a6fb]">Live Leaderboard (Global)</span>
        <span className="ml-2">🌍📊</span>
      </div>
      {/* Top 3 */}
      <div className="mb-10 flex flex-wrap justify-center gap-6">
        {leaderboard.slice(0, 3).map((user, idx) => (
          <div
            key={user.username}
            className="flex w-64 flex-col items-center rounded-xl border-2 border-[#00a6fb] bg-gray-800 p-6 shadow-lg"
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="mb-2 h-20 w-20 rounded-full border-4 border-[#00a6fb]"
            />
            <div className="mb-1 text-xl font-bold">{user.username}</div>
            <div className="mt-2 rounded-lg border border-gray-600 px-4 py-2 font-semibold text-[#00a6fb]">
              ⭐ {user.projectCount} projects
            </div>
          </div>
        ))}
      </div>
      {/* Table for rest */}
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-gray-700 bg-gray-800">
          <thead>
            <tr>
              <th className="border-b border-gray-700 px-4 py-2">Rank</th>
              <th className="border-b border-gray-700 px-4 py-2">Builder Name</th>
              <th className="border-b border-gray-700 px-4 py-2">Project Built</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.slice(3).map((user, idx) => (
              <tr key={user.username} className="text-center">
                <td className="border-b border-gray-700 px-4 py-2 font-bold">#{idx + 4}</td>
                <td className="flex items-center justify-center gap-2 border-b border-gray-700 px-4 py-2">
                  <img src={user.avatar} alt={user.username} className="h-8 w-8 rounded-full" />
                  {user.username}
                </td>
                <td className="border-b border-gray-700 px-4 py-2">⭐ {user.projectCount} projects</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
