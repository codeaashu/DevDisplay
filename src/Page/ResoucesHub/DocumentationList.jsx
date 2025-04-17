import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faTools, faShareAlt } from '@fortawesome/free-solid-svg-icons';

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

// List of Best Dev Tools

const devtools = [
  {
    name: 'Postman',
    description: 'API testing tool to streamline development and collaboration.',
    category: ['API', 'Testing'],
    link: 'https://www.postman.com/',
    image: '/assets/DevTools/Postman.png',
    shareLink: '#postman',
    howToUseLink: 'https://learning.postman.com/docs/getting-started/introduction/',
  },
  {
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster with autocomplete.',
    category: ['AI', 'Code Completion', 'Productivity'],
    link: 'https://github.com/features/copilot',
    image: '/assets/DevTools/Copilot.jpg',
    shareLink: '#github-copilot',
    howToUseLink: 'https://github.com/features/copilot',
  },
  {
    name: 'Figma',
    description: 'Collaborative UI/UX design tool used for wireframes, prototypes, and more.',
    category: ['Design', 'Collaboration'],
    link: 'https://figma.com/',
    image: '/assets/DevTools/Figma.png',
    shareLink: '#figma',
    howToUseLink: 'https://figma.com/resources',
  },
  {
    name: 'ChatGPT',
    description: 'AI assistant for generating code, fixing bugs, and more.',
    category: ['AI', 'Productivity', 'Helper'],
    link: 'https://chat.openai.com/',
    image: '/assets/DevTools/ChatGPT.png',
    shareLink: '#chatgpt',
    howToUseLink: 'https://chat.openai.com/',
  },
  {
    name: 'TabNine',
    description: 'AI-powered code completion tool for faster development.',
    category: ['AI', 'Code Completion'],
    link: 'https://www.tabnine.com/',
    image: '/assets/DevTools/Tabnine.jpg',
    shareLink: '#tabnine',
    howToUseLink: 'https://www.tabnine.com/docs',
  },
  {
    name: 'Codota',
    description: 'AI code completion tool for Java and Kotlin developers.',
    category: ['AI', 'Code Completion'],
    link: 'https://www.codota.com/',
    image: '/assets/DevTools/Codota.jpg',
    shareLink: '#codota',
    howToUseLink: 'https://www.codota.com/docs',
  },
  {
    name: 'Hugging Face',
    description: 'AI platform for natural language processing and machine learning.',
    category: ['AI', 'NLP', 'ML'],
    link: 'https://huggingface.co/',
    image: '/assets/DevTools/HuggingFace.jpg',
    shareLink: '#huggingface',
    howToUseLink: 'https://huggingface.co/docs',
  },
  {
    name: 'OpenAI Codex',
    description: 'AI system that translates natural language to code.',
    category: ['AI', 'Code Generation'],
    link: 'https://openai.com/',
    image: '/assets/DevTools/OpenAICodex.webp',
    shareLink: '#openai-codex',
    howToUseLink: 'https://openai.com/docs',
  },
  {
    name: 'PyCaret',
    description: 'Low-code machine learning library for Python.',
    category: ['AI', 'ML', 'Python'],
    link: 'https://pycaret.org/',
    image: '/assets/DevTools/Pycaret.jpg',
    shareLink: '#pycaret',
    howToUseLink: 'https://pycaret.org/docs',
  },
  {
    name: 'DataRobot',
    description: 'AI platform for building and deploying machine learning models.',
    category: ['AI', 'ML', 'Automation'],
    link: 'https://www.datarobot.com/',
    image: '/assets/DevTools/DataRobot.png',
    shareLink: '#datarobot',
    howToUseLink: 'https://www.datarobot.com/platform/',
  },
  {
    name: 'TensorFlow',
    description: 'Open-source platform for machine learning and AI development.',
    category: ['AI', 'ML', 'Framework'],
    link: 'https://www.tensorflow.org/',
    image: '/assets/DevTools/Tensorflow.png',
    shareLink: '#tensorflow',
    howToUseLink: 'https://www.tensorflow.org/learn',
  },
  {
    name: 'Dialogflow',
    description: 'AI tool for building conversational interfaces and chatbots.',
    category: ['AI', 'Chatbots', 'NLP'],
    link: 'https://dialogflow.cloud.google.com/',
    image: '/assets/DevTools/Dialogflow.jpg',
    shareLink: '#dialogflow',
    howToUseLink: 'https://cloud.google.com/dialogflow/docs',
  },
  {
    name: 'Runway ML',
    description: 'AI tool for creating and editing media content.',
    category: ['AI', 'Media', 'Creativity'],
    link: 'https://runwayml.com/',
    image: '/assets/DevTools/Runway.png',
    shareLink: '#runwayml',
    howToUseLink: 'https://runwayml.com/docs',
  },
  {
    name: 'Replit Ghostwriter',
    description: 'AI-powered code completion and debugging tool.',
    category: ['AI', 'Code Completion', 'Debugging'],
    link: 'https://replit.com/',
    image: '/assets/DevTools/Ghostwriter.png',
    shareLink: '#replit-ghostwriter',
    howToUseLink: 'https://replit.com/site/ghostwriter',
  },
  {
    name: 'Wit.ai',
    description: 'AI tool for building natural language interfaces.',
    category: ['AI', 'NLP', 'Chatbots'],
    link: 'https://wit.ai/',
    image: '/assets/DevTools/WITAI.jpg',
    shareLink: '#witai',
    howToUseLink: 'https://wit.ai/docs',
  },
  {
    name: 'Clarifai',
    description: 'AI platform for visual recognition and machine learning.',
    category: ['AI', 'Vision', 'ML'],
    link: 'https://www.clarifai.com/',
    image: '/assets/DevTools/Clarifai.png',
    shareLink: '#clarifai',
    howToUseLink: 'https://www.clarifai.com/docs',
  },
  {
    name: 'Cohere',
    description: 'AI platform for natural language understanding and generation.',
    category: ['AI', 'NLP', 'ML'],
    link: 'https://cohere.ai/',
    image: '/assets/DevTools/Cohere.png',
    shareLink: '#cohere',
    howToUseLink: 'https://docs.cohere.ai/',
  },
];

