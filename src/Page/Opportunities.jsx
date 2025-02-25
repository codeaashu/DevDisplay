import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Footer } from '../components/Footer/Footer';

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
          placeholder="Search Opportunitiess..."
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
          Explore Our {'>'} Opportunitiess 📚
        </p>
        <h1 className="mb-2 text-4xl font-bold tracking-widest md:text-4xl">All Opportunitiess in One Place</h1>
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
      tags: ['notes', 'learning', 'Opportunitiess'],
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
      description: 'Opportunitiess and kits to ace your tech interviews.',
      link: '/OpenSourceProgram',
      tags: ['interviews', 'preparation', 'Opportunitiess'],
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
        <h2 className="mb-4 text-4xl font-bold text-[#00a6fb]">Top Tech Opportunitiess</h2>
        <p className="mx-auto mb-8 max-w-3xl px-4 text-xl">
          Everything you need to grow, learn, and build in the tech industry.
        </p>
        <div className="mx-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {filteredOpportunities.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-xl text-gray-400">No Opportunitiess found matching your search.</p>
        </div>
      ) : (
        <div className="grid  grid-cols-1 gap-4 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredOpportunities.map((Opportunities, index) => (
            <a
              key={index}
              href={Opportunities.link}
              className="Opportunities-card flex h-full flex-col rounded-lg bg-gray-800 p-3 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700 sm:p-4"
            >
              <h3 className="mb-2 text-base font-semibold sm:text-lg">{Opportunities.title}</h3>
              <p className="flex-grow text-xs text-gray-300 sm:text-sm">{Opportunities.description}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {Opportunities.tags.slice(0, 2).map((tag, tagIndex) => (
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

const Opportunities = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <OpportunitiesCards />
      <Footer />
    </div>
  );
};

export default Opportunities;
