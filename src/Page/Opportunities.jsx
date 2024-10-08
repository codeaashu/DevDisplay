import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Sample opportunities data
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
  { title: 'Freelance Work', items: ['Web Developer', 'Web Designer', 'AI Engineer'] },
  { title: 'Hackathons', items: ['Global AI Hackathon', 'Blockchain Innovation Challenge', 'Green Tech Hackathon'] },
  { title: 'Open Source', items: ['DevDisplay', 'Hacktoberfest - 2024', 'GSSOC - 2024'] },
  { title: 'Tech Events', items: ['TechCrunch Disrupt', 'Web Summit', 'Google I/O'] },
  { title: 'BootCamps', items: ['Full Stack Web Development', 'Data Science Immersive', 'UX/UI Design Bootcamp'] },
  { title: 'Devfest', items: ['Google DevFest 2024', 'Apple WWDC', 'Microsoft Build'] },
];

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer sticky top-4 z-10" // Ensure it sticks to the top with correct z-index
    >
      {theme === 'dark' ? (
        <FaSun className="text-white h-6 w-6 transition-colors hover:text-[#00a6fb]" />
      ) : (
        <FaMoon className="text-black h-6 w-6 transition-colors hover:text-[#00a6fb]" />
      )}
    </div>
  );
}

export default function Opportunities() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-[#141d2f] text-white' : 'min-h-screen bg-[#f0f0f0] text-black'}>
      {/* Header */}
      <header className={theme === 'dark' ? 'bg-[#00a6fb] p-4' : 'bg-[#ffcc00] p-4'}>
        {/* Theme Toggle */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      {/* Animated Section */}
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
              theme === 'dark'
                ? 'linear-gradient(45deg, #141d2f 25%, #00a6fb 25%, #00a6fb 50%, #141d2f 50%, #141d2f 75%, #00a6fb 75%, #00a6fb 100%)'
                : 'linear-gradient(45deg, #ffffff 25%, #ffcc00 25%, #ffcc00 50%, #ffffff 50%, #ffffff 75%, #ffcc00 75%, #ffcc00 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        <div className="relative z-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">Opportunities In Tech Fields</h2>
          <p className="text-xl">
            Explore the hub of all the latest & upcoming Opportunities in one place
            <br />
            (jobs, internships, hackathons, events, bootcamps, webinars, devfests)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto grid gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((category) => (
          <div
            key={category.title}
            className={theme === 'dark' ? 'rounded-lg bg-[#1e2a42] p-4 shadow-lg' : 'rounded-lg bg-[#ffffff] p-4 shadow-lg'}
          >
            <h3 className={theme === 'dark' ? 'mb-4 text-2xl font-bold text-[#00a6fb]' : 'mb-4 text-2xl font-bold text-[#ffcc00]'}>
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <ExternalLink className={theme === 'dark' ? 'mr-2 h-4 w-4 text-[#00a6fb]' : 'mr-2 h-4 w-4 text-[#ffcc00]'} />
                  <button className="text-left transition-colors hover:text-[#00a6fb]">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className={theme === 'dark' ? 'mt-12 bg-[#00a6fb] p-8' : 'mt-12 bg-[#ffcc00] p-8'}>
        <div className="container mx-auto text-center">
          <h3 className="mb-4 text-2xl font-bold">Join the Tech Revolution</h3>
          <p className="mb-4">Stay updated with the latest opportunities and events in the tech world.</p>
          <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className={theme === 'dark' ? 'w-full rounded-lg px-4 py-2 text-[#141d2f] sm:w-auto' : 'w-full rounded-lg px-4 py-2 text-[#000] sm:w-auto'}
            />
            <button
              type="submit"
              className={theme === 'dark' ? 'w-full rounded-lg bg-[#141d2f] px-6 py-2 text-white hover:bg-[#1e2a42] sm:w-auto' : 'w-full rounded-lg bg-[#ffcc00] px-6 py-2 text-black hover:bg-[#ffd700] sm:w-auto'}
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
