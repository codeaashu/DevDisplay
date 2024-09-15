import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.contains('dark');

    if (isDarkModeEnabled) {
      htmlElement.classList.remove('dark');
      setTheme('light');
    } else {
      htmlElement.classList.add('dark');
      setTheme('dark');
    }
  }

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <div className="mb-2 flex h-12 items-center gap-2.5">
        <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div>
        <a href="https://devdisplay.vercel.app/">
          <div className="flex text-[2rem] font-bold md:text-[1rem] lg:text-[2rem]">
            <p className="text-secondaryColor dark:text-white">Dev</p>
            <p className="text-textSecondary">Display</p>
          </div>
        </a>
        <div className="ml-auto">
          <button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border-textSecondary dark:hover:text-textSecondary"
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            )}
          </button>
        </div>
      </div>
      <div className="text-secondaryColor dark:text-white">Discover and Connect with Skilled Developers.</div>
      <div className="pt-5">
        <a href="https://github.com/codeaashu/DevDisplay#how-to-add-your-profile-" target="_blank" rel="noreferrer">
          <button className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white mr-4">
            Add your profile
          </button>
        </a>
        <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
        <button className="inline-flex items-center cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.453h-3.9v-5.8c0-1.38-.03-3.16-1.9-3.16-1.99 0-2.29 1.55-2.29 3.15v5.8h-3.9V9h3.74v1.55h.05c.52-1 1.8-2.08 3.71-2.08 3.97 0 4.7 2.63 4.7 6.04v5.92zm-17.86-11.92c-1.24 0-2.25 1.01-2.25 2.25 0 1.24.99 2.25 2.25 2.25s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zM2.5 20.453h3.9v-11h-3.9v11z"/>
          </svg>
            Connect
        </button>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
