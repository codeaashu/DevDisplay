import React from 'react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md mx-auto mb-10 w-fit rounded-full bg-[#ffffff36] p-2 text-center">
          We're Open Source {'>'} Star Now🌟
        </p>
        <h1 className="my-4 text-4xl font-bold tracking-widest md:text-4xl">One Place for all your Tech Needs</h1>
        <h2 className="my-4 text-6xl font-bold">
          Dev <span className="text-[#00a6fb]">Display</span>
        </h2>
        <p className="text-md md:text-md mx-auto my-8 max-w-2xl">Global platform that fulfills all your tech needs</p>
      </div>
      <div className="relative -top-10 left-16 flex h-[400px] w-full max-w-[600px] items-center justify-center md:h-[500px] lg:h-[600px]">
        <Globe />
      </div>
    </section>
  );
};

const TechFeatures = () => {
  return (
    <section className="tech-features-section max-w-[80%] bg-gradient-to-r from-gray-900 via-gray-800 to-black px-4 py-16 text-white">
      <div className="mx-auto my-12 max-w-[80%] text-center">
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
          <p>Suggest new features you'd love to see and help shape the tech community.</p>
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

const SupportedBy = () => {
  return (
    <div className="my-10 bg-gradient-to-r from-gray-900 via-gray-800 to-black py-10">
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

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black py-8 text-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Left section */}
          <div className="mb-6 text-center md:mb-0 md:text-left">
            <h4 className="text-xl font-bold text-[#00a6fb]">DevDisplay</h4>
            <p className="mt-2 text-sm">Empowering tech enthusiasts to connect, learn, and grow together.</p>
          </div>

          {/* Middle section */}
          <div className="mb-6 flex space-x-6 md:mb-0">
            <a href="/about" className="text-sm hover:text-[#00a6fb]">
              About Us
            </a>
            <a href="/contact" className="text-sm hover:text-[#00a6fb]">
              Contact
            </a>
            <a href="/privacy" className="text-sm hover:text-[#00a6fb]">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-[#00a6fb]">
              Terms of Service
            </a>
          </div>

          {/* Right section */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-xl hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-xl hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-[#00a6fb]"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 DevDisplay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <Hero />
      <TechFeatures />
      <SupportedBy />
      <Footer />
    </div>
  );
};

export default Home;
