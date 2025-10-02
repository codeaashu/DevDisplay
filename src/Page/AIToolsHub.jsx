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
          placeholder="Search AI Tools..."
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
          Explore Our {'>'} AI Tools 📚
        </p>
        <h1 className="mb-2 text-4xl font-bold tracking-widest md:text-4xl">All AI Tools in One Place</h1>
        <h2 className="mb-4 text-6xl font-bold">
          AI Tools <span className="text-[#00a6fb]">Hub</span>
        </h2>
        <p className="text-md md:text-md mx-auto max-w-2xl">
          Curated tools, guides, and learning materials to boost your AI journey.
        </p>
      </div>
    </section>
  );
};

const AIToolsCards = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const AITools = [
    {
      title: 'Natural Language Processing',
      description: 'Tools for processing and analyzing human language data.',
      // link: '/NLPTools',
      link: 'https://toolfolio.io/', // Direct tool link
      tags: ['nlp', 'text', 'analysis'],
    },
    {
      title: 'Computer Vision',
      description: 'Tools for analyzing and interpreting visual data.',
      link: 'https://opencv.org/blog/computer-vision-tools-top-10/',
      tags: ['vision', 'image', 'analysis'],
    },
    {
      title: 'Machine Learning Frameworks',
      description: 'Popular frameworks for building machine learning models.',
      link: 'https://www.openml.org/',
      tags: ['ml', 'frameworks', 'models'],
    },
    {
      title: 'Data Preprocessing',
      description: 'Tools for cleaning and preparing data for analysis.',
      link: 'https://julius.ai/glossary/data-preprocessing',
      tags: ['data', 'cleaning', 'preprocessing'],
    },
    {
      title: 'AI Model Deployment',
      description: 'Tools for deploying AI models to production.',
      link: 'https://www.copado.com/',
      tags: ['deployment', 'models', 'production'],
    },
    {
      title: 'AI Ethics and Fairness',
      description: 'Tools for ensuring ethical and fair AI practices.',
      link: 'https://www.unesco.org/',
      tags: ['ethics', 'fairness', 'ai'],
    },
    {
      title: 'Reinforcement Learning',
      description: 'Tools for building and training reinforcement learning models.',
      link: 'https://huggingface.co/',
      tags: ['rl', 'training', 'models'],
    },
    {
      title: 'AI in Healthcare',
      description: 'Tools for applying AI in healthcare and medical fields.',
      link: 'https://www.getprosper.ai/',
      tags: ['healthcare', 'medical', 'ai'],
    },
    {
      title: 'AI in Finance',
      description: 'Tools for applying AI in financial services.',
      link: 'https://www.stampli.com/',
      tags: ['finance', 'services', 'ai'],
    },
    //Added more tools of AI here
    // 🧠 Content Creation & Writing
    {
      title: 'Murf AI',
      description:
        'An AI-driven voiceover tool that converts text into natural-sounding speech, ideal for creating podcasts, audiobooks, and presentations.',
      link: 'https://aitrendz.xyz/',
      tags: ['voice', 'audio', 'content'],
    },
    {
      title: 'AdCreative',
      description:
        'Generates high-converting ad creatives using AI, enhancing marketing campaigns with optimized visuals and copy.',
      link: 'https://aitrendz.xyz/',
      tags: ['ads', 'marketing', 'creative'],
    },
    {
      title: 'ScribeHow',
      description:
        'Automates the creation of step-by-step guides and tutorials by recording user actions, streamlining documentation processes.',
      link: 'https://toolfolio.io/',
      tags: ['documentation', 'tutorial', 'automation'],
    },

    // 🎨 Design & Creativity
    {
      title: 'Krea AI',
      description: 'A generative design tool that assists in creating unique visuals and layouts using AI algorithms.',
      link: 'https://toolfolio.io/',
      tags: ['design', 'visual', 'creative'],
    },
    {
      title: 'Runway',
      description:
        'Offers AI-powered video editing and content creation tools, enabling creators to produce professional-quality videos efficiently.',
      link: 'https://toolfolio.io/',
      tags: ['video', 'editing', 'creative'],
    },
    {
      title: 'SVGMaker',
      description:
        'Simplifies the creation of scalable vector graphics, making it accessible for designers and developers alike.',
      link: 'https://aitoolhub.net/',
      tags: ['svg', 'graphics', 'design'],
    },

    // 📊 Business & Productivity
    {
      title: 'PressPulse AI',
      description: 'An AI-powered PR assistant that helps in crafting press releases and managing media outreach.',
      link: 'https://toolfolio.io/',
      tags: ['pr', 'marketing', 'business'],
    },
    {
      title: 'Ping AI',
      description:
        'A to-do list application that uses AI to prioritize tasks and integrate with calendars for enhanced productivity.',
      link: 'https://aitoolhub.co/',
      tags: ['productivity', 'tasks', 'automation'],
    },
    {
      title: 'Comp AI',
      description:
        'A compliance platform that leverages AI to ensure businesses adhere to regulatory standards and policies.',
      link: 'https://toolfolio.io/',
      tags: ['compliance', 'business', 'regulations'],
    },

    // 🧑‍💻 Development & Automation
    {
      title: 'Trellis AI',
      description:
        'A data platform that organizes complex information from various sources into structured, SQL-ready data using AI.',
      link: 'https://aitoolhub.co/',
      tags: ['data', 'automation', 'development'],
    },
    {
      title: 'Laxis',
      description:
        'An AI-driven sales automation tool that assists in managing customer interactions and streamlining sales processes.',
      link: 'https://toolfolio.io/',
      tags: ['sales', 'automation', 'ai'],
    },
    {
      title: 'Zapier Automations',
      description:
        'Automates workflows by connecting various apps and services, reducing manual tasks and improving efficiency.',
      link: 'https://toolfolio.io/',
      tags: ['workflow', 'automation', 'productivity'],
    },

    // 🧪 Research & Data Analysis
    {
      title: 'Mubert',
      description:
        'Generates AI-powered music and soundscapes, useful for content creators and researchers in multimedia projects.',
      link: 'https://aitrendz.xyz/',
      tags: ['music', 'ai', 'research'],
    },
    {
      title: 'Looka',
      description: 'An AI logo maker that helps businesses create brand identities quickly and effectively.',
      link: 'https://aitrendz.xyz/',
      tags: ['branding', 'logo', 'design'],
    },
    {
      title: 'Blaze Content Creation',
      description:
        'Assists in generating written content using AI, streamlining the content creation process for marketers and writers.',
      link: 'https://toolfolio.io/',
      tags: ['content', 'writing', 'ai'],
    },
  ];

  // const filteredAITools = AITools.filter((tool) => {
  //   const searchContent = `${tool.title} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase();
  //   return searchContent.includes(searchTerm.toLowerCase());
  // });

  // const handleSearch = (value) => {
  //   setSearchTerm(value);
  // };

  // return (
  //   <section className="ai-tools-section mx-auto w-full px-4 py-8 text-white lg:max-w-[80%]">
  //     <div className="mx-auto mb-8 text-center">
  //       <h2 className="mb-4 text-4xl font-bold text-[#00a6fb]">Top AI Tools</h2>
  //       <p className="mx-auto mb-8 max-w-3xl px-4 text-xl">
  //         Everything you need to grow, learn, and build in the AI industry.
  //       </p>
  //       <div className="mx-4">
  //         <SearchBar onSearch={handleSearch} />
  //       </div>
  //     </div>

  //     {filteredAITools.length === 0 ? (
  //       <div className="py-8 text-center">
  //         <p className="text-xl text-gray-400">No AI tools found matching your search.</p>
  //       </div>
  //     ) : (
  //       <div className="grid grid-cols-1 gap-4 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
  //         {filteredAITools.map((tool, index) => (
  //           <a
  //             key={index}
  //             href={tool.link}
  //             className="ai-tool-card flex h-full flex-col rounded-lg bg-gray-800 p-3 shadow-lg transition duration-300 hover:scale-105 hover:transform hover:bg-gray-700 sm:p-4"
  //           >
  //             <h3 className="mb-2 text-base font-semibold sm:text-lg">{tool.title}</h3>
  //             <p className="flex-grow text-xs text-gray-300 sm:text-sm">{tool.description}</p>
  //             <div className="mt-2 flex flex-wrap justify-center gap-1">
  //               {tool.tags.slice(0, 2).map((tag, tagIndex) => (
  //                 <span
  //                   key={tagIndex}
  //                   className="rounded-full bg-gray-700 px-1.5 py-0.5 text-[10px] text-gray-300 sm:px-2 sm:py-1 sm:text-xs"
  //                 >
  //                   {tag}
  //                 </span>
  //               ))}
  //             </div>
  //           </a>
  //         ))}
  //       </div>
  //     )}
  //   </section>
  const filteredAITools = AITools.filter((tool) => {
    const searchContent = `${tool.title} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  const handleSearch = (value) => setSearchTerm(value);

  return (
    <section className="ai-tools-section mx-auto w-full px-4 py-8 text-white lg:max-w-[80%]">
      <div className="mx-auto mb-8 text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#00a6fb]">Top AI Tools</h2>
        <p className="mx-auto mb-8 max-w-3xl px-4 text-xl">
          Everything you need to grow, learn, and build in the AI industry.
        </p>
        <div className="mx-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {filteredAITools.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-xl text-gray-400">No AI tools found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAITools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-full transform flex-col rounded-xl bg-gray-900 p-5 shadow-xl ring-1 ring-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-[#00a6fb]"
            >
              <h3 className="mb-2 text-lg font-bold text-white">{tool.title}</h3>
              <p className="flex-grow text-sm text-gray-300">{tool.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tool.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="cursor-pointer rounded-full bg-gradient-to-r from-[#00a6fb] to-[#00ffd5] px-3 py-1 text-xs font-medium text-gray-900 transition-all duration-300 hover:from-[#00ffd5] hover:to-[#00a6fb]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 w-fit rounded-full bg-[#00a6fb] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#00ffd5] hover:text-gray-900">
                Visit Tool
              </button>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

const AIToolsHub = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <AIToolsCards />
      <Footer />
    </div>
  );
};

export default AIToolsHub;
