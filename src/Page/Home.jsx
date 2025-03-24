import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import { Footer } from '../components/Footer/Footer';
import LOGO from './WordMark.png';
import PoweredByDevDisplay from './PoweredByDevDisplay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
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
              231
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
        <h3 className="custom-font my-4 text-2xl tracking-widest md:text-xl">
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
      <div className="mx-auto my-12 max-w-[80%] text-center ">
        <h2 className="custom-font my-4 text-4xl font-bold text-[#00a6fb]">Dive into DevDisplay</h2>
        <p className="custom-font mx-auto my-8 mb-8 max-w-3xl text-xl">
          Whatever you need as a developer, <span style={{ marginRight: '4px' }}></span>
          DevDisplay has it all.
        </p>
        {/* <h2 className="custom-font my-6 text-4xl font-bold text-[#00a6fb]">Discover The Range of Features</h2>
        <p className="custom-font mx-auto my-12 mb-8 max-w-3xl text-xl">
          Whatever you need as a techy, DevDisplay has it all.
        </p> */}
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
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

        <StyledDot>
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
        </StyledDot>

        <StyledDot>
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
        </StyledDot>

        <StyledDot>
          <a
            href="/PortfolioIdeas"
            className="project-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform"
          >
            <span className="absolute inset-0"></span>
            <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Ideas</h3>
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
        </StyledDot>

        <StyledDot>
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
        </StyledDot>

        <StyledDot>
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
        </StyledDot>

        <StyledDot>
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
        </StyledDot>

        <StyledDot>
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
        </StyledDot>

        <StyledDot>
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
        </StyledDot>
      </div>

      {/*Powered By DevDisplay */}
      <div className="my-8 flex justify-center">
        <img src={PoweredByDevDisplay} alt="Dev Display" className="h-auto w-[600px] text-5xl font-bold" />
      </div>

      {/* Tech Projects Powered by DevDisplay */}
      <div className="my-8 grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
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
        </StyledDot>
      </div>
      {/*Adding New Features */}
    </section>
  );
};

const CardSection = () => {
  return (
    <section className="card-section flex items-center justify-center py-0">
      <StyledWrapper>
        <div className="main">
          <div className="card">
            <div className="card-content">
              <div className="h3">
                We believe<span> innovation </span>is limitless...✦
              </div>
              <p className="p">
                Suggest new features you'd love to see on DevDisplay. As a contributor, you're encouraged to think
                beyond and add new, innovative features that can make a difference in the tech ecosystem. Think outside
                the box and introduce features that can be revolutionary for tech enthusiasts worldwide. If you spot a
                gap in the tech world, DevDisplay can be the solution.
              </p>
              <StyledButton onClick={() => window.open('#', '_blank')}>
                <div className="blob1" />
                <div className="inner">Suggest a new feature idea!</div>
              </StyledButton>
              <StyledDotSlow>
                <div className="dot" />
              </StyledDotSlow>
            </div>
          </div>
        </div>
      </StyledWrapper>
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

const supporters = [
  { name: 'Digital Ocean', logo: '/assets/SupportedBy/DigitalOcean.png' },
  { name: 'Git Book', logo: '/assets/SupportedBy/GitBookLight_1.png' },
  { name: 'Melt CD', logo: '/assets/SupportedBy/meltcd.png' },
  { name: 'Microsoft for Startups', logo: '/assets/SupportedBy/MicrosoftForStartups.png' },
  { name: 'MSME', logo: '/assets/SupportedBy/MSME.png' },
  { name: 'Notion', logo: '/assets/SupportedBy/Notion.png' },
  { name: 'Peerlist', logo: '/assets/SupportedBy/Peerlist.png' },
  { name: 'Product Hunt', logo: '/assets/SupportedBy/ProductHunt.png' },
  { name: 'Vercel', logo: '/assets/SupportedBy/Vercel.png' },
];

export const SupportedBy = () => {
  return (
    <div className="py-20">
      <h2 className="custom-font my-10 text-center text-4xl font-bold text-[#00a6fb]">Supported By</h2>

      <div className="relative mx-auto flex max-w-[99vw] space-x-8 overflow-x-hidden">
        {/* First Marquee */}
        <div className="animate-marquee flex space-x-8">
          {supporters.map((sponsor, index) => (
            <div key={index} className="flex h-[80px] w-[160px] flex-shrink-0 items-center justify-center">
              <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Second Marquee */}
        <div className="animate-marquee2 absolute top-0 flex space-x-8">
          {supporters.map((sponsor, index) => (
            <div
              key={index + supporters.length}
              className="flex h-[80px] w-[160px] flex-shrink-0 items-center justify-center"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
            </div>
          ))}
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
      <CardSection />
      <SupportedBy />
      <Footer />
    </div>
  );
};

export default Home;
