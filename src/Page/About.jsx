'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer/Footer';
import LOGO from './WordMark.png';
import {
  ChevronRight,
  Github,
  Users,
  Code,
  Lightbulb,
  Briefcase,
  FileCode,
  FileText,
  MessageSquare,
  BrainCircuit,
  Terminal,
  Award,
  BookOpen,
} from 'lucide-react';

export default function About() {
  const navigateToGitHub = () => {
    window.location.href = 'https://github.com/codeaashu/DevDisplay';
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1b2a] to-[#121e2d] text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(30, 42, 66, 0.8), rgba(20, 29, 47, 0.8)), url(/images/hero-bg.jpg)',
            backgroundSize: '200% 200%',
            backgroundPosition: 'center',
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#00a6fb]"
              style={{
                width: Math.random() * 8 + 2 + 'px',
                height: Math.random() * 8 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block rounded-full bg-gradient-to-r from-[#00a6fb] to-[#0582ca] px-6 py-2 text-sm font-medium tracking-wider"
            >
              GLOBAL TECH COMMUNITY
            </motion.div>

            {/* Hero Logo */}
            <div className="flex justify-center">
              <img src={LOGO} alt="Dev Display" className="my-4 h-auto w-[600px] text-5xl font-bold" />
            </div>

            {/* Hero Subtitle */}
            <motion.h3
              className="custom-font my-4 text-2xl tracking-widest text-gray-300 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              One Platform for Global Developers to Fulfill All The Tech Needs!
            </motion.h3>

            <motion.div
              className="mt-6 flex items-center justify-center space-x-2 text-xl font-medium text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-[#00a6fb]">Connect</span>
              <ChevronRight className="h-5 w-5 text-[#00a6fb]" />
              <span className="text-[#00a6fb]">Collab</span>
              <ChevronRight className="h-5 w-5 text-[#00a6fb]" />
              <span className="text-[#00a6fb]">Code</span>
              <ChevronRight className="h-5 w-5 text-[#00a6fb]" />
              <span className="text-[#00a6fb]">Create</span>
              <ChevronRight className="h-5 w-5 text-[#00a6fb]" />
              <span className="text-[#00a6fb]">Conquer</span>
            </motion.div>

            <motion.p
              className="mt-6 text-lg text-blue-100 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              DevDisplay is a global open-source tech community and organization that brings together all your tech
              needs in one place.
            </motion.p>

            <motion.div className="flex items-center justify-center"></motion.div>
          </div>
        </motion.div>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-b from-[#1e2a42]/80 to-[#141d2f]/80 p-8 shadow-xl backdrop-blur-sm md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 flex items-center justify-center">
            <div className="h-1 w-16 rounded bg-gradient-to-r from-[#00a6fb] to-transparent"></div>
            <h2 className="mx-4 text-center text-2xl font-bold text-[#00a6fb]">Our Mission</h2>
            <div className="h-1 w-16 rounded bg-gradient-to-l from-[#00a6fb] to-transparent"></div>
          </div>

          <p className="text-center text-lg leading-relaxed text-blue-100">
            We're on a mission to unite all your tech needs under one platform and establish DevDisplay as the Tech
            Enthusiast and Developer's First Platform. DevDisplay serves as the ultimate hub for developers to Connect ▸
            Collab ▸ Code ▸ Create ▸ Conquer in the tech ecosystem.
          </p>

          <motion.div
            className="mt-10 grid gap-4 rounded-xl bg-gradient-to-br from-[#e3f2fd]/10 to-[#e3f2fd]/5 p-6 text-blue-50 backdrop-blur-sm md:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              'One platform to discover extraordinary tech talent.',
              'One platform to connect with like-minded tech enthusiasts.',
              'One platform to collaborate on innovative, groundbreaking ideas.',
              'One platform to build next-gen projects with a community of innovators.',
              'One platform to spark inspiration and unleash creativity.',
              'One platform to access curated tech resources in a single space.',
              'One platform to explore the latest opportunities in the tech world.',
              'One platform to bring your ideas to life and turn concepts into reality.',
              'One platform to showcase your projects to a global audience.',
              'One platform to highlight your skills and expertise like never before.',
              'One platform to promote your work and gain unparalleled visibility.',
              'One platform to learn, grow, and thrive alongside a vibrant community.',
              'One platform to earn rewards and monetize your tech skills.',
              'One platform to enjoy exclusive benefits as a valued tech enthusiast.',
            ].map((text, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 rounded-lg p-3 transition-all hover:bg-white/5"
                variants={fadeIn}
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                  <ChevronRight className="h-4 w-4" />
                </div>
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* GSoC Implementation Ideas Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Gsoc Logo */}
          <div className="mb-4 mt-4 flex justify-center">
            <img src="/gsoc-logo.png" alt="Google Summer of Code" className="h-12 w-auto" />
          </div>

          <div className="mb-4 inline-block rounded-full bg-[#00a6fb]/20 px-4 py-1 text-sm font-medium text-[#00a6fb]">
            Google Summer of Code
          </div>
          <h2 className="mt-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Proposed Implementation Ideas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Join us in building the future of tech collaboration through these innovative features
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {/* Feature 1: Opportunities Hub */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Users className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">1. Opportunities Hub Feature</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Create a Centralized and Interactive feature on DevDisplay Platform for Tech Opportunities. Develop
                    a comprehensive and user-friendly feature for developers, designers, and tech enthusiasts to explore
                    diverse opportunities within the tech industry. This platform will serve as a one-stop hub for
                    discovering:
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-4 text-xl font-semibold text-[#00a6fb]">
                      Dynamic Opportunity Categories - Effortlessly organize opportunities into clearly defined,
                      interactive categories for easy navigation:
                    </h4>
                    <ul className="space-y-3 text-blue-100">
                      {[
                        '<strong>Hybrid & Onsite Jobs:</strong> Allow users to filter roles by job type, location, experience level, and company, making it easy to find their ideal position.',
                        '<strong>Remote Jobs:</strong> Showcase work-from-anywhere roles, emphasizing flexible and location-independent opportunities.',
                        '<strong>Internships:</strong> Include paid and unpaid opportunities for students, fresh graduates, and early-career professionals.',
                        '<strong>Freelance Work:</strong> Highlight project-specific and contract-based roles ideal for independent contributors.',
                        '<strong>Hackathons:</strong> Provide detailed information on themes, deadlines, rewards, team requirements, and registration links.',
                        '<strong>Open-Source Projects:</strong> Promote beginner-friendly and advanced projects seeking contributors, encouraging community collaboration.',
                        '<strong>Tech Events & DevFests:</strong> Feature a curated list of webinars, conferences, summits, and local or global developer meetups.',
                        '<strong>Bootcamps & Courses:</strong> Highlight immersive learning programs, both free and paid, tailored for skill-building and career growth.',
                        '<strong>Certifications & Skill Development:</strong> Showcase courses and training that provide industry-recognized certifications to boost career prospects.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Idea Submission */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Lightbulb className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">2. Idea Submission Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the Project Idea Submission and Voting System to DevDisplay can make it a hub for innovation and
                    collaboration. This feature allows users to submit ideas, vote on their favorites, and actively
                    participate in bringing top-voted ideas to life through collaborative development. Here's a detailed
                    overview of the feature, enhanced with functionalities to ensure engagement and utility.
                  </p>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-[#00a6fb]">
                        Idea Submission Window - First Week of Every Month:
                      </h4>
                      <ul className="space-y-2 text-blue-100">
                        {[
                          'Allow users to submit their project ideas within the first week of every month.',
                          'Display a countdown timer on the homepage indicating the time left to submit ideas.',
                          'Ideas are displayed publicly for voting immediately after submission.',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-[#00a6fb]">
                        Voting Phase - Throughout the Month:
                      </h4>
                      <ul className="space-y-2 text-blue-100">
                        {[
                          'Users can like or upvote their favorite ideas to boost their ranking.',
                          'A "Trending Now" Section highlights the top-voted ideas dynamically.',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-[#00a6fb]">
                        End-of-Month Selection - Final Week:
                      </h4>
                      <ul className="space-y-2 text-blue-100">
                        {[
                          'At the end of the month, the top 1 most-voted idea is selected for community implementation.',
                          'Recognize contributors with badges like "Innovator of the Month" for the selected idea.',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-[#00a6fb]">
                        Community Collaboration - Next Month:
                      </h4>
                      <ul className="space-y-2 text-blue-100">
                        {[
                          'The selected idea is moved to a "Project Development Hub" where the community collaborates to implement it.',
                          'Users can join specific tasks like design, development, testing, or documentation.',
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                              <ChevronRight className="h-3 w-3" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Tech Resources */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <BookOpen className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">3. Tech Resources Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add a feature where all the tech resources are available like a hub of resources. Where users can
                    share and discover useful resources like articles, tutorials, documentation, tools, or libraries
                    related to development. How it works: Users can submit a resource with a title, description, link,
                    and tags (e.g., "React," "JavaScript," "CSS"). Resources are displayed in a feed with
                    upvoting/downvoting functionality. Users can filter resources by tags or search for specific topics.
                    The most upvoted resources appear at the top of the feed.
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-4 text-xl font-semibold text-[#00a6fb]">
                      Add a feature on this Page where all the tech resources are available like:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        'Tech-Related Notes',
                        'Programming Language Courses',
                        'Top GitHub Repositories',
                        'AI Tools Directory',
                        'Affordable Learning',
                        'Open Source Libraries and Frameworks',
                        'Bootcamp Listings',
                        'Roadmaps and Guides',
                        'Interview Preparation Kits',
                      ].map((item, idx) => (
                        <span key={idx} className="rounded-full bg-[#00a6fb]/20 px-4 py-2 text-sm text-[#00a6fb]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 4: Project Showcase */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Code className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">4. Project Showcase Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add a feature where developers can showcase their projects. Developers first add their projects
                    through open-source contributions, and then the projects are showcased here. Also, add an
                    Interactive Voting and Liking System: Each showcased project will have a voting or liking mechanism.
                    Users can cast votes or like projects they find impressive, helping highlight the most popular and
                    trending projects within the community. This feature will foster engagement and provide visibility
                    to standout projects.
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-4 text-xl font-semibold text-[#00a6fb]">Purpose of this feature:</h4>
                    <ul className="space-y-2 text-blue-100">
                      {[
                        'Enable developers to add their projects to the showcase via open-source contributions.',
                        'Projects submitted by contributors will be listed on the ProjectShowcase page after review.',
                        'Each showcased project will feature a voting and liking mechanism to drive engagement.',
                        'Users can upvote or like projects they find impressive, helping boost visibility and credibility.',
                        'A Trending Projects section will dynamically highlight the most popular and top-voted contributions.',
                        'The system will dynamically highlight the most popular and trending projects in the community.',
                        'This feature will foster engagement and increase visibility for standout projects.',
                        'The platform can feature "Project of the Month" badges for standout submissions, encouraging participation.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 5: Portfolio Ideas */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <FileCode className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">5. Portfolio Ideas Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add a feature that enables developers, designers, and tech enthusiasts to showcase their portfolios
                    through open-source contributions. Contributors can submit live project links, source code
                    repositories, and project details, helping others discover their work and build their own
                    portfolios. This feature will serve as a hub for inspiration and resources, allowing the community
                    to learn from real-world examples, improve their personal branding, and connect with like-minded
                    individuals.
                  </p>

                  <div className="mt-6">
                    <ul className="space-y-2 text-blue-100">
                      {[
                        'Portfolio Submissions - Allows developers and designers to contribute their portfolios via open-source submissions.',
                        'Live Project & Code Integration - Users can showcase their projects with direct links to demos and repositories.',
                        'Community Inspiration - Helps others learn from well-crafted portfolios and improve their own.',
                        'Skill Development - Encourages contributors to refine their design, development, and presentation skills.',
                        'Networking & Collaboration - Creates opportunities for professionals to connect with like-minded individuals.',
                        'Featured Portfolios Section - Recognizes standout portfolios with a "Portfolio of the Month" badge to encourage participation. Users can upvote or like projects they find impressive, helping boost visibility and credibility.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 6: Portfolio Building */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Briefcase className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">6. Portfolio Building Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add Portfolio Builder features an innovative, no-code tool designed to empower individuals—whether
                    they are developers, designers, tech enthusiasts, or anyone in between—to easily create stunning,
                    fully-responsive portfolio websites. Users can simply input their information, such as skills,
                    projects, experiences, and achievements, and the tool generates a beautiful, professional portfolio
                    website tailored to their needs. No coding skills required. The tool even includes live hosting,
                    ensuring the portfolio is online and accessible to potential employers or collaborators.
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-4 text-xl font-semibold text-[#00a6fb]">Purpose of this feature:</h4>
                    <div className="rounded-lg bg-[#00a6fb]/10 p-4 text-blue-100">
                      <p>
                        The Portfolio Builder feature exists to provide an easy, intuitive solution for anyone seeking
                        to create a professional, visually appealing portfolio without the need for coding knowledge. By
                        offering a streamlined, no-code solution, this feature empowers users to showcase their personal
                        and professional brand in a polished and modern way, increasing their chances of standing out in
                        the competitive tech industry and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 7: Resume Building */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <FileText className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">7. Resume Building Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the ATS-Optimized Resume Builder feature to help users create professional, ATS-friendly resumes
                    effortlessly. With pre-designed templates optimized specifically for Applicant Tracking Systems -
                    ATS, users can quickly fill in their details, generate a polished resume, and download it instantly,
                    ready for recruitment processes. Whether you're a developer, designer, or professional in any
                    industry, this tool ensures your resume is tailored for the modern job market. Also add a feature in
                    this page to check the strength of their existing resumes through a built-in analysis tool.
                  </p>

                  <div className="mt-6">
                    <ul className="space-y-2 text-blue-100">
                      {[
                        "Dynamic Suggestions: Use AI to suggest skills or keywords based on the user's input.",
                        'Effortless Resume Creation: Choose from a variety of professionally designed templates optimized for ATS, making sure your resume gets noticed by automated systems and human recruiters alike. Offer templates tailored for different fields. e.g., design, development, data science.',
                        'ATS Score and Resume Checker: Upload your existing resume and receive an ATS score based on industry-standard keywords, formatting, and structure. The tool will provide detailed suggestions for improvements to help your resume pass ATS screenings and stand out to hiring managers. Provide a tool to score resumes against common ATS standards and suggest improvements.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 8: Community Discussion */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <MessageSquare className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">8. Community Discussion Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the Community Discussion Features on DevDisplay for cultivate a thriving, interactive space
                    where developers, designers, and tech enthusiasts can come together to share knowledge, collaborate,
                    and engage in meaningful conversations. These features foster an open and inclusive environment,
                    enabling users to discuss tech trends, career opportunities, project collaborations, and more.
                    Whether you're brainstorming new ideas, seeking advice, or connecting with like-minded
                    professionals, the Community Discussion features make DevDisplay the ultimate platform for dynamic
                    collaboration.
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-4 text-xl font-semibold text-[#00a6fb]">Features to Include:</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        'Real-Time Chat: Implement channels for discussions.',
                        'Threaded Conversations: Allow users to create threads for specific topics.',
                        'Reactions System: Users can react to messages with emojis 👍, ❤️, 🚀.',
                        'Mentions and Notifications: Enable users to tag others with @username, sending them notifications.',
                        'Searchable History: Add a search bar to browse past discussions quickly.',
                        'Moderation Tools: Include moderation capabilities like blocking inappropriate content and banning users.',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 rounded-lg bg-[#00a6fb]/10 p-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="text-blue-100">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 9: Tech Quiz */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Award className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">9. Tech Quiz Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the Tech Quiz Features on DevDisplay for engage and challenge the community with monthly quizzes
                    that test users' knowledge across a wide array of tech topics. Whether you're an expert in a
                    specific field or just getting started, these quizzes provide a fun and competitive way to showcase
                    your skills, learn new concepts, and earn rewards. By incorporating thematic quizzes, real-time
                    leaderboards, and community-generated content, DevDisplay ensures that learning and growth never
                    stop.
                  </p>

                  <div className="mt-6">
                    <ul className="space-y-2 text-blue-100">
                      {[
                        'Monthly Thematic Quizzes: New quizzes each month focusing on in-demand skills like Python, Web3, DevOps, and more.',
                        'Real-Time Leaderboards: Track your progress and compare scores globally or within specific communities.',
                        'Community-Generated Quizzes: Users can create and share their own quizzes, fostering collaboration and knowledge sharing.',
                        'Interactive Learning: Engaging quizzes with multiple-choice, fill-in-the-blank, and visual aids to enhance learning.',
                        'Monthly Rewards: Top scorers get recognition and exclusive prizes like tech course discounts or premium content access',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 10: AI Career Navigator */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <BrainCircuit className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">10. AI Career Navigator Features</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the AI Career Navigator on DevDisplay to help students and professionals navigate their career
                    journeys with clarity and confidence. Choosing a career path and learning new skills can be
                    overwhelming, but this feature simplifies the process. By analyzing your current skills and desired
                    role, the AI Career Navigator provides a personalized roadmap, identifies skill gaps, and recommends
                    relevant resources to help you succeed. Whether you're just starting out or looking to level up, the
                    AI Career Navigator ensures you're on the right path with the support you need to achieve your
                    career goals.
                  </p>

                  <div className="mt-6">
                    <ul className="space-y-2 text-blue-100">
                      {[
                        "AI-Powered Skill Assessment: Analyze the user's current skills and match them to the requirements of their desired role.",
                        'Personalized Career Roadmaps: Provide step-by-step guides for different career paths, highlighting key skills and certifications needed.',
                        'Skill Gap Analysis: Identify missing skills and recommend specific actions or resources to bridge those gaps.',
                        "Resource Recommendations: Suggest tailored learning materials, such as courses, tutorials, and articles, based on the user's career goals.",
                        'Mentorship Matching: Connect users with experienced professionals for personalized career guidance.',
                        'Career Path Exploration: Allow users to explore various tech careers, including job roles, salary expectations, and required skills.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 11: Online Compiler */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Terminal className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">11. Online Compiler Feature</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the Online Compiler feature on DevDisplay allows users to write, compile, and execute code
                    directly within the platform, without needing to set up a local development environment. This
                    feature supports multiple programming languages and provides an easy, convenient way for developers,
                    students, and learners to test and run their code in real-time. Whether you're learning a new
                    language, practicing coding challenges, or testing snippets, the online compiler makes coding more
                    accessible and efficient.
                  </p>

                  <div className="mt-6">
                    <ul className="space-y-2 text-blue-100">
                      {[
                        'Multi-Language Support: Enable compilation for multiple programming languages like Python, Java, C++, JavaScript, and more.',
                        'Real-Time Code Execution: Allow users to execute code and view the output instantly, making it easy to test ideas quickly.',
                        'Syntax Highlighting & Auto-Completion: Provide syntax highlighting and code suggestions to enhance the coding experience and reduce errors.',
                        'Error Detection & Debugging: Show clear error messages and debugging tools to help users identify and fix issues in their code.',
                        'Code Sharing: Allow users to share their code snippets or projects with others via links, enabling collaboration and learning.',
                        'Collaborative Coding: Add features for real-time collaboration, where users can code together in shared sessions.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 12: Journey Showcase */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col items-start gap-6 md:flex-row">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Users className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white md:text-3xl">12. Journey Showcase Feature</h3>
                  <p className="mt-3 text-lg text-blue-100">
                    Add the Journey Showcase feature on DevDisplay allows users to share their personal success stories,
                    offering detailed insights into how they cracked jobs, internships, or freelancing opportunities. By
                    highlighting their preparation strategies, challenges faced, and interview experiences, this feature
                    provides practical guidance and inspiration for others on similar paths. It helps users connect with
                    real-world success stories, learn from their peers, and gain actionable advice, making it an
                    essential resource for anyone looking to advance in their career.
                  </p>

                  <div className="mt-6">
                    <ul className="space-y-2 text-blue-100">
                      {[
                        'User-Generated Success Stories: Allow users to submit their own stories, showcasing their preparation, challenges, and key takeaways from job interviews or internships.',
                        'Step-by-Step Roadmap: Present each journey in a clear, structured format that breaks down the key steps taken, resources used, and challenges overcome.',
                        'Search & Filter Options: Enable users to search stories based on role, industry, or skill set, helping them find relevant journeys that align with their aspirations.',
                        'Engagement & Interaction: Allow other users to comment, ask questions, and share their thoughts on each story, fostering community engagement and knowledge-sharing.',
                        'Journey Ratings & Reviews: Let users rate and review the usefulness of each journey to help others find the most helpful stories.',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00a6fb]/20 text-[#00a6fb]">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contribute Beyond Section */}
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42]/90 to-[#141d2f]/90 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 md:p-10">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00a6fb] to-[#0582ca] text-white shadow-lg">
                  <Lightbulb className="h-8 w-8" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white md:text-3xl">Contribute Beyond the Core Features</h3>

                <p className="mx-auto mt-4 max-w-3xl text-lg text-blue-100">
                  While we have 12 key features that define our platform, we believe innovation is limitless. As a
                  contributor, you're encouraged to think beyond and add new, innovative features that can make a
                  difference in the tech ecosystem. Think outside the box and introduce features that can be
                  revolutionary for tech enthusiasts worldwide. If you spot a gap in the tech world, DevDisplay can be
                  the solution.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl bg-[#00a6fb]/10 p-6 text-left">
                    <h4 className="text-xl font-semibold text-[#00a6fb]">For Every Tech Enthusiast</h4>
                    <p className="mt-3 text-blue-100">
                      Whatever you need as a techy, DevDisplay has it all. Build your profile, find resources,
                      collaborate, and create without limitations.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#00a6fb]/10 p-6 text-left">
                    <h4 className="text-xl font-semibold text-[#00a6fb]">Become Part of the Global Vision</h4>
                    <p className="mt-3 text-blue-100">
                      Your contributions will help us provide everything developers need in one place—no more hopping
                      between multiple websites to find the resources you need. With your input, DevDisplay will grow
                      into the go-to platform for developers worldwide, fostering collaboration, learning, and
                      innovation. One Platform. Endless Opportunities.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#00a6fb]/10 p-6 text-left">
                    <h4 className="text-xl font-semibold text-[#00a6fb]">Be a Global Innovator</h4>
                    <p className="mt-3 text-blue-100">
                      As a contributor, you're not just adding features to a platform—you're becoming part of a global
                      community that's pushing the boundaries of technology.
                    </p>
                  </div>
                </div>

                <a
                  href="https://swift-sheet-b33.notion.site/DevDisplay-Contribution-Guidelines-18a7d1f1565b80569377e5a610155ccc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-[#00a6fb] to-[#0582ca] px-8 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
                >
                  <span>Checkout the contribution guidelines!</span>
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-[#00a6fb]/20 px-4 py-1 text-sm font-medium text-[#00a6fb]">
            Recognition
          </div>
          <h2 className="mt-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Earn Contributor Badges
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Get recognized for your valuable contributions to the DevDisplay community
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'DevPioneer',
              description: 'Earn this badge by adding your profile to the DevDisplay platform.',
              image: './DevPioneerpng.gif',
              link: 'https://github.com/codeaashu/DevDisplay/blob/main/CONTRIBUTING.md#-add-your-profile-on-devdisplay-',
            },
            {
              title: 'Dev Enhancer',
              description: 'Earn this badge by improving or refining existing features.',
              image: './DevEnhancerpng.gif',
              link: 'https://github.com/codeaashu/DevDisplay/blob/main/CONTRIBUTING.md#dev-enhancer-',
            },
            {
              title: 'Dev Innovator',
              description: 'Earn this badge by adding innovative, creative features.',
              image: './DevInnovatorpng.gif',
              link: 'https://github.com/codeaashu/DevDisplay/blob/main/CONTRIBUTING.md#dev-innovator-',
            },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e2a42] to-[#141d2f] shadow-xl transition-all hover:shadow-xl hover:shadow-[#00a6fb]/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#141d2f] to-transparent opacity-60"></div>
                <img
                  src={badge.image || '/placeholder.svg'}
                  alt={`${badge.title} Badge`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white">{badge.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-blue-100">{badge.description}</p>
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center space-x-2 rounded-full bg-[#00a6fb]/20 px-4 py-2 text-sm font-medium text-[#00a6fb] transition-all hover:bg-[#00a6fb] hover:text-white"
                >
                  <span>Click here to checkout</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(30, 42, 66, 0.9), rgba(20, 29, 47, 0.9)), url(/images/hero-bg.jpg)',
              backgroundSize: '200% 200%',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <motion.div
          className="container relative z-10 mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-white md:text-5xl">Join Our Community</h2>

            <p className="mt-6 text-xl text-blue-100">
              Ready to collaborate, innovate, and grow? Become a part of the DevDisplay community today.
            </p>

            {/* Container for centering the button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                onClick={navigateToGitHub}
                className="flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-[#00a6fb] to-[#0582ca] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="h-5 w-5" />
                <span>Get Started on GitHub</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
