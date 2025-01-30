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

          <div className="mt-6 space-y-4 rounded-lg bg-black p-6 text-lg text-white">
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

        <section className="container mx-auto mt-12 p-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#00a6fb]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Proposed Implementation Ideas for GSoC Contributors
          </motion.h2>

          {/* Idea List - 1*/}
          <div className="mt-6 rounded-lg bg-[#e3f2fd] p-6 text-left text-gray-900 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">1. Opportunities Hub Feature</h3>
            <p className="mt-4 text-lg">
              Create a Centralized and Interactive feature on DevDisplay Platform for Tech Opportunities. Develop a
              comprehensive and user-friendly feature for developers, designers, and tech enthusiasts to explore diverse
              opportunities within the tech industry. This platform will serve as a one-stop hub for discovering:
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Dynamic Opportunity Categories – Effortlessly organize opportunities into clearly defined, interactive
              categories for easy navigation:
            </h4>

            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                <strong>Hybrid & Onsite Jobs:</strong> Allow users to filter roles by job type, location, experience
                level, and company, making it easy to find their ideal position.
              </li>
              <li>
                <strong>Remote Jobs:</strong> Showcase work-from-anywhere roles, emphasizing flexible and
                location-independent opportunities.
              </li>
              <li>
                <strong>Internships:</strong> Include paid and unpaid opportunities for students, fresh graduates, and
                early-career professionals.
              </li>
              <li>
                <strong>Freelance Work:</strong> Highlight project-specific and contract-based roles ideal for
                independent contributors.
              </li>
              <li>
                <strong>Hackathons:</strong> Provide detailed information on themes, deadlines, rewards, team
                requirements, and registration links.
              </li>
              <li>
                <strong>Open-Source Projects:</strong> Promote beginner-friendly and advanced projects seeking
                contributors, encouraging community collaboration.
              </li>
              <li>
                <strong>Tech Events & DevFests:</strong> Feature a curated list of webinars, conferences, summits, and
                local or global developer meetups.
              </li>
              <li>
                <strong>Bootcamps & Courses:</strong> Highlight immersive learning programs, both free and paid,
                tailored for skill-building and career growth.
              </li>
              <li>
                <strong>Certifications & Skill Development:</strong> Showcase courses and training that provide
                industry-recognized certifications to boost career prospects.
              </li>
              <hr className="border-black-300 mt-12 border-t-2" />
            </ul>

            {/* Idea List - 2*/}
            <h3 className="text-2xl font-bold text-gray-800">2. Idea Submission Features</h3>
            <p className="mt-4 text-lg">
              Add the Project Idea Submission and Voting System to DevDisplay can make it a hub for innovation and
              collaboration. This feature allows users to submit ideas, vote on their favorites, and actively
              participate in bringing top-voted ideas to life through collaborative development. Here's a detailed
              overview of the feature, enhanced with functionalities to ensure engagement and utility.
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Idea Submission Window - First Week of Every Month:
            </h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Allow users to submit their project ideas within the first week of every month.</li>
              <li>Display a countdown timer on the homepage indicating the time left to submit ideas.</li>
              <li>Ideas are displayed publicly for voting immediately after submission.</li>
            </ul>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">Voting Phase - Throughout the Month:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Users can like or upvote their favorite ideas to boost their ranking.</li>
              <li>A "Trending Now" Section highlights the top-voted ideas dynamically.</li>
            </ul>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">End-of-Month Selection - Final Week:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>At the end of the month, the top 1 most-voted idea is selected for community implementation.</li>
              <li>Recognize contributors with badges like "Innovator of the Month" for the selected idea.</li>
            </ul>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">Community Collaboration - Next Month:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                The selected idea is moved to a “Project Development Hub” where the community collaborates to implement
                it.
              </li>
              <li>Users can join specific tasks like design, development, testing, or documentation.</li>
              <hr className="border-black-300 mt-12 border-t-2" />+
            </ul>

            {/* Idea List - 3*/}
            <h3 className="text-2xl font-bold text-gray-800">3. Tech Resources Features</h3>
            <p className="mt-4 text-lg">
              Add a feature where all the tech resources are available like a hub of resources. Where users can share
              and discover useful resources like articles, tutorials, documentation, tools, or libraries related to
              development. How it works: Users can submit a resource with a title, description, link, and tags (e.g.,
              "React," "JavaScript," "CSS"). Resources are displayed in a feed with upvoting/downvoting functionality.
              Users can filter resources by tags or search for specific topics. The most upvoted resources appear at the
              top of the feed.
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">Purpose of this feature:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Enable developers to add their projects to the showcase via open-source contributions.</li>
              <li>Projects submitted by contributors will be listed on the ProjectShowcase page after review.</li>
              <li>Each showcased project will feature a voting and liking mechanism to drive engagement.</li>
              <li>Users can upvote or like projects they find impressive, helping boost visibility and credibility.</li>
              <li>
                A Trending Projects section will dynamically highlight the most popular and top-voted contributions.
              </li>
              <li>The system will dynamically highlight the most popular and trending projects in the community.</li>
              <li>This feature will foster engagement and increase visibility for standout projects.</li>
              <li>
                The platform can feature "Project of the Month" badges for standout submissions, encouraging
                participation.
              </li>
              <hr className="border-black-300 mt-12 border-t-2" />
            </ul>

            {/* Idea List - 4*/}
            <h3 className="text-2xl font-bold text-gray-800">4. Project Showcase Features</h3>
            <p className="mt-4 text-lg">
              Add a feature where developers can showcase their projects. Developers first add their projects through
              open-source contributions, and then the projects are showcased here. Also, add an Interactive Voting and
              Liking System: Each showcased project will have a voting or liking mechanism. Users can cast votes or like
              projects they find impressive, helping highlight the most popular and trending projects within the
              community. This feature will foster engagement and provide visibility to standout projects.
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Add a feature on this Page where all the tech resources are available like:
            </h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Tech-Related Notes</li>
              <li>Programming Language Courses</li>
              <li>Top GitHub Repositories</li>
              <li>AI Tools Directory</li>
              <li>Affordable Learning</li>
              <li>Open Source Libraries and Frameworks</li>
              <li>Bootcamp Listings</li>
              <li>Roadmaps and Guides</li>
              <li>Interview Preparation Kits, e.t.c..</li>
              <hr className="border-black-300 mt-12 border-t-2" />
            </ul>
          </div>
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
