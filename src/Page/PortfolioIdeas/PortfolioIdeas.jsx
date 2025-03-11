import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer/Footer';
import portfoliosData from './portfolio.json'; // Import the JSON file
import styled from 'styled-components';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
        <div className="text-2xl font-bold">
          <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-12 w-12" />
        </div>
      </div>
    </nav>
  );
};

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
`;

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search portfolios..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full rounded-lg bg-gray-700 px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a6fb]"
      />
      <svg
        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

const PortfolioIdeas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPortfolio, setNewPortfolio] = useState({
    author: '',
    screenshot: '',
    liveUrl: '',
    repo: '',
    techStack: '',
  });

  useEffect(() => {
    setPortfolios(portfoliosData); // Load portfolios from JSON file
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPortfolios([...portfolios, newPortfolio]);
    setNewPortfolio({
      author: '',
      screenshot: '',
      liveUrl: '',
      repo: '',
      techStack: '',
    });
    setIsModalOpen(false);
  };

  const filteredPortfolios = portfolios.filter((portfolio) =>
    portfolio.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="my-0"></div>
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center">Portfolio Showcase</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              <StyledWrapper>
                <div className="modgp relative inline-block w-full py-3">
                  <div className="relative">
                    <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                      <div className="flex w-full items-center justify-center">Portfolio Showcase</div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      id="style-AQliM"
                      className="animate-magic-sparkle style-AQliM pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-WCb99"
                      className="animate-magic-sparkle style-WCb99 pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-dBNZV"
                      className="animate-magic-sparkle style-dBNZV pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-tiisO"
                      className="animate-magic-sparkle style-tiisO pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-re9B7"
                      className="animate-magic-sparkle style-re9B7 pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-BKG4G"
                      className="animate-magic-sparkle style-BKG4G pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-NaoVe"
                      className="animate-magic-sparkle style-NaoVe pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-pwIlv"
                      className="animate-magic-sparkle style-pwIlv pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-QmcAd"
                      className="animate-magic-sparkle style-QmcAd pointer-events-none absolute z-10"
                    >
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
                    <div
                      id="style-VG2eL"
                      className="animate-magic-sparkle style-VG2eL pointer-events-none absolute z-10"
                    >
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
          </div>
        </StyledWrapper>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <div className="w-64">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-[#00a6fb] px-4 py-2 text-white transition-colors hover:bg-[#0089d2]"
        >
          Add Portfolio
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 text-white">
            {/* ... (Modal content remains the same) */}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredPortfolios.map((portfolio, index) => (
          <div key={index} className="rounded-lg bg-gray-800 p-4 shadow-md">
            <div className="relative mb-4 h-48">
              <img
                src={portfolio.screenshot}
                alt={`${portfolio.author}'s portfolio`}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-80">
                <a
                  href={portfolio.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 rounded-lg bg-[#00a6fb] px-4 py-2 text-white"
                >
                  View Live
                </a>
                <a
                  href={portfolio.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#00a6fb] px-4 py-2 text-white"
                >
                  View Code
                </a>
              </div>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{portfolio.author}</h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.techStack.split(',').map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center rounded-full border border-[#00a6fb] bg-gray-900 px-3 py-1 text-xs text-gray-300"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="background-wrapper1 flex min-h-screen flex-col bg-gray-900">
      <Navbar />
      <div className="flex-grow">
        <PortfolioIdeas />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
