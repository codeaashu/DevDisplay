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
      day: 'numeric',
    });
  };

  return (
    <motion.div
      className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 line-clamp-2 text-xl font-bold text-white">{idea.title}</h3>
          <div className="mb-2 flex items-center text-sm text-gray-400">
            <span className="mr-4">👤 {idea.submittedBy}</span>
            <span>📅 {formatDate(idea.createdAt)}</span>
          </div>
        </div>

        {/* Vote Button */}
        <div className="ml-4 flex flex-col items-center">
          <motion.button
            onClick={handleVote}
            disabled={isVoting}
            className={`rounded-full p-3 transition-all duration-300 ${
              isVoting ? 'cursor-not-allowed bg-gray-600' : 'transform bg-blue-600 hover:scale-110 hover:bg-blue-700'
            }`}
            whileHover={{ scale: isVoting ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isVoting ? (
              <svg className="h-6 w-6 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <span className="text-xl text-white">👍</span>
            )}
          </motion.button>
          <span className="mt-1 font-bold text-white">{idea.votes}</span>
        </div>
      </div>

      {/* Vote Input */}
      {showVoteInput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-4 rounded-lg bg-gray-700 p-3"
        >
          <label className="mb-2 block text-sm text-white">Enter your email to vote:</label>
          <div className="flex gap-2">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="flex-1 rounded border border-gray-500 bg-gray-600 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleVote}
              disabled={!userEmail || isVoting}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-600"
            >
              Vote
            </button>
          </div>
        </motion.div>
      )}

      {/* Description */}
      <p className="mb-4 line-clamp-4 text-gray-300">{idea.description}</p>

      {/* Tags */}
      {idea.tags && idea.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {idea.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Resources Needed */}
      {idea.resourcesNeeded && (
        <div className="mb-4">
          <h4 className="mb-2 font-medium text-white">🛠️ Resources Needed:</h4>
          <p className="line-clamp-2 text-sm text-gray-400">{idea.resourcesNeeded}</p>
        </div>
      )}

      {/* Status Badge */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            idea.status === 'selected'
              ? 'bg-green-600 text-white'
              : idea.status === 'in_development'
                ? 'bg-yellow-600 text-white'
                : idea.status === 'completed'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-600 text-white'
          }`}
        >
          {idea.status === 'submitted' && '📝 Submitted'}
          {idea.status === 'selected' && '🌟 Selected'}
          {idea.status === 'in_development' && '🚧 In Development'}
          {idea.status === 'completed' && '✅ Completed'}
        </span>

        {/* Collaborators count */}
        {idea.collaborators && idea.collaborators.length > 0 && (
          <span className="text-sm text-gray-400">
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
                className="max-w-xs truncate text-sm text-blue-400 hover:text-blue-300"
              >
                🖼️ Media {index + 1}
              </a>
            ))}
            {idea.mediaUrls.length > 3 && (
              <span className="text-sm text-gray-400">+{idea.mediaUrls.length - 3} more</span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default IdeaCard;
