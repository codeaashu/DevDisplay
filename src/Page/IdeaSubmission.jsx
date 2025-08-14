import React from 'react';
import { motion } from 'framer-motion';
import IdeaSubmissionForm from '../components/IdeaSubmissionForm.jsx';

export default function IdeaSubmission() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-10 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800"
      >
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">💡 Submit Your Idea</h1>
        <p className="mb-8 text-center text-gray-700 dark:text-gray-300">
          Pitch your most innovative project ideas to the DevDisplay community. The top-voted ideas will come to life!
        </p>
        <IdeaSubmissionForm />
      </motion.div>
    </div>
  );
}
