import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebouncer';
import achievers from '../DB/achieversData.json';
import { FaGithub, FaLinkedin, FaTwitter, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const JourneyPage = () => {
  const [allAchievers, setAllAchievers] = useState([]);
  const [filteredAchievers, setFilteredAchievers] = useState([]);
  const [visibleAchievers, setVisibleAchievers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const achieversPerPage = 6;

  useEffect(() => {
    setAllAchievers(achievers);
    setFilteredAchievers(achievers);
    setVisibleAchievers(achievers.slice(0, achieversPerPage));
  }, []);

  useEffect(() => {
    const filtered = allAchievers.filter((achiever) => {
      const matchesName = achiever.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
      const matchesDomain = achiever.domain.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
      const matchesAchievements = achiever.keyAchievements.some((achievement) =>
        achievement.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
      );

      return matchesName || matchesDomain || matchesAchievements;
    });

    setFilteredAchievers(filtered);
    setVisibleAchievers(filtered.slice(0, achieversPerPage));
  }, [debouncedSearchQuery, allAchievers]);

  const loadMoreAchievers = () => {
    if (isLoading || visibleAchievers.length >= filteredAchievers.length) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextAchievers = filteredAchievers.slice(
        visibleAchievers.length,
        visibleAchievers.length + achieversPerPage,
      );
      setVisibleAchievers((prev) => [...prev, ...nextAchievers]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMoreAchievers();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleAchievers, isLoading, filteredAchievers, loadMoreAchievers]);

  return (
    <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">Achievers Journey</h1>
        <p className="mt-2 text-sm">Explore the inspiring journeys of achievers.</p>
      </header>

      <div className="mb-6 w-1/3">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search achievers..."
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white transition focus:outline-none focus:ring focus:ring-[#00a6fb]"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAchievers.map((achiever, index) => (
          <AchieverCard key={index} achiever={achiever} />
        ))}

        {isLoading && Array.from({ length: achieversPerPage }).map((_, index) => <LoadingSkeleton key={index} />)}
      </div>

      {!isLoading && visibleAchievers.length >= filteredAchievers.length && (
        <p className="mt-6 text-center text-gray-400">🎉 You've reached the end!</p>
      )}
    </div>
  );
};

const AchieverCard = ({ achiever }) => {
  const { id, name, domain, keyAchievements, socialsAndPortfolio, imageURL } = achiever;
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/journeys/${id}`);
  };
  return (
    <>
      <div className="relative flex h-full w-96 flex-col rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-lg transition-all duration-300 hover:scale-105">
        <div className="absolute right-5 top-5">
          <img
            src={imageURL || 'https://via.placeholder.com/150'}
            alt={name}
            className="h-16 w-16 rounded-full border-2 border-[#00a6fb] object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="mt-2 text-sm text-gray-400">{domain}</p>
        <div className="my-4">
          <h3 className="text-lg font-semibold text-white">Achievements</h3>
          <ul className="list-disc pl-5 text-sm text-gray-400">
            {keyAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">Socials</h3>
          <div className="flex space-x-4 text-2xl font-bold">
            <a
              href={socialsAndPortfolio.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#00a6fb] hover:scale-125 hover:underline"
            >
              <FaGithub className="inline-block" />
            </a>
            <a
              href={socialsAndPortfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#00a6fb] hover:scale-125 hover:underline"
            >
              <FaLinkedin className="inline-block" />
            </a>
            <a
              href={socialsAndPortfolio.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-[#00a6fb] hover:scale-125 hover:underline"
            >
              <FaTwitter className="inline-block" />
            </a>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleViewMore}
            className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#00a6fb] py-2 text-white hover:bg-[#0096e6]"
          >
            <span>View More</span>
            <FaEye />
          </button>
        </div>
      </div>
    </>
  );
};

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-lg">
      <div className="mb-4 h-6 w-3/4 rounded bg-gray-700"></div>
      <div className="mb-2 h-4 w-full rounded bg-gray-700"></div>
      <div className="mb-4 h-4 w-5/6 rounded bg-gray-700"></div>
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded bg-gray-700"></div>
        <div className="h-6 w-12 rounded bg-gray-700"></div>
        <div className="h-6 w-20 rounded bg-gray-700"></div>
      </div>
    </div>
  );
};

export default JourneyPage;
