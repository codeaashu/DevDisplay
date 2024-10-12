import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://devdisplay.vercel.app/" className="flex items-center">
          <div className="text-secondaryColor dark:text-white text-2xl font-bold md:text-lg lg:text-xl">
            Dev <span className="text-textSecondary">Display</span>
          </div>
        </a>
        <div className="ml-auto">
          <button
            type="button"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border"
          >
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white mb-4">
        Welcome to our Open Source Collective: a dynamic hub where visionary developers unite. Discover, collaborate, and bring your ideas to life while amplifying your projects within our community. Together, let's transform inspiration into innovation!
      </div>
      <div className="flex justify-start gap-2 pt-5">
        <a
          href="https://github.com/codeaashu/DevDisplay?tab=readme-ov-file#how-to-add-your-profile-"
          target="_blank"
          rel="noreferrer"
        >
          <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-gray-600 bg-gray-600 px-4 py-2 text-center font-poppoins text-sm text-white transition-all duration-300 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            Add your profile
          </button>
        </a>
        <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
          <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-gray-600 bg-gray-600 px-4 py-2 text-center font-poppoins text-sm text-white transition-all duration-300 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span>Connect</span>
            <FaLinkedin className="text-xl ml-2 transition-transform duration-300 hover:scale-110" />
          </button>
        </a>
      </div>
      <div className="flex justify-start gap-2 pt-6">
        <a href="https://ai.google.dev/competition/projects/helpmate-ai" target="_blank" rel="noreferrer">
          <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-gray-600 bg-gray-600 px-4 py-2 text-center font-poppoins text-sm text-white transition-all duration-300 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            Spotlight
          </button>
        </a>
        <button
          onClick={handleOpportunities}
          className="inline-flex cursor-pointer items-center rounded-lg border-2 border-gray-600 bg-gray-600 px-4 py-2 text-center font-poppoins text-sm text-white transition-all duration-300 hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          Opportunities Hub
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
