import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Footer } from '../components/Footer/Footer';
import styled from 'styled-components'; // Import styled-components
import Marquee from 'react-fast-marquee'; // Import Marquee

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
    <section className="hero-section flex min-h-[70vh] flex-col items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md mx-auto mb-6 w-fit rounded-full bg-[#ffffff36] p-2 text-center">
          Explore Our {'>'} Opportunities 📚
        </p>
        <h1 className="mb-2 text-4xl font-bold tracking-widest md:text-4xl">All Opportunities in One Place</h1>
        <h2 className="mb-4 text-6xl font-bold">
          Opportunities <span className="text-[#00a6fb]">Hub</span>
        </h2>
        <p className="text-md md:text-md mx-auto max-w-2xl">
          Curated tools, guides, and learning materials to boost your tech journey.
        </p>
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
    <section id="tags" className="w-full pt-12 sm:py-16">
      <h2 className="text-md text-primary mb-8 text-center font-bold lg:text-xl">Opportunities in one frame</h2>

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
          font-size: 0.875rem;
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
      title: 'Hybrid & Onsite Jobs',
      description: 'Official Hybrid & Onsite Jobs for popular libraries and frameworks.',
      link: '/HybridOnsiteJobs',
      tags: ['docs', 'reference', 'api', 'guides'],
    },
    {
      title: 'Remote Jobs',
      description: 'Courses for learning popular programming languages.',
      link: '/RemoteJobs',
      tags: ['courses', 'programming', 'education'],
    },
    {
      title: 'Internships',
      description: 'Comprehensive notes to simplify your learning process.',
      link: '/Internships',
      tags: ['notes', 'learning', 'Opportunities'],
    },
    {
      title: 'Freelance Work',
      description: 'Discover trending and valuable GitHub repositories.',
      link: '/FreelanceWork',
      tags: ['github', 'opensource', 'projects'],
    },
    {
      title: 'Hackathons & Competitions',
      description: 'Explore powerful AI tools for various use cases.',
      link: '/Hackathons',
      tags: ['ai', 'tools', 'directory'],
    },
    {
      title: 'Tech Events & Tech Fest',
      description: 'Explore contributions from the global tech community.',
      link: '/TechFestEvents',
      tags: ['community', 'contributions', 'projects'],
    },
    {
      title: 'Bootcamps',
      description: 'Find and use open-source libraries to accelerate development.',
      link: '/Bootcamps',
      tags: ['opensource', 'libraries', 'frameworks'],
    },
    {
      title: 'Certifications & Skill Development',
      description: 'Structured roadmaps and guides for developers.',
      link: '/Certifications',
      tags: ['roadmaps', 'guides', 'developers'],
    },
    {
      title: 'OpenSource Program',
      description: 'Opportunities and kits to ace your tech interviews.',
      link: '/OpenSourceProgram',
      tags: ['interviews', 'preparation', 'Opportunities'],
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
        <h2 className="mb-4 text-4xl font-bold text-[#00a6fb]">Top Tech Opportunities</h2>
        <p className="mx-auto mb-8 max-w-3xl px-4 text-xl">
          Everything you need to grow, learn, and build in the tech industry.
        </p>
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
                <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
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
