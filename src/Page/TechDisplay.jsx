import React from 'react';
import { Home, Briefcase, BookOpen, Code, Lightbulb, MessageCircle, User, FileText } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-800 p-4 text-white">
      <div className="flex flex-col items-center">
        <img src="/path/to/logo.png" alt="TechDisplay Logo" className="mb-4 h-16 w-16" />
        <nav className="flex flex-col gap-4">
          <a href="/" className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            Home
          </a>
          <a href="/opportunities" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Opportunities
          </a>
          <a href="/Resources" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Tech Resources
          </a>
          <a href="/projects" className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            Projects
          </a>
          <a href="/IdeaSubmission" className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Idea Submission
          </a>
          <a href="/Discussions" className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6" />
            Discussions
          </a>
          <a href="/PortfolioBuilder" className="flex items-center gap-2">
            <User className="h-6 w-6" />
            Portfolio Builder
          </a>
          <a href="/ResumeBuilder" className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Resume Builder
          </a>
        </nav>
      </div>
      <div className="mt-auto flex flex-col items-center">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="mb-2 h-12 w-12 rounded-full" />
        <p className="text-sm">John Doe</p>
        <p className="text-xs text-gray-400">Followers: 123</p>
        <button className="mt-2 rounded-lg bg-blue-500 px-4 py-2">Add New</button>
      </div>
    </div>
  );
};

export default Sidebar;
