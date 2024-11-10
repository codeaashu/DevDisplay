import React from 'react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';

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
      <div className="relative -top-20 left-20 flex h-[400px] w-full max-w-[600px] items-center justify-center md:h-[500px] lg:h-[600px]">
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
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <a
          href="/opportunities"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Opportunities</h3>
            <p>Explore various career and learning opportunities in the tech industry.</p>
          </div>
        </a>

        <a
          href="/resources"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Resources</h3>
            <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
          </div>
        </a>

        <a
          href="/project-showcase"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Project Showcase</h3>
            <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
          </div>
        </a>

        <a
          href="/tech-discussion"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Tech Discussion</h3>
            <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
          </div>
        </a>

        <a
          href="/ideas-submission"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Ideas Submission</h3>
            <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
          </div>
        </a>

        <a
          href="/portfolio-ideas"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Portfolio Ideas</h3>
            <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
          </div>
        </a>

        <a
          href="/portfolio-building"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Portfolio Building</h3>
            <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
          </div>
        </a>

        <a
          href="/resume-building"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="border border-transparent transition duration-300 hover:border-blue-500">
            <h3 className="mb-4 text-2xl font-semibold">Resume Building</h3>
            <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
          </div>
        </a>
      </div>

      <a
        href="/add-features"
        className="feature-card mt-6 block rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
      >
        <div className="border border-transparent transition duration-300 hover:border-blue-500">
          <h3 className="mb-4 text-2xl font-semibold">Want to Add Features?</h3>
          <p>Suggest new features you'd love to see and help shape the tech community.</p>
        </div>
      </a>
    </section>
  );
};

const Home = () => {
  return (
    <div className="background-wrapper bg-gray-400">
      <Navbar />
      <Hero />
      <TechFeatures />
    </div>
  );
};

export default Home;
