import React from 'react';
import { motion } from 'framer-motion';
import IdeaCard from './IdeaCard';

const TrendingIdeas = ({ ideas, onVoteUpdate }) => {
  if (!ideas || ideas.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔥</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Trending Ideas Yet</h3>
        <p className="text-gray-400">
          Submit ideas and start voting to see trending content!
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          🔥 Trending Ideas This Month
        </h2>
        <p className="text-gray-300 text-lg">
          The most popular ideas voted by our community
        </p>
      </div>

      {/* Leaderboard */}
      <div className="mb-8">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            🏆 Top Ideas Leaderboard
          </h3>
          <div className="space-y-3">
            {ideas.map((idea, index) => (
              <motion.div
                key={idea._id}
                className={`flex items-center justify-between p-4 rounded-lg ${
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
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black font-bold mr-4">
                    {index === 0 && '🥇'}
                    {index === 1 && '🥈'}
                    {index === 2 && '🥉'}
                    {index > 2 && `#${index + 1}`}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {idea.title}
                    </h4>
                    <p className="text-gray-200 text-sm">
                      by {idea.submittedBy}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xl">
                    👍 {idea.votes}
                  </div>
                  <div className="text-gray-200 text-sm">
                    votes
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Ranking Badge */}
            <div className={`absolute -top-3 -left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
              index === 0 
                ? 'bg-yellow-500' 
                : index === 1 
                ? 'bg-gray-500'
                : index === 2
                ? 'bg-orange-500'
                : 'bg-blue-600'
            }`}>
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            🚀 Want to see your idea trending?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Submit your innovative project ideas and get the community to vote for them!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              💡 Submit Ideas
            </span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              👍 Vote for Favorites
            </span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              🤝 Collaborate
            </span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              🏆 Win Recognition
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrendingIdeas;