import React from 'react';
import projectsData from '../DB/projects.json';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const leaderboard = projectsData
  .map((user) => ({
    username: user.github_username,
    avatar: user.Projects?.[0]?.maker_image || '',
    projectCount: user.Projects ? user.Projects.length : 0,
  }))
  .sort((a, b) => b.projectCount - a.projectCount);

const trophyColors = ['bg-yellow-400', 'bg-purple-500', 'bg-orange-400'];

const Leaderboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8 text-white">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">🚀 Top Project Builder Leaderboard</h1>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-lg font-semibold text-[#00a6fb]">Live Leaderboard (Global)</span>
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/66ebce3b69885_leaderboard.svg"
            alt="Leaderboard Icon"
            className="h-6 w-6"
          />
        </div>
      </div>

      {/* Top 3 Leaderboard Cards */}
      <div className="mb-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        {leaderboard.slice(0, 3).map((user, idx) => (
          <div
            key={user.username}
            className="relative w-full max-w-xs transform rounded-2xl bg-[#00a6fb] p-6 text-center text-white shadow-lg transition duration-300 hover:scale-105"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
              <div className="relative h-20 w-20">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="h-full w-full rounded-full border-4 border-white object-cover"
                />
                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white p-1 text-xl">🏆</div>
              </div>
            </div>
            <div className="mt-12 text-xl font-bold">{user.username}</div>
            <div className="mt-2 text-sm font-medium">⭐ {user.projectCount} projects</div>
          </div>
        ))}
      </div>

      {/* Other Leaderboard Table */}
      <div className="overflow-x-auto rounded-xl bg-gray-900 p-4 shadow-md">
        <table className="min-w-full divide-y divide-gray-700 text-sm">
          <thead className="text-left text-gray-300">
            <tr>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Builder</th>
              <th className="px-4 py-2">Projects</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {leaderboard.slice(3).map((user, idx) => (
              <tr key={user.username} className="hover:bg-gray-800">
                <td className="px-4 py-3 font-bold text-[#00a6fb]">#{idx + 4}</td>
                <td className="flex items-center gap-3 px-4 py-3">
                  <img src={user.avatar} alt={user.username} className="h-8 w-8 rounded-full border" />
                  <span>{user.username}</span>
                </td>
                <td className="px-4 py-3">⭐ {user.projectCount} projects</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
