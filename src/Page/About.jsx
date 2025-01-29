import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer/Footer';

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
            <div className="mx-auto max-w-4xl">
              <h1 className="text-6xl font-bold">DevDisplay</h1>
              <p className="mt-4 text-xl">Connect ▸ Collab ▸ Code ▸ Create ▸ Conquer</p>
              <p className="mt-6 text-lg">
                DevDisplay is a global open-source tech community and organization that brings together all your tech
                needs in one place.
              </p>
            </div>
          </motion.div>
        </header>

        <section className="container mx-auto mt-12 p-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#00a6fb]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We're on a mission to unite all your tech needs under one platform and establish DevDisplay as the Tech
            Enthusiast and Developer's First Platform. DevDisplay serves as the ultimate hub for developers to Connect ▸
            Collab ▸ Code ▸ Create ▸ Conquer in the tech ecosystem.
          </motion.h2>

          <div className="bg-gradient-to-r from-[#2e3b4e] via-[#1e2a42] to-[#141d2f] py-16 text-center">
            <p>One platform to discover extraordinary tech talent.</p>
            <p>One platform to connect with like-minded tech enthusiasts.</p>
            <p>One platform to collaborate on innovative, groundbreaking ideas.</p>
            <p>One platform to build next-gen projects with a community of innovators.</p>
            <p>One platform to spark inspiration and unleash creativity.</p>
            <p>One platform to access curated tech resources in a single space.</p>
            <p>One platform to explore the latest opportunities in the tech world.</p>
            <p>One platform to bring your ideas to life and turn concepts into reality.</p>
            <p>One platform to showcase your projects to a global audience.</p>
            <p>One platform to highlight your skills and expertise like never before.</p>
            <p>One platform to promote your work and gain unparalleled visibility.</p>
            <p>One platform to learn, grow, and thrive alongside a vibrant community.</p>
            <p>One platform to earn rewards and monetize your tech skills.</p>
            <p>One platform to enjoy exclusive benefits as a valued tech enthusiast.</p>
          </div>

          <hr className="mt-12 border-t-2 border-gray-300" />
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
      <Footer />
    </div>
  );
}
