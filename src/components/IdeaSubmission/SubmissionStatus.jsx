import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SubmissionStatus = ({ status }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    if (status?.isSubmissionOpen && status?.submissionEndsAt) {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const endTime = new Date(status.submissionEndsAt).getTime();
        const difference = endTime - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        } else {
          setTimeLeft('Submission period ended');
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [status]);

  if (!status) return null;

  return (
    <motion.div
      className={`mx-auto max-w-4xl rounded-xl p-6 shadow-lg ${
        status.isSubmissionOpen
          ? 'bg-gradient-to-r from-green-600 to-green-500'
          : 'bg-gradient-to-r from-red-600 to-red-500'
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white">
        {status.isSubmissionOpen ? (
          <>
            <div className="mb-4 flex items-center justify-center">
              <span className="mr-2 text-3xl">🟢</span>
              <h3 className="text-2xl font-bold">Submissions Are Open!</h3>
            </div>
            <p className="mb-4 text-lg">Submit your innovative ideas for {status.submissionPeriod}</p>
            {timeLeft && (
              <div className="mb-4 rounded-lg bg-white bg-opacity-20 p-4">
                <p className="mb-2 text-sm opacity-90">Submission deadline:</p>
                <div className="font-mono text-2xl font-bold">⏰ {timeLeft}</div>
              </div>
            )}
            <p className="text-sm opacity-90">
              {status.daysLeftForSubmission} day{status.daysLeftForSubmission !== 1 ? 's' : ''} left to submit
            </p>
          </>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-center">
              <span className="mr-2 text-3xl">🔴</span>
              <h3 className="text-2xl font-bold">Submissions Are Closed</h3>
            </div>
            <p className="mb-4 text-lg">Idea submissions for {status.submissionPeriod} are currently closed</p>
            <div className="rounded-lg bg-white bg-opacity-20 p-4">
              <p className="mb-2 text-sm opacity-90">Next submission period:</p>
              <div className="text-xl font-bold">📅 First week of next month</div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default SubmissionStatus;
