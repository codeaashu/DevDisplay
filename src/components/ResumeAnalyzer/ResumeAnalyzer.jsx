import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResumeAnalyzer = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 166, 251, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 166, 251, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
      }}
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-gray-600 p-3 transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00a6fb] focus:ring-opacity-50"
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5 text-gray-300" />
        <span className="hidden text-sm text-gray-300 sm:inline">Back</span>
      </button>

      <div className="mx-auto max-w-lg rounded-xl border border-[#00a6fb] bg-[rgba(15,27,53,0.85)] p-8 text-center shadow-2xl">
        <Construction size={72} className="mx-auto mb-6 text-[#00a6fb]" />
        <h1 className="mb-4 text-4xl font-bold text-[#00a6fb]">Resume Analyzer</h1>
        <p className="mb-2 text-xl text-gray-300">This feature is currently under construction.</p>
        <p className="text-md text-gray-400">
          We're working hard to bring you an amazing AI-powered resume analysis tool. Please check back soon!
        </p>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
