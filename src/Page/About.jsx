import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function About() {
  const navigateToGitHub = () => {
    window.location.href = 'https://github.com/codeaashu/DevDisplay';
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#0d1b2a] text-white">
        <header
          className="relative h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'linear-gradient(135deg, #1e2a42, #141d2f)',
              backgroundSize: '400% 400%',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold text-[#00a6fb]">About Us</h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">
              DevDisplay is a global open-source tech community and organization with a mission to unite all your tech
              needs under one platform.
            </p>
          </motion.div>
        </header>

        <section className="container mx-auto mt-12 p-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#00a6fb]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            DevDisplay is a platform where developers of all levels collaborate on open-source projects, exchange ideas,
            and grow together. Our inclusive environment promotes innovation, creativity, and shared learning.
          </p>
        </section>

        <section className="container mx-auto grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Our Mission</h3>
            <p className="text-gray-300">
              We aim to connect developers globally, enabling them to collaborate on impactful projects, share
              knowledge, and solve real-world problems together.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Our Vision</h3>
            <p className="text-gray-300">
              We envision a world where developers thrive through collaboration, driving innovation, diversity, and
              inclusivity in the tech industry.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Core Principles</h3>
            <ul className="list-inside list-disc space-y-2 text-left text-gray-300">
              <li>Collaboration Over Competition</li>
              <li>Open Source Contribution</li>
              <li>Diversity & Inclusion</li>
              <li>Innovation & Creativity</li>
              <li>Knowledge Sharing</li>
            </ul>
          </motion.div>
        </section>

        <section className="bg-gradient-to-r from-[#2e3b4e] via-[#1e2a42] to-[#141d2f] py-16 text-center">
          <h2 className="text-4xl font-bold text-[#00a6fb]">Join Our Community</h2>
          <p className="mt-4 text-lg text-gray-300">
            Ready to collaborate, innovate, and grow? Become a part of the DevDisplay community today.
          </p>
          <button
            onClick={navigateToGitHub}
            className="mt-8 rounded-lg bg-[#00a6fb] px-6 py-3 text-lg font-bold text-white hover:bg-[#008dc9]"
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
