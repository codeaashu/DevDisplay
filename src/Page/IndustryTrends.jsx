import React, { useState, useEffect } from 'react'; // Import React and hooks
import { Search, PlusCircle, Trash } from 'lucide-react'; // Import icons from 'lucide-react'
import { Footer } from "../components/Footer/Footer"; // Import Footer component
import { Dialog } from '@headlessui/react'; // Import Dialog component from Headless UI

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
        <div className="p-8 border border-[#00a6fb] rounded-tl-[50px] rounded-br-[50px] mb-10 shadow-lg">
          <p className="text-lg font-semibold text-[#00a6fb] tracking-widest">Discover the Latest Industry Insights 🌐</p>
        </div>
        <h2 className="text-5xl font-bold mb-8">
          Industry <span className="text-[#00a6fb]">Trends</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300">
          Discover the latest updates on industry trends through insightful blogs and engaging video content to stay ahead.
        </p>
      </div>
    </section>
  );
};

// SearchBar Component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mx-auto w-full max-w-4xl"> {/* Adjust max-width here */}
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
  const 
  [newAuthor, setNewAuthor] = useState(''); // New blog author name
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
    setTrends([{ 
      type: contentType,
      title: newTitle.trim(),
      description: newDescription.trim(),
      author: newAuthor.trim(),
      publishTime: currentTime, // Set publish time to current time
      content: newContent.trim(),
      image: imageURL,
    }, ...trends]); // Prepend new trend to the array
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

  const filteredTrends = trends.filter((trend) =>
    trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trend.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trend.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trend.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trend.publishTime.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Filter trends based on search query

  return (
    <div>
      <div className="p-6 flex items-center justify-between">
  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  <div className="flex gap-4">
    <button
      onClick={() => openModal('blog')} // Open modal to add a new blog
      className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 margin-left-5"
    >
      <PlusCircle className="h-5 w-5" /> Add Blog
    </button>
  </div>
</div>

      {/* Modal for adding new content */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="rounded-lg bg-gray-800 p-6 text-white shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Add Blog</h2>
            {/* Form fields for blog details */}
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)} // Handle title input
              placeholder="Enter blog title"
              required
              className="w-full rounded-md bg-gray-700 p-2 text-white outline-none placeholder-gray-400 mb-4"
            />
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)} // Handle description input
              placeholder="Enter blog description"
              className="w-full rounded-md bg-gray-700 p-2 text-white outline-none placeholder-gray-400 h-28 mb-4"
            />
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)} // Handle author input
              placeholder="Enter author name"
              className="w-full rounded-md bg-gray-700 p-2 text-white outline-none placeholder-gray-400 mb-4"
            />
            <input
              type="file"
              onChange={(e) => setNewImage(e.target.files[0])} // Handle image upload
              className="w-full text-gray-400 mb-4"
            />
            <textarea
              value={ newContent}
              onChange={(e) => setNewContent(e.target.value)} // Handle blog content input
              placeholder="Enter blog content..."
              className="w-full rounded-md bg-gray-700 p-2 text-white outline-none placeholder-gray-400 h-28 mb-4"
            />
            {/* Buttons for submitting or canceling */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)} // Close modal without submitting
                className="rounded bg-gray-600 px-4 py-2 hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddContent} // Submit content to be added
                className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Display saved trends */}
      <div className="mt-8 px-6">
        <h2 className="text-white text-2xl font-bold">Top Trends</h2>
        <div className="mt-4 space-y-4">
          {filteredTrends.map((trend, index) => (
            <div key={index} className="flex rounded-md bg-gray-800 p-4 text-white">
              {trend.image && (
                <div className="w-1/4">
                  <img src={trend.image} alt="Blog image" className="rounded-md w-full h-auto" />
                </div>
              )}
              <div className="w-3/4 ml-4">
                <h3 className="text-xl font-semibold">{trend.title}</h3>
                <p>{trend.description}</p>
                <p className="text-gray-400">By {trend.author} | {trend.publishTime}</p>
                {trend.type === 'blog' && (
                  <p><strong>Blog:</strong> {trend.content}</p>
                )}
                {/* Uncomment to enable delete functionality */}
                {/* <button
                  onClick={() => handleDeleteContent(index)} // Delete the content when clicked
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  <Trash className="inline h-5 w-5 mr-1" /> Delete
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br /><br />
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
