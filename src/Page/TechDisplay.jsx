import React from 'react';
import { Home, Briefcase, BookOpen, Code, Lightbulb, MessageCircle, User, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';

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

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex min-h-screen flex-col items-center justify-center text-white ">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md mx-auto mb-10 w-fit rounded-full bg-[#ffffff36] p-2 text-center">
          We're Open Source {'>'} Star Now🌟
        </p>
        <h1 className="my-4 text-4xl font-bold tracking-widest md:text-4xl">One Place for all your Tech Needs</h1>
        <h2 className="my-4 text-6xl font-bold">
          Dev <span className="text-[#00a6fb]">Display</span>
        </h2>
        <p className="text-md md:text-md mx-auto my-8 max-w-2xl">Global platform that fulfills all your tech needs</p>
      </div>
      <div className="relative flex h-fit w-full max-w-[600px] items-center justify-center overflow-visible md:-top-20 md:left-20 md:h-[500px] lg:h-[600px]">
        <Globe />
      </div>
    </section>
  );
};

const TechFeatures = () => {
  return (
    <section className="tech-features-section max-w-[80%] px-4 py-16 text-white">
      <div className="mx-auto my-12 max-w-[80%] text-center">
        <h2 className="my-6 text-4xl font-bold text-[#00a6fb]">All Tech Features in One Place</h2>
        <p className="mx-auto my-12 mb-8 max-w-3xl text-xl">
          Discover a range of tools, resources, and opportunities to enhance your tech journey and skills.
        </p>
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2  lg:grid-cols-4">
        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Opportunities</h3>
          <p>Explore various career and learning opportunities in the tech industry.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Resources</h3>
          <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Project Showcase</h3>
          <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Tech Discussion</h3>
          <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Ideas Submission</h3>
          <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Portfolio Ideas</h3>
          <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Portfolio Building</h3>
          <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
        </div>

        <div className="feature-card rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700">
          <h3 className="mb-4 text-2xl font-semibold">Resume Building</h3>
          <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
        </div>
      </div>
      <div className="feature-card mt-6 rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:bg-gray-700">
        <h3 className="mb-4 text-2xl font-semibold">Want to Add Features?</h3>
        <p>Suggest new features you'd love to see and help shape the tech community.</p>
      </div>
    </section>
  );
};

const TechDisplay = () => {
  return (
    <div className="background-wrapper bg-gray-400">
      <Navbar />
      <Hero />
      <TechFeatures />
    </div>
  );
};

export default TechDisplay;