const StyledDevToolsCard = styled.div`
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
  margin: 0.5rem; /* Decreased gap */

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

  .status-user {
    width: 8px;
    height: 8px;
    margin-right: 4px;
    border-radius: 50%;
    outline: solid 2px var(--bg-color, #fff);
    background-color: var(--online-status, #00a6fb);
    transition: var(--btn-transition, 0.5s);
    animation: active-status 2s ease-in-out infinite;
  }

  @keyframes active-status {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
`;

const DevToolsCardComponent = ({ name, description, category, link, image, shareLink, howToUseLink }) => {
  return (
    <StyledDevToolsCard id={shareLink.substring(1)}>
      <div className="flex items-center justify-between p-2">
        <a
          href={howToUseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-semibold text-[#00a6fb] underline hover:text-white"
        >
          <FontAwesomeIcon icon={faTools} className="text-[#00a6fb]" />
          How to Use
        </a>

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
            className="bg-gray-1000 hover:bg-slate-1000 text-#00a6fb flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-opacity-50 px-2 py-1 text-xs backdrop-blur-md transition-colors"
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

      <h2 className="mt-1 p-1 text-center text-lg font-bold text-white">{name}</h2>

      <p className="px-3 text-center text-sm text-gray-400">{description}</p>

      <div className="mt-3 flex flex-wrap justify-center gap-2 p-2">
        {category.map((cat, idx) => (
          <span key={idx} className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300">
            {cat}
          </span>
        ))}
      </div>
    </StyledDevToolsCard>
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

  input,
  select {
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

const DevToolsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySearchTerm, setCategorySearchTerm] = useState('');

  const filteredDevTools = devtools.filter((tool) => {
    const matchesName = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = tool.category.some((cat) => cat.toLowerCase().includes(categorySearchTerm.toLowerCase()));
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

      <DevToolsListContainer className="flex flex-wrap justify-center">
        {filteredDevTools.map((tool, idx) => (
          <DevToolsCardComponent key={idx} {...tool} />
        ))}
      </DevToolsListContainer>
    </>
  );
};

export default DevToolsList;
