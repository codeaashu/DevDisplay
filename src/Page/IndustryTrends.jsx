import React, { useState, useEffect } from 'react'; // Import React and hooks
import { Search, PlusCircle, Trash, ExternalLink, TrendingUp, Cpu, Shield, Leaf, Globe, Zap } from 'lucide-react'; // Import icons from 'lucide-react'
import { Footer } from '../components/Footer/Footer'; // Import Footer component
import { Dialog } from '@headlessui/react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
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

const Hero = () => {
  return (
    <section className="hero-section flex min-h-[70vh] p-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-10 rounded-br-[50px] rounded-tl-[50px] border border-[#00a6fb] p-8 shadow-lg">
          <p className="text-lg font-semibold tracking-widest text-[#00a6fb]">
            Discover the Latest Technology Trends 🚀
          </p>
        </div>
        <h2 className="mb-8 text-5xl font-bold">
          Tech <span className="text-[#00a6fb]">Trends</span>
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
          Stay ahead of the curve with the latest technology trends shaping the future of innovation and development.
        </p>
      </div>
    </section>
  );
};

// Tech Trends Data
const techTrendsData = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description:
      'Artificial Intelligence and Machine Learning continue to revolutionize industries with advanced algorithms, neural networks, and automated decision-making systems.',
    icon: <Cpu className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-500',
    link: '#ai-ml',
  },
  {
    id: 2,
    title: 'Blockchain Technology',
    description:
      'Decentralized systems and cryptocurrency innovations are transforming finance, supply chain, and digital identity management across global markets.',
    icon: <Globe className="h-8 w-8" />,
    color: 'from-blue-500 to-cyan-500',
    link: '#blockchain',
  },
  {
    id: 3,
    title: 'Quantum Computing',
    description:
      'Quantum computers promise unprecedented computational power, potentially solving complex problems in cryptography, optimization, and scientific research.',
    icon: <Zap className="h-8 w-8" />,
    color: 'from-yellow-500 to-orange-500',
    link: '#quantum',
  },
  {
    id: 4,
    title: 'Green Technology',
    description:
      'Sustainable tech solutions focus on renewable energy, carbon reduction, and environmentally friendly innovations for a greener future.',
    icon: <Leaf className="h-8 w-8" />,
    color: 'from-green-500 to-emerald-500',
    link: '#green-tech',
  },
  {
    id: 5,
    title: 'Web3 & Metaverse',
    description:
      'The next generation of the internet featuring decentralized applications, virtual worlds, and immersive digital experiences.',
    icon: <Globe className="h-8 w-8" />,
    color: 'from-indigo-500 to-purple-500',
    link: '#web3',
  },
  {
    id: 6,
    title: 'Cybersecurity',
    description:
      'Advanced security measures, zero-trust architectures, and AI-powered threat detection to protect against evolving cyber threats.',
    icon: <Shield className="h-8 w-8" />,
    color: 'from-red-500 to-pink-500',
    link: '#cybersecurity',
  },
];

