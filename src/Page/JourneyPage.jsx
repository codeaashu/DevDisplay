import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from '../hooks/useDebouncer';
import achievers from '../DB/achieversData.json';
import { FaGithub, FaLinkedin, FaTwitter, FaEye, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const JourneyPage = () => {
  const [allAchievers, setAllAchievers] = useState([]);
  const [filteredAchievers, setFilteredAchievers] = useState([]);
  const [visibleAchievers, setVisibleAchievers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const achieversPerPage = 6;

  const availableTags = ['GSoC', 'FAANG', 'OpenSource', 'Research', 'Startup'];

  useEffect(() => {
    setAllAchievers(achievers);
    setFilteredAchievers(achievers);
    setVisibleAchievers(achievers.slice(0, achieversPerPage));
  }, []);

  useEffect(() => {
    const filtered = allAchievers.filter((achiever) => {
      const matchesSearch =
        achiever.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        achiever.domain.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        achiever.keyAchievements.some((achievement) =>
          achievement.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
        );

      const matchesTags =
        selectedTags.length === 0 || (achiever.tags && selectedTags.every((tag) => achiever.tags.includes(tag)));

      return matchesSearch && matchesTags;
    });

    setFilteredAchievers(filtered);
    setVisibleAchievers(filtered.slice(0, achieversPerPage));
  }, [debouncedSearchQuery, allAchievers, selectedTags]);

  const loadMoreAchievers = useCallback(() => {
    if (isLoading || visibleAchievers.length >= filteredAchievers.length) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextAchievers = filteredAchievers.slice(
        visibleAchievers.length,
        visibleAchievers.length + achieversPerPage,
      );
      setVisibleAchievers((prev) => [...prev, ...nextAchievers]);
      setIsLoading(false);
    }, 800);
  }, [isLoading, visibleAchievers, filteredAchievers]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMoreAchievers();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreAchievers]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-white">
      {/* Header */}
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-6 text-center shadow-lg">
        <h1 className="font-monospace text-4xl font-bold">Achievers Journey</h1>
        <p className="mt-2 text-sm opacity-90">Explore the inspiring journeys of achievers.</p>
      </header>

      {/* Tag Filter Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-start gap-2">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 text-sm font-semibold mr-2 mb-2 ${selectedTags.includes(tag)
              ? 'bg-blue-500 text-white border-blue-700 shadow-lg'
              : 'bg-gray-800 text-blue-300 border-gray-700 hover:bg-blue-700 hover:text-white'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search achievers..."
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white transition focus:outline-none focus:ring focus:ring-[#00a6fb] sm:w-1/3"
        />

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                selectedTags.includes(tag)
                  ? 'border-[#00a6fb] bg-[#00a6fb] text-white'
                  : 'border-gray-500 text-gray-300 hover:bg-gray-700'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Achiever Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAchievers.map((achiever, index) => (
          <AchieverCard key={index} achiever={achiever} />
        ))}

        {isLoading && Array.from({ length: achieversPerPage }).map((_, index) => <LoadingSkeleton key={index} />)}
      </div>

      {/* End Message */}
      {!isLoading && visibleAchievers.length >= filteredAchievers.length && (
        <p className="mt-6 text-center text-gray-400">🎉 You've reached the end!</p>
      )}
    </div>
  );
};

const AchieverCard = ({ achiever }) => {
  const { id, name, domain, keyAchievements, socialsAndPortfolio, imageURL, tags = [] } = achiever;
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [rockets, setRockets] = useState(0);

  const handleViewMore = () => {
    navigate(`/journeys/${id}`);
  };

  return (
    <div className="relative flex h-full w-full flex-col rounded-lg border border-gray-700 bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105">
      {/* Banner */}
      <div className="h-20 rounded-t-lg bg-gradient-to-r from-[#00a6fb] to-[#0096e6]"></div>

      {/* Profile Image */}
      <div className="relative flex justify-center">
        <img
          src={imageURL || 'https://via.placeholder.com/150'}
          alt={name}
          loading="lazy"
          className="absolute -top-10 h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="mt-12 flex flex-1 flex-col px-5 pb-5">
        <h2 className="text-lg font-bold text-white">{name}</h2>
        <p className="mt-1 text-xs text-gray-400">{domain}</p>

        {/* Achievements */}
        <div className="my-4">
          <h3 className="text-sm font-semibold text-white">Achievements</h3>
          <ul className="mt-1 space-y-1">
            {keyAchievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-gray-300">
                <FaTrophy className="text-yellow-400" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Social Links */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-white">Socials</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href={socialsAndPortfolio.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#00a6fb] hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href={socialsAndPortfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#00a6fb] hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialsAndPortfolio.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-[#00a6fb] hover:scale-125"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Reactions */}
        <div className="mb-3 flex gap-3 text-sm text-gray-300">
          <button onClick={() => setLikes(likes + 1)} className="flex items-center gap-1 hover:scale-110">
            👍 {likes}
          </button>
          <button onClick={() => setHearts(hearts + 1)} className="flex items-center gap-1 hover:scale-110">
            ❤️ {hearts}
          </button>
          <button onClick={() => setRockets(rockets + 1)} className="flex items-center gap-1 hover:scale-110">
            🚀 {rockets}
          </button>
        </div>

        {/* View More Button */}
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
    </div>
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
