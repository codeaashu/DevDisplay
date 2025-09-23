import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IdeaSubmissionForm = ({ onIdeaSubmitted }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    submittedBy: '',
    submitterEmail: '',
    tags: '',
    resourcesNeeded: '',
    mediaUrls: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Convert tags and media URLs from strings to arrays
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const mediaUrlsArray = formData.mediaUrls
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0);

      const submitData = {
        ...formData,
        tags: tagsArray,
        mediaUrls: mediaUrlsArray
      };

      const response = await fetch('/devdisplay/v1/ideas/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('🎉 Idea submitted successfully! Thank you for your contribution.');
        setFormData({
          title: '',
          description: '',
          submittedBy: '',
          submitterEmail: '',
          tags: '',
          resourcesNeeded: '',
          mediaUrls: ''
        });
        if (onIdeaSubmitted) {
          onIdeaSubmitted();
        }
      } else {
        setSubmitMessage(`❌ ${data.message || 'Failed to submit idea. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting idea:', error);
      setSubmitMessage('❌ An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            🚀 Submit Your Innovative Idea
          </h2>
          <p className="text-gray-300">
            Share your creative project ideas with the community. One idea per month per user.
          </p>
        </div>

        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mb-6 p-4 rounded-lg text-center font-medium ${
              submitMessage.includes('successfully')
                ? 'bg-green-600 text-white'
                : 'bg-red-600 text-white'
            }`}
          >
            {submitMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-white font-medium mb-2">
              💡 Project Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              maxLength={100}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter a catchy title for your idea..."
            />
            <p className="text-gray-400 text-sm mt-1">
              {formData.title.length}/100 characters
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-medium mb-2">
              📝 Description <span className="text-red-400">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              maxLength={1000}
              rows={6}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Describe your idea in detail. What problem does it solve? How would it work? What makes it innovative?"
            />
            <p className="text-gray-400 text-sm mt-1">
              {formData.description.length}/1000 characters
            </p>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">
                👤 Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="submittedBy"
                value={formData.submittedBy}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                📧 Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="submitterEmail"
                value={formData.submitterEmail}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-white font-medium mb-2">
              🏷️ Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="AI, Frontend, Backend, Mobile, OpenSource (separate with commas)"
            />
            <p className="text-gray-400 text-sm mt-1">
              Add relevant tags to help categorize your idea
            </p>
          </div>

          {/* Resources Needed */}
          <div>
            <label className="block text-white font-medium mb-2">
              🛠️ Resources/Skills Needed
            </label>
            <textarea
              name="resourcesNeeded"
              value={formData.resourcesNeeded}
              onChange={handleInputChange}
              maxLength={500}
              rows={3}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="What skills, tools, or resources would be needed to implement this idea?"
            />
            <p className="text-gray-400 text-sm mt-1">
              {formData.resourcesNeeded.length}/500 characters
            </p>
          </div>

          {/* Media URLs */}
          <div>
            <label className="block text-white font-medium mb-2">
              🖼️ Media URLs (Optional)
            </label>
            <input
              type="text"
              name="mediaUrls"
              value={formData.mediaUrls}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/mockup.png, https://example.com/diagram.jpg (separate with commas)"
            />
            <p className="text-gray-400 text-sm mt-1">
              Add links to mockups, diagrams, or concept images
            </p>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
            } text-white shadow-lg`}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              '🚀 Submit My Idea'
            )}
          </motion.button>
        </form>

        {/* Guidelines */}
        <div className="mt-8 p-6 bg-gray-700 rounded-lg">
          <h3 className="text-white font-bold mb-3">📋 Submission Guidelines</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• One idea submission per user per month</li>
            <li>• Submissions are only open during the first week of each month</li>
            <li>• Ideas become public immediately and are open for community voting</li>
            <li>• The top-voted idea each month is selected for collaborative development</li>
            <li>• Be respectful and constructive in your ideas</li>
            <li>• Ensure your idea is original and feasible</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default IdeaSubmissionForm;