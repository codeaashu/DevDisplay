import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom';
function Sidebar() {
  const [theme, setTheme] = useState('dark');
  const [showAbout, setShowAbout] = useState(false);
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

  const navigate = useNavigate();
  function handleAbout(e) {
    e.preventDefault();
    setShowAbout(() => (showAbout ? false : true));
    navigate('/about');
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
      <div className="my-5 flex flex-row items-center justify-center space-x-3 pt-1 md:flex-col md:space-x-0 md:space-y-5 md:pt-5">
        <a href="https://github.com/codeaashu/DevDisplay#how-to-add-your-profile-" target="_blank" rel="noreferrer">
          <button className="inline-block h-[30px] w-full cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-6 py-2 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white md:h-[50px] md:w-[200px]">
            Add your profile
          </button>
        </a>

        <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
          <button className="mt-0 inline-flex h-[30px] w-full cursor-pointer items-center justify-center space-x-3 rounded-lg border-2 border-textSecondary bg-textSecondary px-6 py-2 font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white md:h-[50px] md:w-[200px]">
            <span>Connect us</span>
            <FaLinkedin className="text-[1.2rem] text-blue-600 duration-300 hover:scale-125" />
          </button>
        </a>
      </div>
      <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
        <button className="border-secondaryColor-blue mx-[130px] mt-1 inline-flex h-[30px] items-center justify-center space-x-3 rounded-lg border-2 border-blue-400 bg-secondaryColor  bg-sky-500 px-6 py-2 font-poppoins text-sm  transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:border-textSecondary dark:text-white md:mx-12 md:mt-0 md:flex md:h-[50px] md:w-[200px] md:space-x-3">
          <span className=" md:flex md:items-center">Sponser</span>
          <FcAbout className="text-[1.2rem] duration-300 hover:scale-125" />
        </button>
      </a>
    </div>
  );
}
export default Sidebar;
