import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBook, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this awesome Dev Tool!',
        text: 'I found this amazing tool that might help you in your development work.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of libraries with their details

const libraryData = [
  {
    name: 'DaisyUI',
    description: 'Tailwind CSS components for building modern UIs.',
    category: ['CSS', 'UI Components'],
    link: 'https://daisyui.com/',
    image: '/assets/Libraries/DaisyUI.png', // Local image path
    shareLink: '#daisyui',
  },
  {
    name: 'UIVERSE',
    description: 'Free UI elements and components for modern web design.',
    category: ['CSS', 'UI Components'],
    link: 'https://uiverse.io/',
    image: '/assets/Libraries/UIVERSE.png', // Local image path
    shareLink: '#uiverse',
  },
  {
    name: 'FloatUI',
    description: 'Free and premium Tailwind CSS UI components.',
    category: ['CSS', 'UI Components'],
    link: 'https://floatui.com/',
    image: '/assets/Libraries/FloatUI.png', // Local image path
    shareLink: '#floatui',
  },
  {
    name: 'Shadcn UI',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
    category: ['CSS', 'UI Components'],
    link: 'https://ui.shadcn.com/',
    image: '/assets/Libraries/ShadcnUI.png', // Local image path
    shareLink: '#shadcn-ui',
  },
  {
    name: 'Aceternity UI',
    description: 'Modern UI components for building responsive web applications.',
    category: ['CSS', 'UI Components'],
    link: 'https://ui.aceternity.com/',
    image: '/assets/Libraries/AceternityUI.png', // Local image path
    shareLink: '#aceternity-ui',
  },
  {
    name: 'Magic UI',
    description: 'A collection of magical UI components for modern web design.',
    category: ['CSS', 'UI Components'],
    link: 'https://magicui.design/',
    image: '/assets/Libraries/MagicUI.png', // Local image path
    shareLink: '#magic-ui',
  },
  {
    name: 'Hero UI',
    description: 'Hero-themed UI components for building stunning web interfaces.',
    category: ['CSS', 'UI Components'],
    link: 'https://www.heroui.com/',
    image: '/assets/Libraries/HeroUI.png', // Local image path
    shareLink: '#hero-ui',
  },
  // Add more libraries as needed
];

const StyledLibraryCard = styled.div`
  position: relative;
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 350px; /* Increased width */
  margin: 0.5rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }
`;

const LibraryCardComponent = ({ name, description, category, link, image, shareLink }) => {
  return (
    <StyledLibraryCard id={shareLink.substring(1)}>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faBook} // Replace with the desired icon
            className="mr-2 text-[#00a6fb]"
          />
          <h2 className="text-lg font-bold text-white">{name}</h2>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-1000 hover:bg-gray-1000 text-semibold relative flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-gray-300"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
          Visit
        </a>
      </div>

      <div className="h-50 relative w-full overflow-hidden rounded-xl p-2 shadow-md">
        <div className="absolute bottom-3 right-3 z-10">
          <button
            onClick={() => shareContent(window.location.href.split('#')[0] + shareLink)}
            className="bg-gray-1000 hover:bg-slate-1000 text-#00a6fb flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md transition-colors"
          >
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
        </div>
        <img
          src={image}
          alt={`${name} Logo`}
          className="h-full w-full rounded-lg bg-white object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png';
          }}
        />
      </div>

      <p className="px-3 text-center text-sm text-gray-400">{description}</p>

      <div className="mt-3 flex flex-wrap justify-center gap-2 p-2">
        {category.map((cat, idx) => (
          <span key={idx} className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300">
            {cat}
          </span>
        ))}
      </div>
    </StyledLibraryCard>
  );
};

<style>
  {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

          @font-face {
            font-family: "MerriweatherSans-SemiBold";
            src: url('/fonts/MerriweatherSans-SemiBold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
                    `}
</style>;

const DevToolsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* Decreased gap */
  padding: 1rem;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    padding: 0.75rem 1rem;
    border: 1px solid #00a6fb;
    border-radius: 9999px;
    background: rgba(15, 27, 53, 0.9);
    color: #ffffff;
    font-size: 1rem;
    min-width: 220px;
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: #a0aec0;
    }

    &:hover {
      background: rgba(25, 37, 67, 0.95);
      border-color: #14c8ff;
      transform: scale(1.02);
    }

    &:focus {
      outline: none;
      border-color: #14c8ff;
      box-shadow: 0 0 0 2px rgba(20, 200, 255, 0.4);
    }
  }
`;

const LibraryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LibraryList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySearchTerm, setCategorySearchTerm] = useState('');

  const filteredLibraries = libraryData.filter((lib) => {
    const matchesName = lib.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = lib.category.some((cat) => cat.toLowerCase().includes(categorySearchTerm.toLowerCase()));
    return matchesName && matchesCategory;
  });

  return (
    <>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by category..."
          value={categorySearchTerm}
          onChange={(e) => setCategorySearchTerm(e.target.value)}
        />
      </FilterContainer>

      <LibraryListContainer>
        {filteredLibraries.map((lib, idx) => (
          <LibraryCardComponent key={idx} {...lib} />
        ))}
      </LibraryListContainer>
    </>
  );
};

export default LibraryList;
