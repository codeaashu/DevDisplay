import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebouncer';
import projectsData from '../DB/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Footer } from '../components/Footer/Footer';
import styled from 'styled-components';
// import Marquee from 'react-fast-marquee';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onOpenModal }) => (
  <nav className="sticky top-0 z-50 w-full bg-gray-900 text-white shadow-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3">
      <a href="/">
        <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
          <ArrowLeft className="h-5 w-5" />
          <span className="hidden md:inline">Back</span>
        </button>
      </a>
      <div className="flex items-center justify-center">
        <StyledButton onClick={onOpenModal}>
          <div className="blob1" />
          <div className="inner">Add Your Projects!</div>
        </StyledButton>
      </div>
      <div className="text-2xl font-bold">
        <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-12 w-12" />
      </div>
    </div>
  </nav>
);

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('Domain');

  const debouncedSearch = useDebounce(searchValue, 300);

  const projectsPerPage = 9;

  const navigate = useNavigate();

  useEffect(() => {
    const flattenedProjects = projectsData.flatMap((user) =>
      (user.Projects || []).map((project) => ({
        ...project,
        username: user.github_username || '',
        tech: project.tech || [],
        title: project.title || '',
      })),
    );

    const shuffledProjects = shuffleArray(flattenedProjects);

    setAllProjects(shuffledProjects);
    setFilteredProjects(shuffledProjects);
    setVisibleProjects(shuffledProjects.slice(0, projectsPerPage));
  }, []);

  useEffect(() => {
    const filtered = allProjects.filter((project) => {
      const value = debouncedSearch.toLowerCase();
      if (!value) return true;
      if (searchType === 'Domain') {
        return project.tech.some((t) => t.toLowerCase().includes(value));
      }
      if (searchType === 'Title') {
        return project.title.toLowerCase().includes(value);
      }
      if (searchType === 'username') {
        return project.username.toLowerCase().includes(value);
      }
      return true;
    });
    setFilteredProjects(filtered);
    setVisibleProjects(filtered.slice(0, projectsPerPage));
  }, [debouncedSearch, searchType, allProjects]);

  const loadMoreProjects = () => {
    if (isLoading || visibleProjects.length >= filteredProjects.length) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextProjects = filteredProjects.slice(visibleProjects.length, visibleProjects.length + projectsPerPage);
      setVisibleProjects((prev) => [...prev, ...nextProjects]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleProjects, isLoading, filteredProjects]);

  return (
    <div>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-white">
        <div className="flex w-full flex-col items-center justify-center px-8 text-center">
          <div className="my-6"></div>
          {/* <h1 className="mb-2 text-6xl font-bold tracking-widest md:text-4xl"><span className="text-[#00a6fb]">Unlock All Tech Opportunities in One Place</span></h1> */}
          <StyledWrapper>
            <div className="modgp relative inline-block w-full py-3">
              <div className="relative">
                <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                  <div className="flex w-full items-center justify-center">Project Display</div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div id="style-AQliM" className="animate-magic-sparkle style-AQliM pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={8}
                    width={8}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-WCb99" className="animate-magic-sparkle style-WCb99 pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-dBNZV" className="animate-magic-sparkle style-dBNZV pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={9}
                    width={9}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-tiisO" className="animate-magic-sparkle style-tiisO pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={8}
                    width={8}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-re9B7" className="animate-magic-sparkle style-re9B7 pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-BKG4G" className="animate-magic-sparkle style-BKG4G pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={7}
                    width={7}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-NaoVe" className="animate-magic-sparkle style-NaoVe pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={8}
                    width={8}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-pwIlv" className="animate-magic-sparkle style-pwIlv pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-QmcAd" className="animate-magic-sparkle style-QmcAd pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={7}
                    width={7}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-VG2eL" className="animate-magic-sparkle style-VG2eL pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </StyledWrapper>
        </div>
        <div className="my-6"></div>
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <StyledLeaderboardButton onClick={() => navigate('/leaderboard')} />
        </div>
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={`Search by ${searchType}...`}
            className="w-full max-w-xs rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white transition focus:outline-none focus:ring focus:ring-[#00a6fb]"
          />
          <div className="relative w-full max-w-xs">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 pr-10 text-white transition focus:outline-none focus:ring focus:ring-[#00a6fb]"
              style={{
                backgroundColor: '#1f2937',
                color: '#fff',
              }}
            >
              <option value="Domain">Domain</option>
              <option value="Title">Title</option>
              <option value="username">Username</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 text-white">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Spotlight Your Projects Globally!</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                  X
                </button>
              </div>

              <iframe
                src="https://tally.so/embed/wdRJar?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="500px"
                frameBorder="0"
                title="Tally Form"
                className="rounded-lg"
              ></iframe>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg bg-gray-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

          {isLoading && Array.from({ length: projectsPerPage }).map((_, index) => <LoadingSkeleton key={index} />)}
        </div>

        {!isLoading && visibleProjects.length >= filteredProjects.length && (
          <p className="mt-6 text-center text-gray-400">🎉 You've reached the end!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { title, description, tech, github_url, username, maker_image, live_url } = project;

  return (
    <div className="rounded-lg border border-blue-600 bg-gray-900 p-5 shadow-lg transition-all duration-300 hover:scale-105">
      <div className="mb-4 flex items-center">
        <img src={maker_image} alt={username} className="mr-4 h-10 w-10 rounded-full" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="rounded bg-[#00a6fb33] px-2 py-1 text-xs font-medium text-[#00a6fb]">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <a
          href={github_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-sm text-[#00a6fb] hover:underline"
        >
          <FaGithub className="mr-1" /> View on GitHub
        </a>
        {live_url && (
          <a
            href={live_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm text-[#00a6fb] hover:underline"
          >
            <FaExternalLinkAlt className="mr-1" /> View Live Demo
          </a>
        )}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-400 hover:underline"
        >
          @{username}
        </a>
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-lg">
      <div className="mb-4 h-6 w-3/4 rounded bg-gray-700"></div>
      <div className="mb-2 h-4 w-full rounded bg-gray-700"></div>
      <div className="mb-4 h-4 w-5/6 rounded bg-gray-700"></div>
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded bg-gray-700"></div>
        <div className="h-6 w-12 rounded bg-gray-700"></div>
        <div className="h-6 w-20 rounded bg-gray-700"></div>
      </div>
    </div>
  );
};

const StyledLeaderboardButton = ({ onClick }) => (
  <StyledWrapper>
    <button type="button" className="button" onClick={onClick}>
      <span className="fold" />
      <div className="points_wrapper">
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
        <i className="point" />
      </div>
      <span className="inner">
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
        </svg>
        Top Project Builder Leaderboard
      </span>
    </button>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .relative {
    position: relative;
  }

  .inline-block {
    display: inline-block;
  }

  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  :backdrop {
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .absolute {
    position: absolute;
  }

  .inset-0 {
    inset: 0;
  }

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    width: 300px !important;
  }

  button {
    text-transform: none;
  }

  button {
    cursor: pointer;
  }

  .inline-flex {
    display: inline-flex;
  }

  .justify-center {
    justify-content: center;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgba(15, 27, 53, 0);
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  #style-AQliM.style-AQliM {
    top: 1%;
    left: 99%;
  }
  #style-WCb99.style-WCb99 {
    top: 7%;
    left: 1%;
  }
  #style-dBNZV.style-dBNZV {
    top: 93%;
    left: 23%;
  }
  #style-tiisO.style-tiisO {
    top: 43%;
    left: 15%;
  }
  #style-re9B7.style-re9B7 {
    top: 93%;
    left: 9%;
  }
  #style-BKG4G.style-BKG4G {
    top: 21%;
    left: 88%;
  }
  #style-NaoVe.style-NaoVe {
    top: 99%;
    left: 95%;
  }
  #style-pwIlv.style-pwIlv {
    top: 64%;
    left: 99%;
  }
  #style-QmcAd.style-QmcAd {
    top: 14%;
    left: 45%;
  }
  #style-VG2eL.style-VG2eL {
    top: 2%;
    left: 48%;
  }

  /* Keyframes for sparkle animation */
  @keyframes sparkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  /* Add animation to sparkle elements */
  .animate-magic-sparkle {
    animation: sparkle 2s infinite;
  }

  .style-AQliM {
    animation-delay: 0.5s;
  }
  .style-WCb99 {
    animation-delay: 0.33s;
  }
  .style-dBNZV {
    animation-delay: 0.6s;
  }
  .style-tiisO {
    animation-delay: 0.9s;
  }
  .style-re9B7 {
    animation-delay: 1.2s;
  }
  .style-BKG4G {
    animation-delay: 1.5s;
  }
  .style-NaoVe {
    animation-delay: 1.8s;
  }
  .style-pwIlv {
    animation-delay: 1.9s;
  }
  .style-QmcAd {
    animation-delay: 1.4s;
  }
  .style-VG2eL {
    animation-delay: 1.7s;
  }

  // for the button styles

  .button {
    --h-button: 48px;
    --w-button: 102px;
    --round: 0.75rem;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.25s ease;
    background:
      radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%),
      linear-gradient(0deg, #7a5af8, #7a5af8);
    border-radius: var(--round);
    border: none;
    outline: none;
    padding: 12px 18px;
  }
  .button::before,
  .button::after {
    content: '';
    position: absolute;
    inset: var(--space);
    transition: all 0.5s ease-in-out;
    border-radius: calc(var(--round) - var(--space));
    z-index: 0;
  }
  .button::before {
    --space: 1px;
    background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%);
  }
  .button::after {
    --space: 2px;
    background:
      radial-gradient(65.28% 65.28% at 50% 100%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%),
      linear-gradient(0deg, #7a5af8, #7a5af8);
  }
  .button:active {
    transform: scale(0.95);
  }

  .fold {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    height: 1rem;
    width: 1rem;
    display: inline-block;
    transition: all 0.5s ease-in-out;
    background: radial-gradient(100% 75% at 55%, rgba(223, 113, 255, 0.8) 0%, rgba(223, 113, 255, 0) 100%);
    box-shadow: 0 0 3px black;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: var(--round);
  }
  .fold::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150%;
    height: 150%;
    transform: rotate(45deg) translateX(0%) translateY(-18px);
    background-color: #e8e8e8;
    pointer-events: none;
  }
  .button:hover .fold {
    margin-top: -1rem;
    margin-right: -1rem;
  }

  .points_wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .points_wrapper .point {
    bottom: -10px;
    position: absolute;
    animation: floating-points infinite ease-in-out;
    pointer-events: none;
    width: 2px;
    height: 2px;
    background-color: #fff;
    border-radius: 9999px;
  }
  @keyframes floating-points {
    0% {
      transform: translateY(0);
    }
    85% {
      opacity: 0;
    }
    100% {
      transform: translateY(-55px);
      opacity: 0;
    }
  }
  .points_wrapper .point:nth-child(1) {
    left: 10%;
    opacity: 1;
    animation-duration: 2.35s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(2) {
    left: 30%;
    opacity: 0.7;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
  }
  .points_wrapper .point:nth-child(3) {
    left: 25%;
    opacity: 0.8;
    animation-duration: 2.2s;
    animation-delay: 0.1s;
  }
  .points_wrapper .point:nth-child(4) {
    left: 44%;
    opacity: 0.6;
    animation-duration: 2.05s;
  }
  .points_wrapper .point:nth-child(5) {
    left: 50%;
    opacity: 1;
    animation-duration: 1.9s;
  }
  .points_wrapper .point:nth-child(6) {
    left: 75%;
    opacity: 0.5;
    animation-duration: 1.5s;
    animation-delay: 1.5s;
  }
  .points_wrapper .point:nth-child(7) {
    left: 88%;
    opacity: 0.9;
    animation-duration: 2.2s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(8) {
    left: 58%;
    opacity: 0.8;
    animation-duration: 2.25s;
    animation-delay: 0.2s;
  }
  .points_wrapper .point:nth-child(9) {
    left: 98%;
    opacity: 0.6;
    animation-duration: 2.6s;
    animation-delay: 0.1s;
  }
  .points_wrapper .point:nth-child(10) {
    left: 65%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.2s;
  }

  .inner {
    z-index: 2;
    gap: 6px;
    position: relative;
    width: auto;
    white-space: nowrap;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    transition: color 0.2s ease-in-out;
  }

  .inner svg.icon {
    width: 18px;
    height: 18px;
    transition: fill 0.1s linear;
  }

  .button:focus svg.icon {
    fill: white;
  }
  .button:hover svg.icon {
    fill: transparent;
    animation:
      dasharray 1s linear forwards,
      filled 0.1s linear forwards 0.95s;
  }
  @keyframes dasharray {
    from {
      stroke-dasharray: 0 0 0 0;
    }
    to {
      stroke-dasharray: 68 68 0 0;
    }
  }
  @keyframes filled {
    to {
      fill: white;
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  padding: 1px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 16px;

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  &::after {
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

  &:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 50px;
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

  &:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    background: radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent);
    position: absolute;
    transition: opacity 0.3s;
  }

  &:hover .inner::before {
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
`;

export default ProjectsPage;
