import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IdeaCard = ({ idea, onVoteUpdate }) => {
  const [isVoting, setIsVoting] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showVoteInput, setShowVoteInput] = useState(false);

  const handleVote = async () => {
    if (!userEmail) {
      setShowVoteInput(true);
      return;
    }

    setIsVoting(true);
    try {
      const response = await fetch(`/devdisplay/v1/ideas/${idea._id}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail }),
      });

      const data = await response.json();
      
      if (data.success) {
        onVoteUpdate(idea._id, data.data.votes);
        setShowVoteInput(false);
        setUserEmail('');
      } else {
        alert(data.message || 'Failed to vote');
      }
    } catch (error) {
      console.error('Error voting:', error);
      alert('An error occurred while voting');
    } finally {
      setIsVoting(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {idea.title}
          </h3>
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <span className="mr-4">👤 {idea.submittedBy}</span>
            <span>📅 {formatDate(idea.createdAt)}</span>
          </div>
        </div>
        
        {/* Vote Button */}
        <div className="flex flex-col items-center ml-4">
          <motion.button
            onClick={handleVote}
            disabled={isVoting}
            className={`p-3 rounded-full transition-all duration-300 ${
              isVoting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-110'
            }`}
            whileHover={{ scale: isVoting ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isVoting ? (
              <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <span className="text-white text-xl">👍</span>
            )}
          </motion.button>
          <span className="text-white font-bold mt-1">{idea.votes}</span>
        </div>
      </div>

      {/* Vote Input */}
      {showVoteInput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 p-3 bg-gray-700 rounded-lg"
        >
          <label className="block text-white text-sm mb-2">
            Enter your email to vote:
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="flex-1 px-3 py-2 bg-gray-600 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleVote}
              disabled={!userEmail || isVoting}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-600"
            >
              Vote
            </button>
          </div>
        </motion.div>
      )}

      {/* Description */}
      <p className="text-gray-300 mb-4 line-clamp-4">
        {idea.description}
      </p>

      {/* Tags */}
      {idea.tags && idea.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {idea.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Resources Needed */}
      {idea.resourcesNeeded && (
        <div className="mb-4">
          <h4 className="text-white font-medium mb-2">🛠️ Resources Needed:</h4>
          <p className="text-gray-400 text-sm line-clamp-2">
            {idea.resourcesNeeded}
          </p>
        </div>
      )}

      {/* Status Badge */}
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          idea.status === 'selected' 
            ? 'bg-green-600 text-white'
            : idea.status === 'in_development'
            ? 'bg-yellow-600 text-white'
            : idea.status === 'completed'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-600 text-white'
        }`}>
          {idea.status === 'submitted' && '📝 Submitted'}
          {idea.status === 'selected' && '🌟 Selected'}
          {idea.status === 'in_development' && '🚧 In Development'}
          {idea.status === 'completed' && '✅ Completed'}
        </span>

        {/* Collaborators count */}
        {idea.collaborators && idea.collaborators.length > 0 && (
          <span className="text-gray-400 text-sm">
            👥 {idea.collaborators.length} collaborator{idea.collaborators.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Media Preview */}
      {idea.mediaUrls && idea.mediaUrls.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {idea.mediaUrls.slice(0, 3).map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm truncate max-w-xs"
              >
                🖼️ Media {index + 1}
              </a>
            ))}
            {idea.mediaUrls.length > 3 && (
              <span className="text-gray-400 text-sm">
                +{idea.mediaUrls.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default IdeaCard;