// TechTrendCard Component
const TechTrendCard = ({ trend }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isHovered ? 'transform-gpu' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${trend.color} p-3 text-white`}>
          {trend.icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#00a6fb]">
          {trend.title}
        </h3>

        {/* Description */}
        <p className="mb-4 leading-relaxed text-gray-300">{trend.description}</p>

        {/* Explore Link */}
        <button className="inline-flex items-center gap-2 font-semibold text-[#00a6fb] transition-colors duration-300 hover:text-blue-400">
          <span>Explore</span>
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#00a6fb]"></div>
    </div>
  );
};

// TechTrendsGrid Component
const TechTrendsGrid = ({ searchQuery }) => {
  const filteredTrends = techTrendsData.filter(
    (trend) =>
      trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white">
              Latest Tech <span className="text-[#00a6fb]">Trends</span>
            </h2>
            <p className="text-gray-400">Discover the technologies shaping our future</p>
          </div>
          <div className="flex items-center gap-2 text-[#00a6fb]">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">{filteredTrends.length} Trends</span>
          </div>
        </div>

        {filteredTrends.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTrends.map((trend) => (
              <TechTrendCard key={trend.id} trend={trend} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="mb-2 text-lg text-gray-400">No trends found</div>
            <p className="text-gray-500">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

// SearchBar Component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {' '}
      {/* Adjust max-width here */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search Trends..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Updates the searchQuery state
          className="w-full rounded-full bg-gray-700 py-4 pl-12 pr-4 text-white placeholder-gray-400 outline-none ring-2 ring-transparent transition-all focus:ring-[#00a6fb]"
        />
      </div>
    </div>
  );
};

// IndustryTrendsSec Component
const IndustryTrendsSec = () => {
  const [trends, setTrends] = useState(() => {
    const savedTrends = localStorage.getItem('trends');
    return savedTrends ? JSON.parse(savedTrends) : []; // Retrieve saved trends from localStorage
  });
  const [newContent, setNewContent] = useState('');
  const [contentType, setContentType] = useState(''); // Track content type (blog/video)
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
  const [searchQuery, setSearchQuery] = useState(''); // Control search input state

  const [newTitle, setNewTitle] = useState(''); // New blog title
  const [newDescription, setNewDescription] = useState(''); // New blog description
  const [newAuthor, setNewAuthor] = useState(''); // New blog author name
  const [newImage, setNewImage] = useState(null); // New image for blog

  useEffect(() => {
    localStorage.setItem('trends', JSON.stringify(trends)); // Persist trends data in localStorage on change
  }, [trends]);

  const openModal = (type) => {
    setContentType(type); // Set content type when adding new content (blog/video)
    setIsModalOpen(true); // Open modal
  };

  const handleAddContent = () => {
    if (!newContent.trim() || !newTitle.trim() || !newDescription.trim() || !newAuthor.trim()) {
      alert('Please fill out all fields.'); // Validate fields before submission
      return;
    }

    const imageURL = newImage ? URL.createObjectURL(newImage) : null; // Handle image if provided
    const currentTime = new Date().toLocaleString(); // Automatically set current date and time
    setTrends([
      {
        type: contentType,
        title: newTitle.trim(),
        description: newDescription.trim(),
        author: newAuthor.trim(),
        publishTime: currentTime, // Set publish time to current time
        content: newContent.trim(),
        image: imageURL,
      },
      ...trends,
    ]); // Prepend new trend to the array
    // Clear form fields after adding content
    setNewContent('');
    setNewTitle('');
    setNewDescription('');
    setNewAuthor('');
    setNewImage(null);
    setIsModalOpen(false); // Close modal after content is added
  };

  const handleDeleteContent = (index) => {
    const updatedTrends = trends.filter((_, i) => i !== index); // Filter out the deleted content
    setTrends(updatedTrends);
  };

  const filteredTrends = trends.filter(
    (trend) =>
      trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.publishTime.toLowerCase().includes(searchQuery.toLowerCase()),
  ); // Filter trends based on search query

  return (
    <div>
      {/* Search Bar */}
      <div className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex gap-4">
          <button
            onClick={() => openModal('blog')} // Open modal to add a new blog
            className="flex items-center gap-2 rounded-full bg-[#00a6fb] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
          >
            <PlusCircle className="h-5 w-5" /> Add Article
          </button>
        </div>
      </div>

      {/* Tech Trends Grid */}
      <TechTrendsGrid searchQuery={searchQuery} />

      {/* Modal for adding new content */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-xl bg-gray-800 p-6 text-white shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-[#00a6fb]">Add New Article</h2>
            {/* Form fields for blog details */}
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)} // Handle title input
              placeholder="Enter article title"
              required
              className="mb-4 w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00a6fb]"
            />
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)} // Handle description input
              placeholder="Enter article description"
              className="mb-4 h-28 w-full resize-none rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00a6fb]"
            />
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)} // Handle author input
              placeholder="Enter author name"
              className="mb-4 w-full rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00a6fb]"
            />
            <input
              type="file"
              onChange={(e) => setNewImage(e.target.files[0])} // Handle image upload
              className="mb-4 w-full text-gray-400 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#00a6fb] file:px-4 file:py-2 file:text-white hover:file:bg-blue-600"
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)} // Handle blog content input
              placeholder="Enter article content..."
              className="mb-6 h-32 w-full resize-none rounded-lg bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00a6fb]"
            />
            {/* Buttons for submitting or canceling */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)} // Close modal without submitting
                className="rounded-lg bg-gray-600 px-6 py-2 transition-colors duration-300 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddContent} // Submit content to be added
                className="rounded-lg bg-[#00a6fb] px-6 py-2 font-semibold transition-colors duration-300 hover:bg-blue-600"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Display saved articles */}
      {filteredTrends.length > 0 && (
        <div className="mt-12 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Community <span className="text-[#00a6fb]">Articles</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTrends.map((trend, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {trend.image && (
                    <div className="mb-4">
                      <img src={trend.image} alt="Article image" className="h-48 w-full rounded-lg object-cover" />
                    </div>
                  )}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#00a6fb]">
                      {trend.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-300">{trend.description}</p>
                    <div className="mb-4 text-sm text-gray-400">
                      By {trend.author} | {trend.publishTime}
                    </div>
                    {trend.type === 'blog' && <p className="line-clamp-3 text-sm text-gray-300">{trend.content}</p>}
                    <button className="mt-4 inline-flex items-center gap-2 font-semibold text-[#00a6fb] transition-colors duration-300 hover:text-blue-400">
                      <span>Read More</span>
                      <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#00a6fb]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
    </div>
  );
};

// Main IndustryTrends Component
const IndustryTrends = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar /> {/* Render the Navbar */}
      <Hero />
      <IndustryTrendsSec /> {/* Render the IndustryTrendsSec section */}
      <Footer /> {/* Render the Footer */}
    </div>
  );
};

export default IndustryTrends; // Export IndustryTrends as default
