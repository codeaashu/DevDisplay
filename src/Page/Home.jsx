import React from 'react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import { Footer } from '../components/Footer/Footer';
import LOGO from './WordMark.png';

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex flex-col  items-center justify-center text-white sm:min-h-screen ">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md bg-[rgba(255, 255, 255, 0.14)] group relative mx-auto mb-10 w-fit overflow-hidden rounded-full border border-white p-2 text-center">
          <span className="animate-border-glow absolute inset-0"></span>
          <a
            href="https://github.com/codeaashu/DevDisplay"
            target="_blank"
            className="relative z-10 text-white transition-all duration-300 group-hover:text-blue-300"
          >
            We're Open Source 🌟 Star Now
          </a>
        </p>

        <style>
          {`
  @font-face {
            font-family: 'CustomFont';
            src: url('./assets/font/MEPHISTO.TTF') format('truetype');
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
    font-family: 'CustomFont', sans-serif;
  }
  `}
        </style>
        <img src={LOGO} alt="Dev Display" className="my-4 h-auto w-[600PX] text-5xl font-bold" />
        <h1 className="custom-font custom-font my-4 text-4xl tracking-widest md:text-4xl">
          One Platform for Global Developers to Fulfill All The Tech Needs
        </h1>
        <p className="text-md md:text-md mx-auto my-4 max-w-4xl">
          {' '}
          {/* Changed my-4 to my-2 */}
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

const TechFeatures = () => {
  return (
    <section className="tech-features-section mt-[60%] max-w-[80%] px-4 py-16 text-white xs:mt-0">
      <div className="mx-auto my-12 max-w-[80%] text-center ">
        <h2 className="my-6 text-4xl font-bold text-[#00a6fb]">All Tech Features in One Place</h2>
        <p className="mx-auto my-12 mb-8 max-w-3xl text-xl">
          Discover a range of tools, resources, and opportunities to enhance your tech journey and skills.
        </p>
      </div>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
        <a
          href="/opportunities"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Opportunities</h3>
            <p>Explore various career and learning opportunities in the tech industry.</p>
          </div>
        </a>

        <a
          href="/Resources"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Resources</h3>
            <p>Access a wide range of learning resources, tools, and libraries to boost your skills.</p>
          </div>
        </a>

        <a
          href="/ProjectShowcase"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Project Showcase</h3>
            <p>Showcase your projects, get feedback, and inspire others to collaborate.</p>
          </div>
        </a>

        <a
          href="/Discussions"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Tech Discussion</h3>
            <p>Engage in tech discussions, share ideas, and stay updated on the latest trends.</p>
          </div>
        </a>

        <a
          href="/IdeaSubmission"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Ideas Submission</h3>
            <p>Submit your innovative ideas, get feedback, and explore collaborations.</p>
          </div>
        </a>

        <a
          href="/PortfolioIdeas"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Portfolio Ideas</h3>
            <p>Get inspired with creative ideas to enhance your portfolio and make an impact.</p>
          </div>
        </a>

        <a
          href="/PortfolioBuilder"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Portfolio Building</h3>
            <p>Learn the best practices to build a standout portfolio that impresses recruiters.</p>
          </div>
        </a>

        <a
          href="/ResumeBuilder"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Resume Building</h3>
            <p>Create a professional resume with tips and templates tailored to the tech industry.</p>
          </div>
        </a>

        <a
          href="/journeys"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Journeys Page</h3>
            <p>
              Explore inspiring stories of achievers, their challenges, and the strategies that led them to success.
            </p>
          </div>
        </a>

        <a
          href="/IndustryTrends"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">Industry Trends & Expert Insights</h3>
            <p>
              Share regular articles and videos on industry trends, expert insights, and career advice to keep engaged
              {/* Share articles and video content regularly to provide industry trends, expert interviews, and in-depth
              analysis. This would keep users updated with the latest trends and offer valuable career advice. */}
            </p>
          </div>
        </a>

        <a
          href="/AiCareer"
          className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
        >
          <div className="feature-card-inner rounded-lg p-[2px]">
            <h3 className="mb-4 text-2xl font-semibold">AI Career Navigator</h3>
            <p>
              Get AI-powered career recommendations tailored to your skills, interests, and goals.
              {/* Get personalized career recommendations based on your skills, interests, and job preferences. The AI
              Career Navigator will analyze your skills and recommend a career path that aligns with your goals. */}
            </p>
          </div>
        </a>
      </div>

      {/* Card for Adding New Features */}
      <a
        href="/https://github.com/codeaashu/DevDisplay"
        className="feature-card mt-6 block rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700"
      >
        <div className="feature-card-inner rounded-lg p-[2px]">
          <h3 className="mb-4 text-2xl font-semibold">
            Want to <span className="text-blue-400">Add New Features</span> ?
          </h3>
          <p>
            Suggest new features you'd love to see and help shape the tech community. Explore inspiring stories of
            achievers, their challenges, and the strategies that led them to success.
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
      <h2 className="my-10 text-center text-4xl font-bold text-[#00a6fb]">Supported By</h2>

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
