import { useState } from 'react';
import { ArrowLeft, Search, FileText, Sparkles, Zap, Edit, Eye, Download, Share2, TrendingUp } from 'lucide-react';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import ResumeBuilder from '../components/ResumeBuilder/ResumeBuilder';
import ResumeAnalyzer from '../components/ResumeAnalyzer/ResumeAnalyzer';

// Dummy provider, can be extended if needed
const ResumeProvider = ({ children }) => <div>{children}</div>;

// Navbar with back button and main icon
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
        <div className="text-2xl font-bold">
          <FileText className="h-12 w-12 text-[#00a6fb]" />
        </div>
      </div>
    </nav>
  );
};

// Hero section with animated sparkle background and page title
const Hero = () => {
  return (
    <section className="hero-section mb-0 flex min-h-[10vh] flex-col items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        <div className="my-6"></div>
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center">Resume Builder</div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              {['AQliM', 'WCb99', 'dBNZV', 'tiisO', 're9B7', 'BKG4G', 'NaoVe', 'pwIlv', 'QmcAd', 'VG2eL'].map(
                (id, index) => (
                  <div
                    key={id}
                    id={`style-${id}`}
                    className={`animate-magic-sparkle style-${id} pointer-events-none absolute z-10`}
                  >
                    <svg
                      style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                      fill="none"
                      viewBox="0 0 68 68"
                      height={7 + (index % 5)}
                      width={7 + (index % 5)}
                      className="animate-spin-slow"
                    >
                      <path
                        fill="white"
                        d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 34 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                      />
                    </svg>
                  </div>
                ),
              )}
            </div>
          </div>
        </StyledWrapper>
      </div>
    </section>
  );
};

// Tags section with marquee animation
const Tags = () => {
  const tags = [
    'Professional Templates',
    'ATS Friendly',
    'Modern Designs',
    'Easy Editor',
    'PDF Export',
    'Real-time Preview',
    'Custom Sections',
    'Mobile Responsive',
    'Industry Specific',
    'Career Focused',
    'Clean Layouts',
    'Print Ready',
    'Quick Build',
    'Professional Look',
    'Customizable',
    'Modern Styling',
    'Expert Approved',
    'Job Ready',
    'Stand Out',
    'Get Hired',
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h1 className="text-md text-primary mb-8 text-center font-bold text-[#00a6fb] lg:text-2xl">
        Create Professional Resumes That Get You Hired
      </h1>
      <Marquee gradient={false} speed={60} pauseOnHover loop={0} className="w-full">
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>
      <div className="my-4"></div>
      <Marquee gradient={false} speed={60} pauseOnHover loop={0} direction="right" className="w-full">
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>
      <style jsx>{`
        .tag-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #00a6fb;
          background-color: rgba(1, 11, 31, 0.58);
          color: #e2e8f0;
          font-size: 0.915rem;
          text-align: center;
          min-width: max-content;
        }
      `}</style>
    </section>
  );
};

