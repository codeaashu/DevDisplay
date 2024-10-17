import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-[#141d2f] text-center text-white">
      <header className="bg-hero-pattern relative h-[50vh] bg-cover bg-center">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, #ff00cc, #00a6fb, #ff00cc)',
            backgroundSize: '400% 400%',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center p-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl font-extrabold text-[#00a6fb]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            About Us
          </motion.h1>
          <p className="mt-4 max-w-3xl text-lg text-white">
            DevDisplay is an innovative Open Source Community designed to empower developers from all over the world.
            Our platform serves as a hub where you can discover and connect with skilled developers across various
            fields, from coding and design to project management and more. Whether you're a seasoned expert or a
            newcomer to the tech industry, DevDisplay provides an inclusive environment that fosters collaboration,
            learning, and growth. Discover, Connect, and Collaborate with Developers across the Globe.
          </p>
        </motion.div>
      </header>

      <section className="container mx-auto mt-8 rounded-lg bg-gradient-to-r from-[#2e3b4e] via-[#1e2a42] to-[#141d2f] p-8 shadow-md">
        <div className="flex flex-col items-center">
          <motion.h2
            className="mb-4 text-3xl font-bold text-[#00a6fb]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Who We Are
            <span className="ml-2 transform cursor-pointer text-4xl transition-transform hover:scale-125">👀</span>
          </motion.h2>
          <p className="max-w-3xl text-lg text-gray-300">
            DevDisplay is an Open Source Community where you can discover and connect with skilled developers, share
            your ideas, and build projects with collaborative support. Whether you're looking to contribute to open
            source projects or promote your own, DevDisplay provides the perfect platform for growth, collaboration, and
            success.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Our Mission</h3>
          <p>
            At DevDisplay, our mission is to foster a collaborative environment where developers can come together,
            share their ideas, and work on projects that solve real-world problems. We aim to bridge the gap between
            talent and opportunity, empowering developers to showcase their skills.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Our Vision</h3>
          <p>
            We envision a global developer community where collaboration drives innovation. By providing resources,
            connections, and project exposure, we help developers from all walks of life grow, learn, and succeed in the
            tech industry.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Core Principles</h3>
          <ul className="list-inside list-disc space-y-2 text-left">
            <li>Collaboration Over Competition</li>
            <li>Open Source Contribution</li>
            <li>Diversity & Inclusion</li>
            <li>Innovation & Creativity</li>
            <li>Knowledge Sharing</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
