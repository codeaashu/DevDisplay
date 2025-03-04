// import React, { useState, useEffect } from 'react';
// import { FaLinkedin } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Sidebar() {
  const navigate = useNavigate();
  // const [theme, setTheme] = useState(() => {
  //   const storedTheme = JSON.parse(localStorage.getItem('theme'));
  //   return storedTheme || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  // });

  // useEffect(() => {
  //   const htmlElement = document.documentElement;
  //   htmlElement.classList.toggle('dark', theme === 'dark');
  //   htmlElement.classList.toggle('light', theme === 'light');
  //   localStorage.setItem('theme', JSON.stringify(theme));
  // }, [theme]);

  // function toggleTheme() {
  //   setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  // }

  function handleHome() {
    navigate('/Home');
  }

  // function handleAboutUs() {
  //   navigate('/About');
  // }

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <div className="mb-2 flex h-12 items-center justify-center gap-2.5">
        <img src="./WordMark.png" alt="DevDisplay Logo" className="h-64 w-auto md:h-72 lg:h-80" />
        {/* <div className="text-secondaryColor dark:text-white">
          <FontAwesomeIcon icon={faCode} size="2xl" />
        </div> */}
        {/* <a href="https://www.devdisplay.org/">
          <div
            className="flex  text-[2rem] font-bold
           md:text-[1.05rem] lg:text-[1.25rem] min-[1200px]:text-[1.75rem]  "
          >
            <p className="text-secondaryColor dark:text-white">Dev</p>
            <p className="text-textSecondary">Display</p>
          </div>
        </a> */}
        {/* <div className="ml-auto">
          <button
            type="button"
            className="h-10 w-10 cursor-pointer rounded-lg border-2 border-borderSecondary bg-white transition-all hover:border-textSecondary hover:text-textSecondary dark:border-borderColor dark:bg-textPrimary dark:text-white dark:hover:border-textSecondary dark:hover:text-textSecondary"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <FontAwesomeIcon icon={faSun} fontSize="1rem" />
            ) : (
              <FontAwesomeIcon icon={faMoon} fontSize="1rem" />
            )}
          </button>
        </div> */}
      </div>
      {/* <div className="text-center text-xs text-secondaryColor  dark:text-white">CONNECT COLLAB CODE CREATE CONQUER</div> */}
      <div className="text-center text-secondaryColor dark:text-white">
        The First Global Platform for Developers to Fulfill All Their Tech Needs.
      </div>
      {/* <div className="flex flex-wrap items-center justify-center gap-2 pt-5 ">
        <a
          href="https://github.com/codeaashu/DevDisplay/blob/main/CONTRIBUTING.md#-add-your-profile-on-devdisplay-"
          target="_blank"
          rel="noreferrer"
        >
          <button className="inline-block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            Add your profile
          </button>
        </a>
        <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noreferrer">
          <button className="inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
            <span>Connect</span>
            <FaLinkedin className="text-1xl text-black-600 ml-2 duration-300 hover:scale-125" />
          </button>
        </a>
      </div> */}
      {/* <div className="flex flex-row flex-wrap items-center justify-center gap-2 pt-6">
        <button
          onClick={handleHome}
          className="animate-zoom inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white"
        >
          Unlock the Power of DevDisplay
        </button>
      </div>
      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-zoom {
          animation: zoom 2s infinite;
        }

        .animate-zoom:hover {
          animation-play-state: paused;
        }
      `}</style> */}
      {/* <div className="flex flex-row flex-wrap items-center justify-center gap-2 pt-6">
        <button
          onClick={handleAboutUs}
          className="inline-flex cursor-pointer items-center rounded-lg border-2 border-textSecondary bg-textSecondary px-[15px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white"
        >
          About Us
        </button>
      </div> */}
      {/* <div className="flex flex-row flex-wrap items-center justify-center gap-2 pt-6">
        <a
          href="https://www.producthunt.com/posts/devdisplay?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-devdisplay"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=594879&theme=dark"
            alt="DevDisplay - Global open source tech platform | Product Hunt"
            style={{ width: '250px', height: '54px' }}
            width="250"
            height="54"
          />
        </a>
      </div> */}
      <StyledWrapper className="flex flex-row flex-wrap items-center justify-center gap-2 pt-6">
        <button className="button" onClick={handleHome}>
          <div className="blob1" />
          <div className="blob2" />
          <div className="inner">DevDisplay Universe</div>
        </button>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
    transition:
      background 0.3s,
      transform 0.3s;
    animation: zoom 3s ease-in-out infinite;
  }

  .button:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  .button::after {
    content: '';
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  .button:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 70px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle 60px at 0% 100%, #3fe9ff, #0000ff80, transparent);
    box-shadow: -10px 10px 30px #0051ff2d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }

  .button:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }

  .button:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent);
    position: absolute;
    transition: opacity 0.3s;
  }

  .button:hover .inner::before {
    opacity: 0;
  }

  @keyframes zoom {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @media (min-width: 768px) {
    .button {
      font-size: 1rem; /* Adjust font size for larger screens */
      padding: 1px; /* Adjust padding for larger screens */
    }

    .inner {
      padding: 10px 20px; /* Adjust inner padding for larger screens */
    }
  }
`;

export default Sidebar;
