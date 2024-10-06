// src/page/TechResources.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ProgrammingCourses from './ProgrammingCourses'; // Import the Programming Courses component
import TopGithubRepos from './TopGithubRepos';         // Import the Top GitHub Repos component
import AITools from './AITools';                       // Import the AI Tools component
import DeveloperCommunities from './DeveloperCommunities'; // Import the Developer Communities component
import Footer from './Footer';                         // Import the Footer component

const TechResources = () => {
  useEffect(() => {
    gsap.to(".hero-bg", {
      duration: 5,
      backgroundPosition: "200% 200%",
      ease: "power1.inOut",
      repeat: -1
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#141d2f] text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center">
        <div className="absolute inset-0 hero-bg bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <h1 className="text-5xl font-bold relative z-10">Tech Resources</h1>
        <p className="text-2xl mt-4 relative z-10">Your One-Stop Hub for Developer Resources</p>
        <p className="text-lg mt-2 relative z-10 max-w-lg">
          Whether you're a beginner or a pro, access curated resources for every tech skill — from programming courses to AI tools, top GitHub repos, and top projects.
        </p>
      </section>

      {/* Resource Sections */}
      <div className="p-8">
        <ProgrammingCourses />       {/* Programming language courses section */}
        <TopGithubRepos />           {/* Top GitHub repositories section */}
        <AITools />                  {/* AI tools section */}
        <DeveloperCommunities />     {/* Developer Communities section (optional, if created) */}
      </div>

      {/* Footer Section */}
      <Footer />                     {/* Footer component */}
    </div>
  );
};

export default TechResources;

