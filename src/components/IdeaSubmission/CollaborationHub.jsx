import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CollaborationHub = () => {
  const [selectedIdeas, setSelectedIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    role: '',
    ideaId: ''
  });
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [joinMessage, setJoinMessage] = useState('');

  const roles = [
    { value: 'Project Lead', icon: '👑', description: 'Lead the project and coordinate efforts' },
    { value: 'Frontend Developer', icon: '🎨', description: 'Work on user interface and experience' },
    { value: 'Backend Developer', icon: '⚙️', description: 'Handle server-side logic and APIs' },
    { value: 'Designer', icon: '🎭', description: 'Create designs and user experience' },
    { value: 'DevOps Engineer', icon: '🔧', description: 'Handle deployment and infrastructure' },
    { value: 'QA Tester', icon: '🐛', description: 'Test functionality and find bugs' },
    { value: 'Documentation', icon: '📚', description: 'Write documentation and guides' },
    { value: 'Marketing', icon: '📢', description: 'Help with promotion and outreach' }
  ];

  useEffect(() => {
    fetchSelectedIdeas();
  }, []);

  const fetchSelectedIdeas = async () => {
    setLoading(true);
    try {
      // For now, we'll fetch current month ideas and filter for selected ones
      // In a real implementation, you'd have a dedicated endpoint for selected ideas
      const response = await fetch('/devdisplay/v1/ideas/current?limit=50');
      const data = await response.json();
      
      if (data.success) {
        const selected = data.data.ideas.filter(
          idea => idea.status === 'selected' || idea.status === 'in_development'
        );
        setSelectedIdeas(selected);
      }
    } catch (error) {
      console.error('Error fetching selected ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinCollaboration = async (e) => {
    e.preventDefault();
    setJoinMessage('');

    try {
      const response = await fetch(`/devdisplay/v1/ideas/${joinForm.ideaId}/collaborate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: joinForm.name,
          email: joinForm.email,
          role: joinForm.role
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setJoinMessage('🎉 Successfully joined the collaboration! Welcome aboard!');
        setShowJoinForm(false);
        setJoinForm({ name: '', email: '', role: '', ideaId: '' });
        fetchSelectedIdeas(); // Refresh the list
      } else {
        setJoinMessage(`❌ ${data.message || 'Failed to join collaboration'}`);
      }
    } catch (error) {
      console.error('Error joining collaboration:', error);
      setJoinMessage('❌ An error occurred. Please try again.');
    }
  };

  const openJoinForm = (ideaId) => {
    setJoinForm(prev => ({ ...prev, ideaId }));
    setShowJoinForm(true);
    setJoinMessage('');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-4 text-white text-lg">Loading collaboration opportunities...</span>
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
          🤝 Collaboration Hub
        </h2>
        <p className="text-gray-300 text-lg">
          Join forces with other developers to bring selected ideas to life!
        </p>
      </div>

      {/* Join Form Modal */}
      {showJoinForm && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-gray-800 rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🚀 Join Collaboration
            </h3>

            {joinMessage && (
              <div
                className={`mb-4 p-3 rounded-lg text-center ${
                  joinMessage.includes('Successfully')
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                {joinMessage}
              </div>
            )}

            <form onSubmit={handleJoinCollaboration} className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  👤 Your Name *
                </label>
                <input
                  type="text"
                  value={joinForm.name}
                  onChange={(e) => setJoinForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  📧 Email Address *
                </label>
                <input
                  type="email"
                  value={joinForm.email}
                  onChange={(e) => setJoinForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  🎯 Your Role *
                </label>
                <select
                  value={joinForm.role}
                  onChange={(e) => setJoinForm(prev => ({ ...prev, role: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your role</option>
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.icon} {role.value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowJoinForm(false)}
                  className="flex-1 py-3 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Join Project
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Selected Ideas for Collaboration */}
      {selectedIdeas.length > 0 ? (
        <div className="space-y-8">
          {selectedIdeas.map((idea, index) => (
            <motion.div
              key={idea._id}
              className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">
                      {idea.status === 'selected' ? '🌟' : '🚧'}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {idea.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-2">
                    by {idea.submittedBy} • {idea.votes} votes
                  </p>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    idea.status === 'selected' 
                      ? 'bg-yellow-600 text-white'
                      : 'bg-blue-600 text-white'
                  }`}>
                    {idea.status === 'selected' ? '🌟 Selected for Development' : '🚧 In Development'}
                  </span>
                </div>
                
                <motion.button
                  onClick={() => openJoinForm(idea._id)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Join Collaboration
                </motion.button>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-white font-bold mb-2">📝 Project Description</h4>
                <p className="text-gray-300">
                  {idea.description}
                </p>
              </div>

              {/* Resources Needed */}
              {idea.resourcesNeeded && (
                <div className="mb-6">
                  <h4 className="text-white font-bold mb-2">🛠️ Skills & Resources Needed</h4>
                  <p className="text-gray-300">
                    {idea.resourcesNeeded}
                  </p>
                </div>
              )}

              {/* Tags */}
              {idea.tags && idea.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white font-bold mb-2">🏷️ Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Collaborators */}
              <div>
                <h4 className="text-white font-bold mb-3">
                  👥 Current Team ({idea.collaborators?.length || 0})
                </h4>
                {idea.collaborators && idea.collaborators.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {idea.collaborators.map((collaborator, collabIndex) => (
                      <div
                        key={collabIndex}
                        className="bg-gray-700 rounded-lg p-3 flex items-center"
                      >
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {collaborator.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">
                            {collaborator.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {collaborator.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    <div className="text-4xl mb-2">👥</div>
                    <p>No collaborators yet. Be the first to join!</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No Projects Available for Collaboration
          </h3>
          <p className="text-gray-400 mb-6">
            Ideas are selected for collaboration at the end of each month based on votes.
          </p>
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-white font-bold mb-3">How Collaboration Works:</h4>
            <div className="text-left space-y-2 text-gray-300">
              <p>1. 💡 Submit ideas during the first week of the month</p>
              <p>2. 👍 Community votes on their favorite ideas</p>
              <p>3. 🏆 Top-voted idea is selected for development</p>
              <p>4. 🤝 Community collaborates to bring the idea to life</p>
            </div>
          </div>
        </div>
      )}

      {/* Available Roles Info */}
      <motion.div
        className="mt-12 bg-gray-800 rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          🎯 Available Collaboration Roles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, index) => (
            <div
              key={role.value}
              className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors"
            >
              <div className="text-2xl mb-2">{role.icon}</div>
              <h4 className="text-white font-bold text-sm mb-1">
                {role.value}
              </h4>
              <p className="text-gray-400 text-xs">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationHub;