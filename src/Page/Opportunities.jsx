import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const opportunities = [
  {
    title: 'Hybrid & Onsite Jobs',
    items: ['Software Engineer at TechCorp', 'Data Scientist at DataInc', 'UX Designer at DesignHub'],
  },
  {
    title: 'Remote Jobs',
    items: ['Software Engineer at Microsoft', 'JAVA Developer at YULK', 'UI Designer at Xdesign'],
  },
  {
    title: 'Internships',
    items: ['Summer Internship at Google', 'Fall Internship at Microsoft', 'Remote Internship at Amazon'],
  },
  { title: 'Freelance Work', items: ['Web developer', 'Web Designer', 'AI Engineer'] },
  { title: 'Hackathons', items: ['Global AI Hackathon', 'Blockchain Innovation Challenge', 'Green Tech Hackathon'] },
  { title: 'Open Source', items: ['DevDisplay', 'Hacktoberfest - 2024', 'GSSOC - 2024'] },
  { title: 'Tech Events', items: ['TechCrunch Disrupt', 'Web Summit', 'Google I/O'] },
  { title: 'BootCamps', items: ['Full Stack Web Development', 'Data Science Immersive', 'UX/UI Design Bootcamp'] },
  { title: 'Devfest', items: ['Google DevFest 2024', 'Apple WWDC', 'Microsoft Build'] },
];

export default function Opportunities() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem('theme'));
    return storedTheme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', theme === 'dark');
    htmlElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#141d2f]' : 'bg-white'} transition-colors duration-500`}>
      <header className="flex items-center justify-between bg-[#00a6fb] p-4">
        <h1 className="text-2xl font-bold text-white">Opportunities Hub</h1>
        <button
          onClick={toggleTheme}
          className="rounded-lg bg-white p-2 dark:bg-[#141d2f] dark:text-white"
        >
          {theme === 'dark' ? (
            <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-gray-900" />
          )}
        </button>
      </header>

      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage:
              'linear-gradient(45deg, #141d2f 25%, #00a6fb 25%, #00a6fb 50%, #141d2f 50%, #141d2f 75%, #00a6fb 75%, #00a6fb 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        <div className="relative z-10 text-center">
          <motion.h2
            className={`mb-4 text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Opportunities In Tech Fields
          </motion.h2>
          <p className="text-xl text-white">
            Explore all the latest & upcoming opportunities (jobs, internships, hackathons, events, etc.)
          </p>
        </div>
      </section>

      <main className="container mx-auto grid gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((category) => (
          <motion.div
            key={category.title}
            className={`rounded-lg p-4 shadow-lg transition-colors ${theme === 'dark' ? 'bg-[#1e2a42]' : 'bg-gray-100'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`mb-4 text-2xl font-bold ${theme === 'dark' ? 'text-[#00a6fb]' : 'text-[#141d2f]'}`}>
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <ExternalLink className={`mr-2 h-4 w-4 ${theme === 'dark' ? 'text-[#00a6fb]' : 'text-gray-700'}`} />
                  <button className="text-left transition-colors dark:text-white dark:hover:text-[#00a6fb] text-black hover:text-[#00a6fb]">
  {item}
</button>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </main>

      <footer className="mt-12 bg-[#00a6fb] p-8">
        <div className="container mx-auto text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">Join the Tech Revolution</h3>
          <p className="mb-4 text-white">Stay updated with the latest opportunities and events in the tech world.</p>
          <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg px-4 py-2 text-gray-800 sm:w-auto"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#141d2f] px-6 py-2 text-white transition-colors hover:bg-[#1e2a42] sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
