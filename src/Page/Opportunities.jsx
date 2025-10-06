import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Footer } from '../components/Footer/Footer';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
            <ArrowLeft className="h-5 w-5" />
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

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search Opportunities..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-full border border-[#00a6fb] bg-[rgba(15,27,53,0.9)] py-3 pl-12 pr-4 text-white placeholder-gray-400 outline-none ring-2 ring-transparent transition-all focus:ring-[#00a6fb]"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero-section mb-0 flex min-h-[10vh] flex-col items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        {/* <h2 className="mb-4 text-6xl font-bold">
          Opportunities <span className="text-[#00a6fb]">Hub</span>
        </h2> */}
        {/* <p className="text-md md:text-md mx-auto max-w-2xl">
         One Platform, Endless Tech Opportunities
        </p> */}
        <div className="my-6"></div>
        {/* <h1 className="mb-2 text-6xl font-bold tracking-widest md:text-4xl"><span className="text-[#00a6fb]">Unlock All Tech Opportunities in One Place</span></h1> */}
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center">Opportunities Hub</div>
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
    </section>
  );
};

const Tags = () => {
  const tags = [
    'Hybrid Jobs',
    'Onsite Jobs',
    'Remote Jobs',
    'Internships',
    'Freelancing',
    'Offline Hackathons',
    'Online Hackathons',
    'Competitions',
    'Tech Events',
    'Tech Fest',
    'Bootcamps',
    'Certifications',
    'Skill Development',
    'OpenSource Program',
    'Coding Challenges',
    'Mentorship Programs',
    'Workshops',
    'Networking Events',
    'Scholarships',
    'Startup Incubators',
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h1 className="text-md text-primary mb-8 text-center font-bold text-[#00a6fb] lg:text-2xl">
        Unlock All Tech Opportunities in One Place
      </h1>
      {/* <h2 className="text-md text-primary mb-8 text-center text-[#00a6fb] font-bold lg:text-2xl">One Platform, Endless Tech Opportunities</h2> */}

      {/* Right to Left Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0} className="w-full">
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      <div className="my-4"></div>

      {/* Left to Right Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0} direction="right" className="w-full">
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      <style jsx>{`
        .tag-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #00a6fb;
          background-color: rgba(1, 11, 31, 0.58);
          color: #e2e8f0;
          font-size: 0.915rem;
          text-align: center;
          min-width: max-content;
        }
      `}</style>
    </section>
  );
};

const OpportunitiesCards = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const Opportunities = [
    {
      title: 'Hackathons',
      description: 'Explore & Participate in Global Hackathons in One Place.',
      link: '/Hackathons',
      tags: ['Hackathons', 'Online Hackathons', 'Offline Hackathons'],
    },
    {
      title: 'Tech Events',
      description: 'Explore & Participate in Global Tech Events, Fest, Conferences & Meetups.',
      link: '/Events',
      tags: ['Tech Events', 'Tech Fest', 'Tech Conferences ', 'Tech Meetups'],
    },
    {
      title: 'OpenSource Program',
      description: 'Explore & Participate in Global OpenSource Programs.',
      link: '/OpenSource',
      tags: ['OpenSource Program', 'GSOC', 'Hacktoberfest', 'Outreachy', 'MLH Fellowship', 'GSSOC', 'SWOC'],
    },
    {
      title: 'Jobs',
      description: 'Explore & Find the best jobs Hybrid, Onsite & Remote.',
      link: '/Jobs',
      tags: ['Jobs', 'Hybrid', 'Onsite', 'Remote'],
    },
    {
      title: 'Internships',
      description: 'Explore & Find the best internships Online, Offline.',
      link: '/Internships',
      tags: ['Internships', 'Online Internships', 'Offline Internships'],
    },
    {
      title: 'Freelancing',
      description: 'Explore & Find the best freelancing work for any job.',
      link: '/Freelancing',
      tags: ['Freelancing', 'Work', 'Job', 'Online Work', 'Offline Work', 'Remote Work'],
    },
    {
      title: 'Bootcamps',
      description: 'Explore & Participate in Global Bootcamps to levelup yourself.',
      link: '/Bootcamps',
      tags: ['Bootcamps', 'Tech Bootcamps', 'Coding Bootcamps'],
    },
    {
      title: 'Certifications',
      description: 'Explore & Find the best certifications to boost your career.',
      link: '/Certifications',
      tags: ['Certifications', 'Tech Certifications', 'Coding Certifications', 'Skill Certifications'],
    },
    {
      title: 'Competitions',
      description: 'Explore & Participate in Global Tech Competitions.',
      link: '/Competitions',
      tags: ['Competitions', 'Tech Competitions', 'Coding Competitions'],
    },
  ];

  const filteredOpportunities = Opportunities.filter((Opportunities) => {
    const searchContent =
      `${Opportunities.title} ${Opportunities.description} ${Opportunities.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <section className="Opportunities-section mx-auto w-full px-4 py-8 text-white lg:max-w-[80%]">
      <div className="mx-auto mb-8 text-center">
        {/* <h2 className="mb-4 text-4xl font-bold text-[#00a6fb]">Top Tech Opportunities</h2>
        <p className="mx-auto mb-8 max-w-3xl px-4 text-xl">
          Everything you need to grow, learn, and build in the tech industry.
        </p> */}
        <div className="mx-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {filteredOpportunities.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-xl text-gray-400">No Opportunities found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredOpportunities.map((Opportunities, index) => (
            <StyledDot key={index}>
              <a
                href={Opportunities.link}
                className="Opportunities-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:transform"
              >
                <span className="absolute inset-0"></span>
                <div className="project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">{Opportunities.title}</h3>
                    <p className="flex-grow text-xs text-gray-300 sm:text-sm">{Opportunities.description}</p>
                    <div className="mb-4 mt-2 flex flex-wrap justify-center gap-1">
                      {Opportunities.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full border border-[#00a6fb] bg-gray-900 px-1.5 py-0.5 text-[10px] text-gray-300 sm:px-2 sm:py-1 sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <StyledButton onClick={() => (window.location.href = '/opportunities')}>
                    <div className="blob1" />
                    <div className="inner">Explore Now</div>
                  </StyledButton>
                </div>
                <div className="dot" />
              </a>
            </StyledDot>
          ))}
        </div>
      )}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

          @font-face {
            font-family: "MerriweatherSans-SemiBold";
            src: url('/fonts/MerriweatherSans-SemiBold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          @keyframes border-pulse {
            0% {
              border-color: rgba(0, 172, 255, 0.5);
              box-shadow: 0 0 10px rgba(0, 172, 255, 0.3);
            }
            50% {
              border-color: rgba(0, 172, 255, 0.8);
              box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
            }
            100% {
              border-color: rgba(0, 172, 255, 0.5);
              box-shadow: 0 0 10px rgba(0, 172, 255, 0.3);
            }
          }

          .animate-border-glow {
            position: absolute;
            width: 250%;
            height: 250%;
            background: linear-gradient(90deg, rgba(0, 172, 255, 0.6), rgba(1, 114, 142, 0.9), rgba(0, 172, 255, 0.6));
            top: -75%;
            left: -75%;
            opacity: 0.5;
            filter: blur(10px);
            animation: border-glow 4s infinite linear;
          }

          .group:hover .animate-border-glow {
            opacity: 0.8;
            filter: blur(15px);
          }

          .group:hover {
            animation: border-pulse 1.5s infinite;
          }

          .custom-font {
            font-family: "MerriweatherSans-SemiBold", sans-serif;
          }

          .Opportunities-section {
            font-family: 'Merriweather Sans', sans-serif;
          }
        `}
      </style>
    </section>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem; /* Smaller font size */
  border-radius: 12px; /* Smaller border radius */
  border: none;
  padding: 1px; /* Smaller padding */
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 16px; /* Add margin to increase space */

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
    width: 50px; /* Smaller blob size */
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
    padding: 10px 20px; /* Smaller inner padding */
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

const StyledDot = styled.div`
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

const Opportunities = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Tags />
      <OpportunitiesCards />
      <Footer />
    </div>
  );
};

export default Opportunities;
