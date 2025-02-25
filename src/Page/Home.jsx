import React from 'react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import { Footer } from '../components/Footer/Footer';
import LOGO from './WordMark.png';
import PoweredByDevDisplay from './PoweredByDevDisplay.png';

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex flex-col  items-center justify-center text-white sm:min-h-screen ">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md bg-[rgba(255, 255, 255, 0.14)] group relative mx-auto mb-10 w-fit overflow-hidden rounded-full border border-white p-2 text-center">
          <span className="animate-border-glow absolute inset-0"></span>
          <a
            href="https://github.com/codeaashu/DevDisplay"
            target="_blank"
            rel="noreferrer"
            className="custom-font relative z-10 text-white transition-all duration-300 group-hover:text-blue-300"
          >
            We're Open Source 🌟 Star Now
          </a>
        </p>

        <style>
          {`
  @font-face {
            font-family: "MerriweatherSans-SemiBold";
            src: url('/fonts/MerriweatherSans-SemiBold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
            
  @keyframes border-glow {
    0% {
      transform: rotate(0deg) translateX(-100%);
      opacity: 0.4;
    }
    50% {
      transform: rotate(180deg) translateX(100%);
      opacity: 0.3;
    }
    100% {
      transform: rotate(360deg) translateX(-100%);
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
  `}
        </style>
        <img src={LOGO} alt="Dev Display" className="my-4 h-auto w-[600PX] text-5xl font-bold" />
        <h1 className="custom-font my-4 text-4xl tracking-widest md:text-4xl">
          One Platform for Global Developers to Fulfill All The Tech Needs
        </h1>
        <p className="custom-font text-md md:text-md mx-auto my-4 max-w-4xl text-[#00a6fb]">
          {' '}
          CONNECT ▸ COLLAB ▸ CODE ▸ CREATE ▸ CONQUER
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

const TechFeatures = () => {
  return (
    <section className="tech-features-section mt-[60%] max-w-[80%] px-4 py-16 text-white xs:mt-0">
      <div className="mx-auto my-12 max-w-[80%] text-center ">
        <h2 className="custom-font my-6 text-4xl font-bold text-[#00a6fb]">Discover The Range of Features</h2>
        <p className="custom-font mx-auto my-12 mb-8 max-w-3xl text-xl">
          Whatever you need as a techy, DevDisplay has it all.
        </p>
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <a
          href="/opportunities"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Opportunities</h3>
            <p>Explore various career and learning opportunities in the tech industry.</p>
            <button
              onClick={() => (window.location.href = '/opportunities')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/Resources"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resources</h3>
            <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
            <button
              onClick={() => (window.location.href = '/Resources')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/ProjectShowcase"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Project Showcase</h3>
            <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
            <button
              onClick={() => (window.location.href = '/ProjectShowcase')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/Discussions"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Tech Discussion</h3>
            <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
            <button
              onClick={() => (window.location.href = '/Discussions')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/IdeaSubmission"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Ideas Submission</h3>
            <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
            <button
              onClick={() => (window.location.href = '/IdeaSubmission')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/PortfolioIdeas"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Ideas</h3>
            <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
            <button
              onClick={() => (window.location.href = '/PortfolioIdeas')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/PortfolioBuilder"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Portfolio Building</h3>
            <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
            <button
              onClick={() => (window.location.href = '/PortfolioBuilder')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/ResumeBuilder"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Resume Building</h3>
            <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
            <button
              onClick={() => (window.location.href = '/ResumeBuilder')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/AIToolsHub"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">AI Tools Hub</h3>
            <p>The ultimate hub for powerful and innovative AI tools, all in one place.</p>
            <button
              onClick={() => (window.location.href = '/AIToolsHub')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/journeys"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Journeys Page</h3>
            <p>
              Explore inspiring stories of achievers, their challenges, and the strategies that led them to success.
            </p>
            <button
              onClick={() => (window.location.href = '/journeys')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/IndustryTrends"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Industry Trends</h3>
            <p>
              Share regular articles and videos on industry trends, expert insights, and career advice to keep engaged
            </p>
            <button
              onClick={() => (window.location.href = '/IndustryTrends')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>

        <a
          href="/AiCareer"
          className="feature-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <span className="absolute inset-0"></span>
          <div className="custom-font feature-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">AI Career Guide</h3>
            <p>Get AI-powered career recommendations tailored to your skills, interests, and goals.</p>
            <button
              onClick={() => (window.location.href = '/AiCareer')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Explore Now
            </button>
          </div>
        </a>
      </div>

      {/*Powered By DevDisplay */}
      <div className="my-8 flex justify-center">
        <img src={PoweredByDevDisplay} alt="Dev Display" className="h-auto w-[600px] text-5xl font-bold" />
      </div>

      {/* Tech Projects Powered by DevDisplay */}
      <div className="my-8 grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://github-legacy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="custom-font project-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">GitHub Legacy</h3>
            <p>Transform your GitHub journey into a professional resume in seconds</p>
            <button
              onClick={() => window.open('https://github-legacy.vercel.app/', '_blank')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Visit Now
            </button>
          </div>
        </a>

        <a
          href="https://github.com/codeaashu/CopyButton"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="custom-font project-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">DevDisplay Library</h3>
            <p>Coming Soon - OpenSource ui component library!</p>
            <button
              onClick={() => window.open('#', '_blank')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Visit Now
            </button>
          </div>
        </a>

        <a
          href="https://randomproject1.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="custom-font project-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Online Compiler</h3>
            <p>Coming Soon - Online Compiler where you can run your code online!</p>
            <button
              onClick={() => window.open('https://randomproject1.example.com', '_blank')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Visit Now
            </button>
          </div>
        </a>

        <a
          href="https://randomproject2.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card group relative block rounded-lg border border-white bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="custom-font project-card-inner relative z-10 rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Tech Quiz</h3>
            <p>Coming Soon - Test your tech knowledge on DevDisplay!</p>
            <button
              onClick={() => window.open('#', '_blank')}
              className="mt-4 rounded border border-white px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Visit Now
            </button>
          </div>
        </a>
      </div>

      {/*Adding New Features */}
      <a
        href="/https://github.com/codeaashu/DevDisplay"
        className="feature-card mt-6 block rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
      >
        <div className="custom-font feature-card-inner rounded-lg p-[2px]">
          <h3 className="mb-4 text-2xl font-semibold">
            <span className="text-blue-400">Suggest a new feature idea!</span>
          </h3>
          <p>
            Suggest new features you'd love to see on DevDisplay. We believe innovation is limitless. As a contributor,
            you're encouraged to think beyond and add new, innovative features that can make a difference in the tech
            ecosystem. Think outside the box and introduce features that can be revolutionary for tech enthusiasts
            worldwide. If you spot a gap in the tech world, DevDisplay can be the solution.
          </p>
        </div>
      </a>
    </section>
  );
};

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
            <div key={index} className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center">
              <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Second Marquee */}
        <div className="animate-marquee2 absolute top-0 flex space-x-8">
          {supporters.map((sponsor, index) => (
            <div
              key={index + supporters.length}
              className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center"
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
      <SupportedBy />
      <Footer />
    </div>
  );
};

export default Home;
