import React from 'react';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';

const Hero = () => {
  return (
    <section className="hero-section mt-20 flex min-h-screen flex-col items-center justify-center text-white ">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <p className="text-md mx-auto mb-10 w-fit rounded-full bg-[#ffffff36] p-2 text-center">
          <a href="https://github.com/codeaashu/DevDisplay" target="_blank">
            We're Open Source {'>'} Star Now🌟
          </a>
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
    <section className="tech-features-section max-w-[80%] px-4 py-16 text-white">
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
    <div className="my-10 py-10">
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
    </div>
  );
};

export default Home;
