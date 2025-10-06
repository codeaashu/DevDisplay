import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CollaborationHub = () => {
  const [selectedIdeas, setSelectedIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [joinForm, setJoinForm] = useState({
    name: '',
    email: '',
    role: '',
    ideaId: '',
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
    { value: 'Marketing', icon: '📢', description: 'Help with promotion and outreach' },
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
          (idea) => idea.status === 'selected' || idea.status === 'in_development',
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
          role: joinForm.role,
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
    setJoinForm((prev) => ({ ...prev, ideaId }));
    setShowJoinForm(true);
    setJoinMessage('');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
        <span className="ml-4 text-lg text-white">Loading collaboration opportunities...</span>
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
        <h2 className="mb-4 text-4xl font-bold text-white">🤝 Collaboration Hub</h2>
        <p className="text-lg text-gray-300">Join forces with other developers to bring selected ideas to life!</p>
      </div>

      {/* Join Form Modal */}
      {showJoinForm && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-gray-800 p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="mb-6 text-center text-2xl font-bold text-white">🚀 Join Collaboration</h3>

            {joinMessage && (
              <div
                className={`mb-4 rounded-lg p-3 text-center ${
                  joinMessage.includes('Successfully') ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}
              >
                {joinMessage}
              </div>
            )}

            <form onSubmit={handleJoinCollaboration} className="space-y-4">
              <div>
                <label className="mb-2 block font-medium text-white">👤 Your Name *</label>
                <input
                  type="text"
                  value={joinForm.name}
                  onChange={(e) => setJoinForm((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-white">📧 Email Address *</label>
                <input
                  type="email"
                  value={joinForm.email}
                  onChange={(e) => setJoinForm((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-white">🎯 Your Role *</label>
                <select
                  value={joinForm.role}
                  onChange={(e) => setJoinForm((prev) => ({ ...prev, role: e.target.value }))}
                  required
                  className="w-full rounded-lg border border-gray-600 bg-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="flex-1 rounded-lg bg-gray-600 px-4 py-3 text-white transition-colors hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700"
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
              className="rounded-xl border border-gray-700 bg-gray-800 p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Header */}
              <div className="mb-6 flex flex-col justify-between lg:flex-row lg:items-center">
                <div className="mb-4 flex-1 lg:mb-0">
                  <div className="mb-2 flex items-center">
                    <span className="mr-3 text-2xl">{idea.status === 'selected' ? '🌟' : '🚧'}</span>
                    <h3 className="text-2xl font-bold text-white">{idea.title}</h3>
                  </div>
                  <p className="mb-2 text-gray-300">
                    by {idea.submittedBy} • {idea.votes} votes
                  </p>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      idea.status === 'selected' ? 'bg-yellow-600 text-white' : 'bg-blue-600 text-white'
                    }`}
                  >
                    {idea.status === 'selected' ? '🌟 Selected for Development' : '🚧 In Development'}
                  </span>
                </div>

                <motion.button
                  onClick={() => openJoinForm(idea._id)}
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Join Collaboration
                </motion.button>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="mb-2 font-bold text-white">📝 Project Description</h4>
                <p className="text-gray-300">{idea.description}</p>
              </div>

              {/* Resources Needed */}
              {idea.resourcesNeeded && (
                <div className="mb-6">
                  <h4 className="mb-2 font-bold text-white">🛠️ Skills & Resources Needed</h4>
                  <p className="text-gray-300">{idea.resourcesNeeded}</p>
                </div>
              )}

              {/* Tags */}
              {idea.tags && idea.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="mb-2 font-bold text-white">🏷️ Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Collaborators */}
              <div>
                <h4 className="mb-3 font-bold text-white">👥 Current Team ({idea.collaborators?.length || 0})</h4>
                {idea.collaborators && idea.collaborators.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {idea.collaborators.map((collaborator, collabIndex) => (
                      <div key={collabIndex} className="flex items-center rounded-lg bg-gray-700 p-3">
                        <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                          {collaborator.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{collaborator.name}</p>
                          <p className="text-xs text-gray-400">{collaborator.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-gray-400">
                    <div className="mb-2 text-4xl">👥</div>
                    <p>No collaborators yet. Be the first to join!</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <div className="mb-4 text-6xl">🚀</div>
          <h3 className="mb-2 text-xl font-semibold text-white">No Projects Available for Collaboration</h3>
          <p className="mb-6 text-gray-400">
            Ideas are selected for collaboration at the end of each month based on votes.
          </p>
          <div className="mx-auto max-w-2xl rounded-lg bg-gray-800 p-6">
            <h4 className="mb-3 font-bold text-white">How Collaboration Works:</h4>
            <div className="space-y-2 text-left text-gray-300">
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
        className="mt-12 rounded-xl bg-gray-800 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="mb-6 text-center text-2xl font-bold text-white">🎯 Available Collaboration Roles</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <div
              key={role.value}
              className="rounded-lg bg-gray-700 p-4 text-center transition-colors hover:bg-gray-600"
            >
              <div className="mb-2 text-2xl">{role.icon}</div>
              <h4 className="mb-1 text-sm font-bold text-white">{role.value}</h4>
              <p className="text-xs text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationHub;
