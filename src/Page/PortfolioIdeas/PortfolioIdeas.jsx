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

const StyledPortfolioCard = styled.div`
  position: relative;
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }
`;

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const VoteButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.voted ? '#00a6fb' : 'rgb(13, 25, 53)')};
  color: ${(props) => (props.voted ? 'white' : '#00a6fb')};
  border: 2px solid #00a6fb;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: rgb(13, 25, 53);
    color: white;
    border: 2px solid #00a6fb;
  }

  .icon {
    font-size: 16px;
  }

  .count {
    font-size: 12px;
    margin-top: 2px;
  }
`;

const PortfolioIdeas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portfolios, setPortfolios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [votes, setVotes] = useState({});
  const [newPortfolio, setNewPortfolio] = useState({
    author: '',
    screenshot: '',
    liveUrl: '',
    repo: '',
    techStack: '',
  });

  useEffect(() => {
    const shuffledPortfolios = shuffleArray(portfoliosData); // Shuffle portfolios
    setPortfolios(shuffledPortfolios); // Load shuffled portfolios from JSON file

    // Load votes from local storage
    const storedVotes = JSON.parse(localStorage.getItem('portfolioVotes')) || {};
    setVotes(storedVotes);
  }, []);

  const handleVote = (index) => {
    const newVotes = { ...votes, [index]: (votes[index] || 0) + 1 };
    setVotes(newVotes);
    localStorage.setItem('portfolioVotes', JSON.stringify(newVotes));
  };

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
                <div className="flex w-full items-center justify-center">Portfolio Display</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              <StyledWrapper>
                <div className="modgp relative inline-block w-full py-3">
                  <div className="relative">
                    <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                      <div className="flex w-full items-center justify-center">Portfolio Display</div>
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
          Add Your Portfolio
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Add Your Portfolio</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>

            {/* Embed the Tally form */}
            <iframe
              src="https://tally.so/embed/npzgEZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filteredPortfolios.map((portfolio, index) => (
          <StyledPortfolioCard key={index} className="rounded-lg p-4 shadow-md">
            <div className="relative mb-4 h-48">
              <img
                src={portfolio.screenshot}
                alt={`${portfolio.author}'s portfolio`}
                className="h-full w-full rounded-lg object-cover"
              />
              <VoteButton voted={votes[index] > 0} onClick={() => handleVote(index)}>
                <div className="icon">▲</div>
                <div className="count">{votes[index] || 0}</div>
              </VoteButton>
            </div>
            <h3 className="mb-2 flex items-center justify-between text-lg font-semibold text-white">
              {portfolio.author}
              <div className="ml-4 flex">
                <a
                  href={portfolio.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-1000 mr-2 flex items-center rounded-full rounded-lg border border-white px-4 py-2 text-[#00a6fb]"
                >
                  <i className="fas fa-code"></i>
                </a>
                <a
                  href={portfolio.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-1000 flex items-center rounded-full rounded-lg border border-white px-4 py-2 text-[#00a6fb]"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.techStack.split(',').map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gray-1000 inline-flex items-center rounded-full border border-[#00a6fb] px-3 py-1 text-xs text-gray-300"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
            {/* <div className="dot" /> */}
          </StyledPortfolioCard>
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
