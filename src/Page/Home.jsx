import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import { Footer } from '../components/Footer/Footer';
import LOGO from './WordMark.png';
// import PoweredByDevDisplay from './PoweredByDevDisplay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Marquee from 'react-fast-marquee';
import { Badges } from './Badges';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheckCircle,
} from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
import { SiDevdotto } from 'react-icons/si';

// Timer component is commented out for now, but can be uncommented if needed

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState('');

//   useEffect(() => {
//     const targetDate = new Date('April 17, 2025 20:00:00').getTime();

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         clearInterval(interval);
//         setTimeLeft('v2.0 is here!');
//       } else {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="my-4 text-center">
//       <div className="flex items-center gap-2">
//         <h2 className="custom-font text-1xl flex items-center gap-1 font-bold text-gray-400">
//           <img
//             src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/High%20Voltage.png"
//             alt="High Voltage"
//             width="25"
//             height="25"
//           />
//         </h2>
//         <p className="custom-font text-1xl text-gray-400">{timeLeft}</p>
//       </div>
//     </div>
//   );
// };

const GITHUB_REPO = 'codeaashu/DevDisplay';

const Hero = () => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => setStars('N/A'));
  }, []);

  return (
    <section className="hero-section mt-20 flex flex-col items-center justify-center text-white sm:min-h-screen">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md bg-[rgba(255, 255, 255, 0.14)] group relative mx-auto mb-10 w-fit overflow-hidden rounded-full border border-white p-2 text-center">
          <span className="animate-border-glow absolute inset-0"></span>
          <a
            href="https://github.com/codeaashu/DevDisplay"
            target="_blank"
            rel="noreferrer"
            className="custom-font relative z-10 text-white transition-all duration-300 group-hover:text-blue-300"
          >
            <div style={{ padding: '0 12px' }}>
              <FontAwesomeIcon icon={faGithub} style={{ marginRight: '10px' }} aria-hidden="true" />
              Star on GitHub
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png"
                alt="Glowing Star"
                width="25"
                height="25"
                className="mx-2 inline-block align-middle"
              />
              {stars !== null ? stars : '...'}
            </div>
          </a>
        </p>
        <style>
          {`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

  .custom-font {
    font-family: 'Merriweather Sans', sans-serif;
  }
            
@keyframes border-glow {
  0% {
    transform: translateX(-100%);
    opacity: 0.4;
  }
  50% {
    transform: translateX(100%);
    opacity: 0.3;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0.4;
  }
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
  background: linear-gradient(90deg, rgba(75, 0, 196, 0.78), rgba(39, 0, 103, 0.9), rgba(98, 0, 255, 0.81));
  top: -75%;
  left: -75%;
  opacity: 0.5;
  filter: blur(60px);
  animation: border-glow 4s infinite linear;
}

.group {
  animation: border-pulse 1.5s infinite;
}

.group:hover .animate-border-glow {
  opacity: 0.8;
  filter: blur(70px);
}
  `}
        </style>
        <img src={LOGO} alt="Dev Display" className="my-4 h-auto w-[600PX] text-5xl font-bold" />
        <h3 className="custom-font my-4 text-2xl tracking-widest text-gray-300 md:text-xl">
          One Platform for Global Developers to Fulfill All The Tech Needs!
        </h3>
        <p className="custom-font mx-auto my-4 max-w-4xl text-xl text-[#00a6fb] md:text-2xl">
          {' '}
          Connect ▸ Collab ▸ Code ▸ Create ▸ Conquer
        </p>
      </div>
      <div className="mb-[-80%] mt-2 xs:mb-[-22%] sm:mb-[-15%] md:mb-[-12%] lg:mb-[-10%] xl:mb-[-16%] 2xl:mb-[-14%]">
        {' '}
        {/* Changed mt-4 to mt-2 */}
        {/* <div className="flex items-center justify-center">
          <CountdownTimer />
        </div> */}
        <Globe />
      </div>
      <div className="mb-20"></div>
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

const TechFeatures = () => {
  return (
    <section className="tech-features-section mt-[60%] max-w-[90%] px-4 py-16 text-white xs:mt-0">
      <div className="mx-auto my-12 max-w-[80%] text-center">
        <h2 className="custom-font my-4 text-4xl font-bold text-[#00a6fb]">Dive into DevDisplay</h2>
        <div className="mb-6 mt-4 flex flex-col items-center">
          <p className="max-w-2xl text-center text-lg text-gray-400">
            Whatever you need as a developer, DevDisplay has it all.
          </p>
        </div>
        {/* <h2 className="custom-font my-6 text-4xl font-bold text-[#00a6fb]">Discover The Range of Features</h2>
        <p className="custom-font mx-auto my-12 mb-8 max-w-3xl text-xl">
          Whatever you need as a techy, DevDisplay has it all.
        </p> */}
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3">
        <StyledDot>
          <a
            href="/opportunities"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Opportunities</h3>
                <p>Explore various career and learning opportunities in the tech industry.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/opportunities')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/Resources"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resources</h3>
                <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/Resources')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/ProjectShowcase"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Project Showcase</h3>
                <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/ProjectShowcase')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        {/* <StyledDot>
          <a
            href="/Discussions"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Tech Discussion</h3>
                <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/Discussions')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        {/* <StyledDot>
          <a
            href="/IdeaSubmission"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Ideas Submission</h3>
                <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/IdeaSubmission')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        <StyledDot>
          <a
            href="/PortfolioIdeas"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Showcase</h3>
                <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/PortfolioIdeas')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="https://github-legacy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">GitHub Legacy</h3>
                <p>Transform your GitHub journey into a professional resume in seconds</p>
              </div>
              <StyledButton
                onClick={() => {
                  window.location.href = 'https://github-legacy.vercel.app';
                  window.open('_blank');
                }}
              >
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resume Builder</h3>
                <p>Transform your GitHub journey into a professional resume in seconds</p>
              </div>
              <StyledButton
                onClick={() => {
                  window.location.href = '/Resume';
                  window.open('_blank');
                }}
              >
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        {/* <StyledDot>
          <a
            href="/PortfolioBuilder"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Building</h3>
                <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/PortfolioBuilder')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        {/* <StyledDot>
          <a
            href="/ResumeBuilder"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resume Building</h3>
                <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/ResumeBuilder')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        {/* <StyledDot>
          <a
            href="/AIToolsHub"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">AI Tools Hub</h3>
                <p>The ultimate hub for powerful and innovative AI tools, all in one place.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/AIToolsHub')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        {/* <StyledDot>
          <a
            href="/journeys"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Journeys Page</h3>
                <p>
                  Explore inspiring stories of achievers, their challenges, and the strategies that led them to success.
                </p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/journeys')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        {/* <StyledDot>
          <a
            href="/IndustryTrends"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Industry Trends</h3>
                <p>
                  Share regular articles and videos on industry trends, expert insights, and career advice to keep
                  engaged.
                </p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/IndustryTrends')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

        {/* <StyledDot>
          <a
            href="/AiCareer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">AI Career Guide</h3>
                <p>Get AI-powered career recommendations tailored to your skills, interests, and goals.</p>
              </div>
              <StyledButton onClick={() => (window.location.href = '/AiCareer')}>
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}
      </div>
      {/* <div style={{ margin: '100px 0' }}></div> */}
      {/*Powered By DevDisplay */}
      {/* <div className="my-8 flex justify-center">
        <img src={PoweredByDevDisplay} alt="Dev Display" className="h-auto w-[600px] text-5xl font-bold" />
      </div> */}

      {/* Tech Projects Powered by DevDisplay */}
      {/* <div className="my-8 grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4"> */}
      {/* <StyledDot>
          <a
            href="https://github-legacy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">GitHub Legacy</h3>
                <p>Transform your GitHub journey into a professional resume in seconds</p>
              </div>
              <StyledButton
                onClick={() => {
                  window.location.href = 'https://github-legacy.vercel.app';
                  window.open('_blank');
                }}
              >
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="https://github-legacy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resume Builder</h3>
                <p>Transform your GitHub journey into a professional resume in seconds</p>
              </div>
              <StyledButton
                onClick={() => {
                  window.location.href = 'https://github-legacy.vercel.app';
                  window.open('_blank');
                }}
              >
                <div className="blob1" />
                <div className="inner">Explore Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot> */}

      {/*<StyledDot>
          <a
            href="/Library"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">DevDisplay Library</h3>
                <p>Coming Soon - OpenSource ui component library!</p>
              </div>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Visit Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/OnlineCompiler"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Online Compiler</h3>
                <p>Coming Soon - Online Compiler where you can run your code online!</p>
              </div>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Visit Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>

        <StyledDot>
          <a
            href="/TechQuiz"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Tech Quiz</h3>
                <p>Coming Soon - Test your tech knowledge on DevDisplay!</p>
              </div>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Visit Now</div>
              </StyledButton>
            </div>
            <div className="dot" />
          </a>
        </StyledDot>*/}
      {/* </div>  */}
      {/*Adding New Features */}
    </section>
  );
};

const Tags = () => {
  const tags = [
    'Portfolio Builder',
    'Idea Submission',
    'Journey Showcase',
    'DesignDisplay',
    'Dev Discussions',
    'DevDisplay UI Library',
    'DevDisplay Compiler',
    'DevDisplay Competitions',
    'DevDisplay IT Services',
    'DevDisplay Legacy',
    'DevDisplay Marketplace',
    'DevDisplay Ecommerce',
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h2 className="custom-font my-10 text-center text-2xl font-bold text-[#00a6fb]">
        Features Coming Soon on DevDisplay!
      </h2>

      {/* Right to Left Scrolling */}
      <Marquee gradient={false} speed={30} pauseOnHover={true} loop={0} className="w-full">
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
      <Marquee gradient={false} speed={30} pauseOnHover={true} loop={0} direction="right" className="w-full">
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
          font-size: 1rem;
          text-align: center;
          min-width: max-content;
        }
      `}</style>
    </section>
  );
};

const CardSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <section className="card-section flex items-center justify-center py-0">
      <StyledWrapper>
        <div className="main">
          <div className="card">
            <div className="card-content">
              <div className="h3">
                We believe<span> innovation </span>is limitless...✦
              </div>
              <p className="p" style={{ fontSize: '1rem', lineHeight: '1.5rem' }}>
                Suggest new features you'd love to see on DevDisplay! As a tech enthusiast and developer, you're
                encouraged to think beyond—think outside the box. Suggest and add new, innovative features that could
                revolutionize the tech world and make a difference in the tech ecosystem. If you spot a gap in the tech
                industry, DevDisplay can be the solution. You can also give us brutal and honest feedback—Roast Us! It
                helps us improve and make DevDisplay even better. Here, your ideas matter, your code matters, you
                matter.
              </p>
              <div className="flex gap-12">
                <StyledButton
                  onClick={() =>
                    openModal(
                      'https://tally.so/embed/npZYxy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
                    )
                  }
                >
                  <div className="blob1" />
                  <div className="inner">✨ Suggest new idea!</div>
                </StyledButton>
                <StyledButton
                  onClick={() =>
                    openModal(
                      'https://tally.so/embed/mVxWG6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
                    )
                  }
                >
                  <div className="blob1" />
                  <div className="inner">💀 Roast DevDisplay!</div>
                </StyledButton>
              </div>
              <StyledDotSlow>
                <div className="dot" />
              </StyledDotSlow>
            </div>
          </div>
        </div>
      </StyledWrapper>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 text-white">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">You Matter! Your Feedback Matter!</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white">
                X
              </button>
            </div>

            <iframe
              src={modalContent}
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
    </section>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 0; /* Reduced padding */

  .h3 {
    color: #fff;
    font-weight: 800;
    font-size: 2rem; /* Increase font size */
    text-decoration: none; /* Remove underline from "We believe" */
    text-transform: none; /* Remove uppercase transformation */
  }

  .h3 span {
    font-weight: 800;
    background: linear-gradient(125deg, #b663ff, #13c1ef);
    text-transform: lowercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .card {
    width: 100%; /* Increase the width to 100% */
    max-width: 1200px; /* Increase the maximum width */
    position: relative;
    background-color: rgb(16 16 16);
    border: 1px solid rgb(255 255 255 / 5%);
    border-radius: 1.5rem;
    padding: 1rem; /* Increase padding */
  }

  .card:after {
    content: '';
    height: 70px;
    width: 1px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent, mediumslateblue, transparent);
    box-shadow: 0 0 30px mediumslateblue;
    opacity: 0;
    animation: moveBorder 12s linear infinite;
  }

  @keyframes moveBorder {
    0% {
      top: 0;
      left: 0;
      height: 70px;
      width: 1px;
      opacity: 1;
    }
    25% {
      top: 0;
      left: calc(100% - 1px);
      height: 70px;
      width: 1px;
      opacity: 1;
    }
    50% {
      top: calc(100% - 70px);
      left: calc(100% - 1px);
      height: 70px;
      width: 1px;
      opacity: 1;
    }
    75% {
      top: calc(100% - 70px);
      left: 0;
      height: 70px;
      width: 1px;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      height: 70px;
      width: 1px;
      opacity: 1;
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-position: 50% 50%;
    background-size: 1.1rem 1.1rem;
    padding: 4rem; /* Increase padding */
    border-radius: 1.25rem;
    overflow: hidden;
  }

  .card-content .h1,
  .h3,
  .p {
    text-align: center;
  }

  .card-content .h1 {
    color: rgb(250 249 246);
    font-size: 3.6rem; /* Increase font size */
  }

  .card-content .h3 {
    color: #fff;
    font-size: 2rem; /* Increase font size */
  }

  .card-content .p {
    color: rgb(255 255 255 / 75%);
    line-height: 1.5rem; /* Increase line height */
    font-size: 1.2rem; /* Increase font size */
    margin: 1rem 0; /* Add margin to increase space above and below */
  }

  @media (max-width: 700px) {
    .card {
      width: calc(100% - 2rem);
      margin: 0rem 1rem;
      padding: 1.5rem; /* Adjust padding */
      border-radius: 1rem;
    }
  }

  @media (max-width: 600px) {
    .card-content {
      padding: 3rem;
    }

    .card-content .h1 {
      font-size: 2.8rem; /* Adjust font size */
    }
  }
`;

const StyledDotSlow = styled.div`
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
    animation: moveDotSlow 12s linear infinite; /* Slower animation */
  }

  @keyframes moveDotSlow {
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

const supporterLogos = [
  '/assets/SupportedBy/DigitalOcean.png',
  '/assets/SupportedBy/meltcd.png',
  '/assets/SupportedBy/MicrosoftForStartups.png',
  '/assets/SupportedBy/MSME.png',
  '/assets/SupportedBy/Notion.png',
  '/assets/SupportedBy/Peerlist.png',
  '/assets/SupportedBy/ProductHunt.png',
  '/assets/SupportedBy/Vercel.png',
  '/assets/SupportedBy/GitBook.png',
  '/assets/SupportedBy/GoogleForStartups.png',
];

// Ensure this is the only declaration of SupportersComponent
export const SupportersComponent = () => {
  return (
    <section id="supporters" className="container pt-12 sm:py-16">
      <h2 className="custom-font my-10 text-center text-4xl font-bold text-[#00a6fb]">Supported By</h2>

      {/* Right to Left Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0}>
        {supporterLogos.map((logoUrl, index) => (
          <div key={index} className="flex items-center gap-16 px-8">
            <img src={logoUrl} alt={`Supporters ${index + 1}`} className="w-21 h-20" />
          </div>
        ))}
      </Marquee>

      {/* Left to Right Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0} direction="right">
        {supporterLogos.map((logoUrl, index) => (
          <div key={index} className="flex items-center gap-16 px-8">
            <img src={logoUrl} alt={`Supporters ${index + 1}`} className="w-21 h-20" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

const DeveloperCard = () => {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-xl border p-4 md:flex-row"
      style={{ borderColor: '#00a6fb', backgroundColor: 'rgba(1, 11, 31, 0.58)', color: '#e2e8f0' }}
    >
      {/* Left Developer Card */}
      <div className="flex w-full flex-col items-start p-4 md:w-1/2">
        <div className="flex items-center space-x-4">
          <img src="/CREATOR.jpg" alt="Developer" className="h-20 w-20 rounded-full object-cover" />
          <div>
            <h2 className="flex items-center text-xl font-bold">
              Ashutosh Singh <FaCheckCircle className="ml-2 text-blue-400" />
            </h2>
            <p className="flex items-center gap-2 text-sm text-gray-300">
              <FaMapMarkerAlt className="text-blue-400" /> Mostly On DevDisplay
            </p>
            <div className="mt-2 flex gap-2 text-sm">
              <span className="rounded bg-gray-700 px-2 py-1">WEB APP Development</span>
              <span className="rounded bg-gray-700 px-2 py-1">Web Designing</span>
            </div>
          </div>
        </div>

        <p className="mt-4">
          Building 🌐 Paradise for Developers – <strong>DevDisplay</strong>
        </p>

        <div className="mt-4 flex items-center gap-4 text-xl">
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
          <FaDiscord />
          <IoMdShareAlt />
          <SiDevdotto />
          <FaEnvelope />
        </div>
      </div>

      {/* Right Verification Steps */}
      <div className="mt-6 flex w-full flex-col items-center justify-center md:mt-0 md:w-1/2">
        <h3 className="mb-2 flex items-center gap-2 text-2xl font-semibold">
          <FaCheckCircle className="text-blue-400" />
          Verify Your Developer Profile
        </h3>
        <p className="mb-4 text-center text-sm">Follow this step to get a blue tick on your developer profile</p>
        <style>
          {`
  @keyframes arrowMove {
    0% { transform: translateX(0); }
    50% { transform: translateX(6px); }
    100% { transform: translateX(0); }
  }

  .arrow-animate {
    animation: arrowMove 1.2s infinite;
  }
`}
        </style>

        <div className="mt-6 flex items-center justify-center gap-6">
          {/* Box 1 */}
          <a
            href="/"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-[#00A6FB] p-4">
              <img src="/assets/Profile.png" alt="Profile" className="h-16 w-16 object-contain" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#e2e8f0]">Add Your Profile</p>
          </a>

          {/* Arrow 1 */}
          <div className="flex h-24 items-center justify-center">
            <span className="arrow-animate text-3xl text-[#00A6FB]">→</span>
          </div>

          {/* Box 2 */}
          <a
            href="/PortfolioIdeas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-[#00A6FB] p-4">
              <img src="/assets/Portfolio.png" alt="Portfolio" className="h-16 w-16 object-contain" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#e2e8f0]">Add Your Portfolio</p>
          </a>

          {/* Arrow 2 */}
          <div className="flex h-24 items-center justify-center">
            <span className="arrow-animate text-3xl text-[#00A6FB]">→</span>
          </div>

          {/* Box 3 */}
          <a
            href="/ProjectShowcase"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-[#00A6FB] p-4">
              <img src="/assets/Project.png" alt="Projects" className="h-16 w-16 object-contain" />
            </div>
            <p className="mt-2 text-sm font-medium text-[#e2e8f0]">Add minimum 5 projects</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="background-wrapper bg-gray-400">
      <Navbar />
      <Hero />
      <TechFeatures />
      <Tags />
      <div style={{ margin: '40px 0' }}></div>
      <CardSection />
      <div style={{ margin: '30px 0' }}></div>
      <Badges />
      <div style={{ margin: '20px 0' }}></div>
      <DeveloperCard />
      <SupportersComponent />
      <Footer />
    </div>
  );
};

export default Home;
