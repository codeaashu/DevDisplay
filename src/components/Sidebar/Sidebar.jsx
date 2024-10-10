import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Sidebar() {
  const navigate = useNavigate();
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

  function handleOpportunities() {
    navigate('/opportunities');
  }

  return (
    <motion.div
      className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 60 }}
    >
      <div className="mb-4 flex h-12 items-center gap-2.5">
        <motion.div
          className="text-secondaryColor dark:text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </motion.div>
        <a href="https://devdisplay.vercel.app/">
          <motion.div
            className="flex text-[2rem] font-bold md:text-[1.05rem] lg:text-[1.25rem] min-[1200px]:text-[1.75rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-secondaryColor dark:text-white">Dev</p>
            <p className="text-textSecondary">Display</p>
          </motion.div>
        </a>
        <div className="ml-auto">
          <motion.button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-gradient-to-r from-purple-400 to-pink-600 text-white transition-all hover:scale-110 dark:border-borderColor dark:bg-textPrimary dark:hover:scale-110"
            onClick={toggleTheme}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            )}
          </motion.button>
        </div>
      </div>

      <motion.p
        className="text-secondaryColor dark:text-white mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
      >
        Discover, connect, and collaborate with developers in the open-source community. Share ideas, build projects,
        and promote your work!
      </motion.p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
        <motion.a
          href="https://github.com/codeaashu/DevDisplay?tab=readme-ov-file#how-to-add-your-profile-"
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 font-poppoins text-sm text-white transition-transform hover:scale-105">
            Add your profile
          </button>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/company/devdisplay/"
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-teal-400 px-6 py-2 text-white transition-transform hover:scale-105">
            <span>Connect</span>
            <FaLinkedin className="ml-2 text-2xl text-white" />
          </button>
        </motion.a>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-6">
        <motion.a
          href="https://ai.google.dev/competition/projects/helpmate-ai"
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="inline-flex items-center rounded-full bg-gradient-to-r from-red-400 to-pink-600 px-6 py-2 text-white transition-transform hover:scale-105">
            Spotlight
          </button>
        </motion.a>

        <motion.button
          onClick={handleOpportunities}
          className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 text-white transition-transform hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Opportunities Hub
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Sidebar;
