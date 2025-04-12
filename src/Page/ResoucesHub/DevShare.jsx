import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebouncer';
import { FaThumbsUp, FaThumbsDown, FaLink, FaPlus } from 'react-icons/fa';

const ResourceSharingHub = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newResource, setNewResource] = useState({ title: '', description: '', link: '', tags: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userVotes, setUserVotes] = useState({});
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const savedResources = JSON.parse(localStorage.getItem('resources')) || [];
    setResources(savedResources);
    setFilteredResources(savedResources);
  }, []);

  useEffect(() => {
    const filtered = resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase())),
    );
    setFilteredResources(filtered);
  }, [debouncedSearchQuery, resources]);

  const handleVote = (index, type) => {
    const updatedResources = [...resources];
    const currentVote = userVotes[index];

    if (currentVote === type) {
      updatedResources[index][`${type}s`] -= 1;
      setUserVotes({ ...userVotes, [index]: null });
    } else {
      if (currentVote) {
        updatedResources[index][`${currentVote}s`] -= 1;
      }
      updatedResources[index][`${type}s`] += 1;
      setUserVotes({ ...userVotes, [index]: type });
    }

    setResources(updatedResources);
    localStorage.setItem('resources', JSON.stringify(updatedResources));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newResource,
      tags: newResource.tags.split(',').map((tag) => tag.trim()),
      upvotes: 0,
      downvotes: 0,
    };
    const updatedResources = [newEntry, ...resources];
    setResources(updatedResources);
    setFilteredResources(updatedResources);
    localStorage.setItem('resources', JSON.stringify(updatedResources));
    setNewResource({ title: '', description: '', link: '', tags: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">Resource Sharing Hub</h1>
        <p className="mt-2 text-sm">Share and explore valuable resources for developers.</p>
      </header>

      <div className="mb-6 flex items-center justify-center gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search resources..."
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:ring focus:ring-[#00a6fb] sm:w-1/3"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded bg-[#00a6fb] p-2 text-white hover:bg-[#0096e6]"
        >
          <FaPlus /> Add Resource
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Add New Resource</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={newResource.title}
                onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                className="rounded bg-gray-700 p-2 text-white"
                required
              />
              <textarea
                placeholder="Description"
                value={newResource.description}
                onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                className="rounded bg-gray-700 p-2 text-white"
                required
              ></textarea>
              <input
                type="url"
                placeholder="Resource Link"
                value={newResource.link}
                onChange={(e) => setNewResource({ ...newResource, link: e.target.value })}
                className="rounded bg-gray-700 p-2 text-white"
                required
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                value={newResource.tags}
                onChange={(e) => setNewResource({ ...newResource, tags: e.target.value })}
                className="rounded bg-gray-700 p-2 text-white"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded bg-gray-600 p-2 text-white hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button type="submit" className="rounded bg-[#00a6fb] p-2 text-white hover:bg-[#0096e6]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource, index) => (
          <div key={index} className="rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-lg">
            <h2 className="text-xl font-semibold">{resource.title}</h2>
            <p className="mt-2 text-sm text-gray-400">{resource.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {resource.tags.map((tag, idx) => (
                <span key={idx} className="rounded-full bg-gray-700 px-2 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#00a6fb] hover:underline"
              >
                <FaLink /> Visit Resource
              </a>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleVote(index, 'upvote')}
                  className={`flex items-center gap-1 ${userVotes[index] === 'upvote' ? 'text-green-400' : 'text-gray-400'}`}
                >
                  <FaThumbsUp /> {resource.upvotes}
                </button>
                <button
                  onClick={() => handleVote(index, 'downvote')}
                  className={`flex items-center gap-1 ${userVotes[index] === 'downvote' ? 'text-red-400' : 'text-gray-400'}`}
                >
                  <FaThumbsDown /> {resource.downvotes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSharingHub;