// Features cards with filterable search input
const ResumeBuilderCards = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ResumeFeatures = [
    {
      title: 'Quick Builder',
      description: 'Create your professional resume in minutes with our intuitive builder.',
      icon: <Edit className="h-8 w-8 text-[#00a6fb]" />,
      tags: ['Quick', 'Easy', 'Intuitive', 'Professional'],
    },
    {
      title: 'Live Preview',
      description: 'See your resume come to life with real-time preview as you build.',
      icon: <Eye className="h-8 w-8 text-[#00a6fb]" />,
      tags: ['Real-time', 'Preview', 'WYSIWYG', 'Visual'],
    },
    {
      title: 'PDF Export',
      description: 'Download your resume as a high-quality PDF ready for applications.',
      icon: <Download className="h-8 w-8 text-[#00a6fb]" />,
      tags: ['PDF', 'Download', 'Export', 'Print Ready'],
    },
    {
      title: 'ATS Friendly',
      description: 'Optimized templates that pass through Applicant Tracking Systems.',
      icon: <TrendingUp className="h-8 w-8 text-[#00a6fb]" />,
      tags: ['ATS', 'Optimized', 'Tracking', 'Systems'],
    },
    {
      title: 'Share & Collaborate',
      description: 'Share your resume link or collaborate with career counselors.',
      icon: <Share2 className="h-8 w-8 text-[#00a6fb]" />,
      tags: ['Share', 'Collaborate', 'Link', 'Feedback'],
    },
    {
      title: 'AI Assistant',
      description: 'Get AI-powered suggestions to improve your resume content.',
      icon: <Sparkles className="h-8 w-8 text-[#00a6fb]" />,
      tags: ['AI', 'Assistant', 'Suggestions', 'Improve', 'Coming Soon'],
    },
  ];

  const filteredFeatures = ResumeFeatures.filter((feature) => {
    const searchContent = `${feature.title} ${feature.description} ${feature.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <section className="features-section mx-auto w-full px-4 py-8 text-white lg:max-w-[80%]">
      <div className="mx-auto mb-8 text-center">
        <div className="mx-4">
          <div className="relative mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search Features..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full rounded-full border border-[#00a6fb] bg-[rgba(15,27,53,0.9)] py-3 pl-12 pr-4 text-white placeholder-gray-400 outline-none ring-2 ring-transparent transition-all focus:ring-[#00a6fb]"
              />
            </div>
          </div>
        </div>
      </div>
      {filteredFeatures.length === 0 ? (
        <div className="py-8 text-center">
          <p className="text-xl text-gray-400">No features found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature, index) => (
            <StyledDot key={index}>
              <div className="feature-card to-[rgba(0, 43, 62, 0.6)] group relative block h-full rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:transform">
                <span className="absolute inset-0"></span>
                <div className="project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
                  <div>
                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                    <h3 className="mb-4 text-2xl font-semibold text-[#00a6fb]">{feature.title}</h3>
                    <p className="flex-grow text-xs text-gray-300 sm:text-sm">{feature.description}</p>
                    <div className="mb-4 mt-2 flex flex-wrap justify-center gap-1">
                      {feature.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full border border-[#00a6fb] bg-gray-900 px-1.5 py-0.5 text-[10px] text-gray-300 sm:px-2 sm:py-1 sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="dot" />
              </div>
            </StyledDot>
          ))}
        </div>
      )}
    </section>
  );
};

// Action section with buttons to start building or analyze resume
const ActionSection = () => {
  const navigate = useNavigate();

  const handleStartBuilding = () => {
    console.log('Start Building Now clicked, navigating to /ResumeBuilder');
    navigate('/ResumeBuilder');
  };

  const handleAnalyzeResume = () => {
    console.log('Analyzing resume...');
    navigate('/ResumeAnalyzer');
  };

  return (
    <section className="action-section mx-auto w-full px-4 py-16 text-white lg:max-w-[80%]">
      <div className="text-center">
        <h2 className="mb-8 text-4xl font-bold text-[#00a6fb]">Ready to Build Your Resume?</h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
          Choose your path to creating a professional resume that gets you noticed by employers.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <StyledButton onClick={handleStartBuilding}>
            <div className="blob1" />
            <div className="inner">Start Building Now</div>
          </StyledButton>
          <StyledButton onClick={handleAnalyzeResume}>
            <div className="blob1" />
            <div className="inner">
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                AI Resume Analyzer
              </span>
            </div>
          </StyledButton>
        </div>
      </div>
    </section>
  );
};

// Styled button with hover and animation effects
const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  padding: 1px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::after {
    content: '';
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  &:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 50px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle 60px at 0% 100%, #3fe9ff, #0000ff80, transparent);
    box-shadow: -10px 10px 30px #0051ff2d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }

  &:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    background: radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent);
    position: absolute;
    transition: opacity 0.3s;
  }

  &:hover .inner::before {
    opacity: 0;
  }

  @keyframes zoom {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

// Styled container for the white moving dot animation on feature cards
const StyledDot = styled.div`
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

// Styled wrapper for sparkle animations and related styles
const StyledWrapper = styled.div`
  .relative {
    position: relative;
  }
  .inline-block {
    display: inline-block;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .inset-0 {
    inset: 0;
  }
  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    width: 300px !important;
  }
  button {
    text-transform: none;
    cursor: pointer;
  }
  .inline-flex {
    display: inline-flex;
  }
  .justify-center {
    justify-content: center;
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .bg-primary {
    --tw-bg-opacity: 1;
    background-color: rgba(15, 27, 53, 0);
  }
  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  .px-18 {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }
  .py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
  .font-bold {
    font-weight: 700;
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .focus\:outline-none:focus {
    outline specials: 2px solid transparent;
    outline-offset: 2px;
  }
  .enabled\:hover\:shadow-md:hover:enabled {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .disabled\:opacity-50:disabled {
    opacity: 0.5;
  }
  .animate-magic-sparkle {
    animation: magic-sparkle 3s infinite;
  }
  .style-AQliM {
    top: 10%;
    left: 5%;
  }
  .style-WCb99 {
    top: 20%;
    right: 10%;
  }
  .style-dBNZV {
    bottom: 15%;
    left: 15%;
  }
  .style-tiisO {
    top: 30%;
    left: 25%;
  }
  .style-re9B7 {
    bottom: 25%;
    right: 20%;
  }
  .style-BKG4G {
    top: 15%;
    right: 30%;
  }
  .style-NaoVe {
    bottom: 10%;
    left: 35%;
  }
  .style-pwIlv {
    top: 25%;
    right: 15%;
  }
  .style-QmcAd {
    bottom: 20%;
    left: 10%;
  }
  .style-VG2eL {
    top: 35%;
    right: 25%;
  }
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
  @keyframes magic-sparkle {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Home page with all the main sections
const Home = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Tags />
      <ResumeBuilderCards />
      <ActionSection />
      <Footer />
    </div>
  );
};

// Main app entry with routing
const App = () => {
  return (
    <ResumeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/ResumeAnalyzer" element={<ResumeAnalyzer />} />
      </Routes>
    </ResumeProvider>
  );
};

export default App;
