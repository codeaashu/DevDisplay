import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const featureCards = [
    {
      title: 'Opportunities',
      description: 'Explore various career and learning opportunities in the tech industry.',
      link: '/opportunities',
    },
    {
      title: 'Resources',
      description: 'Access a wide range of learning resources, tools, and libraries to boost your skills.',
      link: '/resources',
    },
    {
      title: 'Project Showcase',
      description: 'Showcase your projects, get feedback, and inspire others to collaborate.',
      link: '/projects',
    },
    {
      title: 'Tech Discussion',
      description: 'Engage in tech discussions, share ideas, and stay updated on the latest trends.',
      link: '/discussions',
    },
    {
      title: 'Ideas Submission',
      description: 'Submit your innovative ideas, get feedback, and explore collaborations.',
      link: '/idea-submission',
    },
    {
      title: 'Portfolio Ideas',
      description: 'Get inspired with creative ideas to enhance your portfolio and make an impact.',
      link: '/portfolio-builder',
    },
    {
      title: 'Portfolio Building',
      description: 'Learn the best practices to build a standout portfolio that impresses recruiters.',
      link: '/portfolio-builder',
    },
    {
      title: 'Resume Building',
      description: 'Create a professional resume with tips and templates tailored to the tech industry.',
      link: '/resume-builder',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-8 text-white">
        <h1 className="text-4xl font-bold">Welcome to TechDisplay</h1>
        <p className="mt-2 text-lg">Your hub for all tech-related opportunities and resources.</p>
      </header>
      <main className="p-4">
        <section className="my-8">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-2 text-lg">
            TechDisplay aims to provide a comprehensive platform for tech enthusiasts to find opportunities, access
            resources, showcase projects, submit ideas, engage in discussions, build portfolios, and create resumes.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card relative cursor-pointer rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(feature.link)}
            >
              <h3 className="mb-4 text-2xl font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-transparent"
                initial={{ borderColor: 'transparent' }}
                whileHover={{ borderColor: '#00a6fb' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </section>
        <motion.div
          className="feature-card relative mt-6 cursor-pointer rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/suggest-features')}
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
      </main>
    </div>
  );
};

export default HomePage;
