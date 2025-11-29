import React from 'react';
import { motion } from 'framer-motion';
import IdeaCard from './IdeaCard';

const TrendingIdeas = ({ ideas, onVoteUpdate }) => {
  if (!ideas || ideas.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="mb-4 text-6xl">🔥</div>
        <h3 className="mb-2 text-xl font-semibold text-white">No Trending Ideas Yet</h3>
        <p className="text-gray-400">Submit ideas and start voting to see trending content!</p>
      </div>
    );
  }

  return (
    <motion.div
      className="mx-auto max-w-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white">🔥 Trending Ideas This Month</h2>
        <p className="text-lg text-gray-300">The most popular ideas voted by our community</p>
      </div>

      {/* Leaderboard */}
      <div className="mb-8">
        <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
          <h3 className="mb-4 text-center text-2xl font-bold text-white">🏆 Top Ideas Leaderboard</h3>
          <div className="space-y-3">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea._id}
                className={`flex items-center justify-between rounded-lg p-4 ${
                  index === 0
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500'
                    : index === 1
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500'
                      : index === 2
                        ? 'bg-gradient-to-r from-orange-600 to-orange-500'
                        : 'bg-gray-700'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-black">
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                    {index > 2 && `#${index + 1}`}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{idea.title}</h4>
                    <p className="text-sm text-gray-200">by {idea.submittedBy}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white">👍 {idea.votes}</div>
                  <div className="text-sm text-gray-200">votes</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Ideas Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Ranking Badge */}
            <div
              className={`absolute -left-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white ${
                index === 0
                  ? 'bg-yellow-500'
                  : index === 1
                    ? 'bg-gray-500'
                    : index === 2
                      ? 'bg-orange-500'
                      : 'bg-blue-600'
              }`}
            >
              {index + 1}
            </div>

            <IdeaCard idea={idea} onVoteUpdate={onVoteUpdate} />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8">
          <h3 className="mb-4 text-2xl font-bold text-white">🚀 Want to see your idea trending?</h3>
          <p className="mb-6 text-lg text-blue-100">
            Submit your innovative project ideas and get the community to vote for them!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm text-white">💡 Submit Ideas</span>
            <span className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm text-white">
              👍 Vote for Favorites
            </span>
            <span className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm text-white">🤝 Collaborate</span>
            <span className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm text-white">🏆 Win Recognition</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrendingIdeas;
