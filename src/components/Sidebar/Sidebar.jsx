import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
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
      <div className="text-secondaryColor dark:text-white">
        Open Source community where you can discover, connect, collab with skilled developers, share your ideas then
        build projects and also promote the project through this community.
      </div>
      <div className="pt-5">
        <a
          href="https://github.com/codeaashu/DevDisplay?tab=readme-ov-file#how-to-add-your-profile-"
          target="_blank"
          rel="noreferrer"
        >
          <button className="mr-4 inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Add your profile
          </button>
        </a>
        <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
          <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            <span>Connect</span>
            <FaLinkedin className="text-1xl text-black-600 ml-2 duration-300 hover:scale-125" />
          </button>
        </a>
      </div>
      <div className="pt-6">
        <a href="https://ai.google.dev/competition/projects/helpmate-ai" target="_blank" rel="noreferrer">
          <button className="mr-4 inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            DevDisplay - Community Spotlight 🌟
          </button>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
