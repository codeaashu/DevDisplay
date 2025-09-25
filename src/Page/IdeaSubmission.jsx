import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IdeaSubmissionForm from '../components/IdeaSubmission/IdeaSubmissionForm';
import IdeaCard from '../components/IdeaSubmission/IdeaCard';
import TrendingIdeas from '../components/IdeaSubmission/TrendingIdeas';
import SubmissionStatus from '../components/IdeaSubmission/SubmissionStatus';
import CollaborationHub from '../components/IdeaSubmission/CollaborationHub';

const IdeaSubmissionPage = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [ideas, setIdeas] = useState([]);
  const [trendingIdeas, setTrendingIdeas] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const tabs = [
    { id: 'submit', label: '💡 Submit Idea', icon: '🚀' },
    { id: 'browse', label: '📋 Browse Ideas', icon: '👀' },
    { id: 'trending', label: '🔥 Trending', icon: '📈' },
    { id: 'collaborate', label: '🤝 Collaborate', icon: '⚡' }
  ];

  useEffect(() => {
    fetchSubmissionStatus();
    fetchTrendingIdeas();
    if (activeTab === 'browse') {
      fetchCurrentMonthIdeas();
    }
  }, [activeTab, currentPage]);

  const fetchSubmissionStatus = async () => {
    try {
      const response = await fetch('/devdisplay/v1/ideas/status');
      const data = await response.json();
      if (data.success) {
        setSubmissionStatus(data.data);
      }
    } catch (error) {
      console.error('Error fetching submission status:', error);
    }
  };

  const fetchTrendingIdeas = async () => {
    try {
      const response = await fetch('/devdisplay/v1/ideas/trending?limit=5');
      const data = await response.json();
      if (data.success) {
        setTrendingIdeas(data.data);
      }
    } catch (error) {
      console.error('Error fetching trending ideas:', error);
    }
  };

  const fetchCurrentMonthIdeas = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/devdisplay/v1/ideas/current?page=${currentPage}&limit=10`);
      const data = await response.json();
      if (data.success) {
        setIdeas(data.data.ideas);
        setTotalPages(data.data.totalPages);
      }
    } catch (error) {
      console.error('Error fetching ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleIdeaSubmitted = () => {
    fetchSubmissionStatus();
    fetchTrendingIdeas();
    if (activeTab === 'browse') {
      fetchCurrentMonthIdeas();
    }
  };

  const handleVoteUpdate = (ideaId, newVoteCount) => {
    setIdeas(prevIdeas =>
      prevIdeas.map(idea =>
        idea._id === ideaId ? { ...idea, votes: newVoteCount } : idea
      )
    );
    fetchTrendingIdeas(); // Update trending as well
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            💡 Idea Submission Hub
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Submit your innovative project ideas, vote for favorites, and collaborate with the community 
            to bring top-voted ideas to life!
          </motion.p>
          
          {/* Submission Status Banner */}
          {submissionStatus && (
            <SubmissionStatus status={submissionStatus} />
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium rounded-t-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {activeTab === 'submit' && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IdeaSubmissionForm onIdeaSubmitted={handleIdeaSubmitted} />
          </motion.div>
        )}

        {activeTab === 'browse' && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                📋 Browse Current Month Ideas
              </h2>
              {submissionStatus && (
                <p className="text-gray-300 mb-6">
                  Submission Period: {submissionStatus.submissionPeriod}
                </p>
              )}
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-6 animate-pulse">
                    <div className="h-6 bg-gray-700 rounded mb-4"></div>
                    <div className="h-20 bg-gray-700 rounded mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            ) : ideas.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {ideas.map((idea) => (
                    <IdeaCard 
                      key={idea._id} 
                      idea={idea} 
                      onVoteUpdate={handleVoteUpdate}
                    />
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-600"
                    >
                      Previous
                    </button>
                    <span className="px-4 py-2 text-white">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-600"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-white mb-2">No Ideas Yet</h3>
                <p className="text-gray-400">
                  Be the first to submit an innovative idea this month!
                </p>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'trending' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TrendingIdeas ideas={trendingIdeas} onVoteUpdate={handleVoteUpdate} />
          </motion.div>
        )}

        {activeTab === 'collaborate' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CollaborationHub />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IdeaSubmissionPage;
