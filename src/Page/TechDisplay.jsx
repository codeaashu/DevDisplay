import React from 'react';
import { Home, Briefcase, BookOpen, Code, Lightbulb, MessageCircle, User, FileText } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-800 p-4 text-white">
      <div className="items-left flex flex-col">
        <img src="./devDisplayLOGO.png" alt="DevDisplay" className="mb-4 h-16 w-16" />
        <nav className="flex flex-col gap-4">
          <a href="/Home" className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            Home
          </a>
          <a href="/Opportunities" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Opportunities
          </a>
          <a href="/Resources" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Tech Resources
          </a>
          <a href="/Projects" className="flex items-center gap-2">
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
    </div>
  );
};

export default Sidebar;
