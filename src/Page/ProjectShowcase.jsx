import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebouncer';
import projectsData from '../DB/projects.json';
import { FaGithub } from 'react-icons/fa';
import { Footer } from '../components/Footer/Footer';

const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const projectsPerPage = 9;

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const flattenedProjects = projectsData.flatMap((user) =>
      user.Projects.map((project) => ({
        ...project,
        username: user.github_username,
      })),
    );

    const shuffledProjects = shuffleArray(flattenedProjects);
    setAllProjects(shuffledProjects);
    setFilteredProjects(shuffledProjects);
    setVisibleProjects(shuffledProjects.slice(0, projectsPerPage));
  }, []);

  useEffect(() => {
    const filtered = allProjects.filter((project) =>
      project.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
    );
    setFilteredProjects(filtered);
    setVisibleProjects(filtered.slice(0, projectsPerPage));
  }, [debouncedSearchQuery, allProjects]);

  const loadMoreProjects = () => {
    if (isLoading || visibleProjects.length >= filteredProjects.length) return;
    setIsLoading(true);

    setTimeout(() => {
      const nextProjects = filteredProjects.slice(visibleProjects.length, visibleProjects.length + projectsPerPage);
      setVisibleProjects((prev) => [...prev, ...nextProjects]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleProjects, isLoading, filteredProjects]);

  return (
    <div>
      <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-white">
        <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
          <h1 className="text-4xl font-bold">Project Display</h1>
          <p className="mt-2 text-sm">Explore amazing projects contributed by developers.</p>
        </header>

        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white transition focus:outline-none focus:ring focus:ring-[#00a6fb]"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

          {isLoading && Array.from({ length: projectsPerPage }).map((_, index) => <LoadingSkeleton key={index} />)}
        </div>

        {!isLoading && visibleProjects.length >= filteredProjects.length && (
          <p className="mt-6 text-center text-gray-400">🎉 You've reached the end!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const { title, description, tech, github_url, username, maker_image } = project;

  return (
    <div className="rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-lg transition-all duration-300 hover:scale-105">
      <div className="mb-4 flex items-center">
        <img src={maker_image} alt={username} className="mr-4 h-10 w-10 rounded-full" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className="mb-4 text-sm text-gray-400">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="rounded bg-[#00a6fb33] px-2 py-1 text-xs font-medium text-[#00a6fb]">
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <a
          href={github_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-sm text-[#00a6fb] hover:underline"
        >
          <FaGithub className="mr-1" /> View on GitHub
        </a>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-400 hover:underline"
        >
          @{username}
        </a>
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

export default ProjectsPage;
