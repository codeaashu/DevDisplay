import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';

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
          placeholder="Search resources..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-full bg-gray-700 py-3 pl-12 pr-4 text-white placeholder-gray-400 outline-none ring-2 ring-transparent transition-all focus:ring-[#00a6fb]"
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
          Explore Our {'>'} Resources 📚
        </p>
        <h1 className="mb-2 text-4xl font-bold tracking-widest md:text-4xl">All Resources in One Place</h1>
        <h2 className="mb-4 text-6xl font-bold">
          Resource <span className="text-[#00a6fb]">Hub</span>
        </h2>
        <p className="text-md md:text-md mx-auto max-w-2xl">
          Curated tools, guides, and learning materials to boost your tech journey.
        </p>
      </div>
    </section>
  );
};

const ResourceCards = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      title: 'Documentation',
      description: 'Official documentation for popular libraries and frameworks.',
      link: '/documentation',
      tags: ['docs', 'reference', 'api', 'guides'],
    },
    {
      title: 'Programming Language Courses',
      description: 'Courses for learning popular programming languages.',
      link: '/courses',
      tags: ['courses', 'programming', 'education'],
    },
    {
      title: 'Tech-Related Notes',
      description: 'Comprehensive notes to simplify your learning process.',
      link: '/notes',
      tags: ['notes', 'learning', 'resources'],
    },
    {
      title: 'Top GitHub Repositories',
      description: 'Discover trending and valuable GitHub repositories.',
      link: '/github',
      tags: ['github', 'opensource', 'projects'],
    },
    {
      title: 'AI Tools Directory',
      description: 'Explore powerful AI tools for various use cases.',
      link: '/ai-tools',
      tags: ['ai', 'tools', 'directory'],
    },
    {
      title: 'Affordable Learning',
      description: 'Access affordable or free resources for quality learning.',
      link: '/affordable-learning',
      tags: ['learning', 'free', 'resources'],
    },
    {
      title: 'Community Contributions',
      description: 'Explore contributions from the global tech community.',
      link: '/community',
      tags: ['community', 'contributions', 'projects'],
    },
    {
      title: 'Open Source Libraries and Frameworks',
      description: 'Find and use open-source libraries to accelerate development.',
      link: '/libraries',
      tags: ['opensource', 'libraries', 'frameworks'],
    },
    {
      title: 'Bootcamp Listings',
      description: 'Discover top tech bootcamps to jumpstart your career.',
      link: '/bootcamps',
      tags: ['bootcamps', 'career', 'learning'],
    },
    {
      title: 'Roadmaps and Guides',
      description: 'Structured roadmaps and guides for developers.',
      link: '/roadmaps',
      tags: ['roadmaps', 'guides', 'developers'],
    },
    {
      title: 'Interview Preparation Kits',
      description: 'Resources and kits to ace your tech interviews.',
      link: '/interview-kits',
      tags: ['interviews', 'preparation', 'resources'],
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const searchContent = `${resource.title} ${resource.description} ${resource.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <section className="resource-section mx-auto w-full px-4 py-8 text-white lg:max-w-[80%]">
      <div className="mx-auto mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#00a6fb]">Top Tech Resources</h2>
        <p className="mx-auto mb-8 max-w-3xl px-4 text-xl">
          Everything you need to grow, learn, and build in the tech industry.
        </p>
        <div className="mx-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {filteredResources.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-xl text-gray-400">No resources found matching your search.</p>
        </div>
      ) : (
        <div className="grid  grid-cols-1 gap-4 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="resource-card flex h-full flex-col rounded-lg bg-gray-800 p-3 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700 sm:p-4"
            >
              <h3 className="mb-2 text-base font-semibold sm:text-lg">{resource.title}</h3>
              <p className="flex-grow text-xs text-gray-300 sm:text-sm">{resource.description}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {resource.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full bg-gray-700 px-1.5 py-0.5 text-[10px] text-gray-300 sm:px-2 sm:py-1 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-gray-800 py-6 text-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-[#00a6fb]">DevDisplay</h4>
            <p className="mt-1 text-sm">Empowering tech enthusiasts to connect, learn, and grow together.</p>
          </div>

          <div className="flex space-x-6">
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

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-lg hover:text-[#00a6fb]"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 DevDisplay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Resources = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <ResourceCards />
      <Footer />
    </div>
  );
};

export default Resources;
