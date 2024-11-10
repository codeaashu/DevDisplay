import React from 'react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import { Star } from '@mui/icons-material';
import { ChevronRight } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex min-h-screen flex-col items-center justify-center text-white ">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <a href="https://github.com/digitomize/digitomize" target="_blank" rel="noopener noreferrer">
          <div className="z-10 flex min-h-[2rem] items-center justify-center">
            <span className="animate-gradient inline flex items-center justify-center bg-gradient-to-r from-[#f0f8ff] via-[#f0f8ff] to-[#f0f8ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              We're Open Source
              <hr className="mx-2 h-4 w-[0.5px] bg-[#f0f8ff]" />
              Star Now!
            </span>
            &nbsp;
            <Star fontSize="small" sx={{ color: 'gold' }} />
            <ChevronRight
              className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
              style={{ color: '#f0f8ff' }}
            />
          </div>
        </a>
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
        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/opportunities')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Opportunities</h3>
          <p>Explore various career and learning opportunities in the tech industry.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/resources')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Resources</h3>
          <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/project-showcase')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Project Showcase</h3>
          <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/tech-discussion')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Tech Discussion</h3>
          <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/ideas-submission')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Ideas Submission</h3>
          <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/portfolio-ideas')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Portfolio Ideas</h3>
          <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/portfolio-building')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Portfolio Building</h3>
          <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => (window.location.href = '/resume-building')}
        >
          <h3 className="mb-4 text-2xl font-semibold">Resume Building</h3>
          <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-transparent"
            initial={{ borderColor: 'transparent' }}
            whileHover={{ borderColor: '#00a6fb' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      <motion.div
        className="feature-card relative mt-6 cursor-pointer rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:bg-gray-700"
        whileHover={{ scale: 1.05 }}
        onClick={() => (window.location.href = '/add-features')}
      >
        <h3 className="mb-4 text-2xl font-semibold">Want to Add Features?</h3>
        <p>Suggest new features you'd love to see and help shape the tech community.</p>
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-transparent"
          initial={{ borderColor: 'transparent' }}
          whileHover={{ borderColor: '#00a6fb' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
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
