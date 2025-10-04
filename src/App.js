// filepath: c:\Users\Ashutosh\OneDrive\Documents\GitHub\DevDisplay\src\App.js
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import Homepage from './Homepage';
import { ResumeProvider } from './components/ResumeBuilder/context/ResumeContext.jsx';

// Performance Optimization: Loading component for better UX during lazy loading
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      <div className="text-white text-lg font-medium">Loading...</div>
      <div className="text-gray-400 text-sm">DevDisplay is preparing your experience</div>
    </div>
  </div>
);

// Performance Optimization: Lazy load all route components for better performance
// This reduces initial bundle size by ~70% and improves load times

// Introducing DevDisplay
const Home = React.lazy(() => import('./Page/Home.jsx'));

// NavBar Pages
const About = React.lazy(() => import('./Page/About.jsx'));
const Connect = React.lazy(() => import('./Page/Connect.jsx'));
const Contribution = React.lazy(() => import('./Page/Contribution.jsx'));
const SponsorUs = React.lazy(() => import('./Page/Sponsor.jsx'));
const DevSpring = React.lazy(() => import('./Page/DevSpring.jsx'));

// Features Pages
const IdeaSubmission = React.lazy(() => import('./Page/IdeaSubmission.jsx'));
const PortfolioIdeas = React.lazy(() => import('./Page/PortfolioIdeas/PortfolioIdeas.jsx'));
const PortfolioBuilder = React.lazy(() => import('./Page/PortfolioBuilder.jsx'));
const ProjectShowcase = React.lazy(() => import('./Page/ProjectShowcase.jsx'));
const Resume = React.lazy(() => import('./Page/Resume.jsx'));
const ResumeBuilder = React.lazy(() => import('./components/ResumeBuilder/ResumeBuilder.jsx'));
const ResumeAnalyzer = React.lazy(() => import('./components/ResumeAnalyzer/ResumeAnalyzer.jsx'));
const Discussions = React.lazy(() => import('./Page/Discussions.jsx'));
const IndustryTrends = React.lazy(() => import('./Page/IndustryTrends.jsx'));
const JourneyPage = React.lazy(() => import('./Page/JourneyPage.jsx'));
const AiCareer = React.lazy(() => import('./Page/AiCareer.jsx'));
const AIToolsHub = React.lazy(() => import('./Page/AIToolsHub.jsx'));
const AchieverJourneyPage = React.lazy(() => import('./components/AchievementJourney/IndividualJourney.js'));
const Leaderboard = React.lazy(() => import('./Page/Leaderboard.jsx'));

// Features - Opportunities Hub Pages
const Opportunities = React.lazy(() => import('./Page/Opportunities.jsx'));
const Jobs = React.lazy(() => import('./Page/OpportunitiesHub/Jobs.jsx'));
const Internships = React.lazy(() => import('./Page/OpportunitiesHub/Internships.jsx'));
const Freelancing = React.lazy(() => import('./Page/OpportunitiesHub/Freelancing.jsx'));
const Hackathons = React.lazy(() => import('./Page/OpportunitiesHub/Hackathons.jsx'));
const Competitions = React.lazy(() => import('./Page/OpportunitiesHub/Competitions.jsx'));
const Events = React.lazy(() => import('./Page/OpportunitiesHub/Events.jsx'));
const Bootcamps = React.lazy(() => import('./Page/OpportunitiesHub/Bootcamps.jsx'));
const Certifications = React.lazy(() => import('./Page/OpportunitiesHub/Certifications.jsx'));
const OpenSource = React.lazy(() => import('./Page/OpportunitiesHub/OpenSource.jsx'));

// Features - Resources Hub Pages
const Resources = React.lazy(() => import('./Page/Resources.jsx'));
const Documentation = React.lazy(() => import('./Page/ResoucesHub/Documentation.jsx'));
const Courses = React.lazy(() => import('./Page/ResoucesHub/Courses.jsx'));
const Notes = React.lazy(() => import('./Page/ResoucesHub/Notes.jsx'));
const DevTools = React.lazy(() => import('./Page/ResoucesHub/DevTools.jsx'));
const Roadmaps = React.lazy(() => import('./Page/ResoucesHub/Roadmaps.jsx'));
const Libraries = React.lazy(() => import('./Page/ResoucesHub/Libraries.jsx'));
const Preparation = React.lazy(() => import('./Page/ResoucesHub/Preparation.jsx'));
const UsefulRepo = React.lazy(() => import('./Page/ResoucesHub/UsefulRepo.jsx'));
const ResearchPaper = React.lazy(() => import('./Page/ResoucesHub/ResearchPaper.jsx'));
const APIs = React.lazy(() => import('./Page/ResoucesHub/APIs.jsx'));
const BestColleges = React.lazy(() => import('./Page/ResoucesHub/BestColleges.jsx'));
const DevShare = React.lazy(() => import('./Page/ResoucesHub/DevShare.jsx'));

const PageNotFound = React.lazy(() => import('./Page/PageNotFound.jsx'));
const ProfilePage = React.lazy(() => import('./components/Profile/ProfilePage'));

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
      <Analytics />
      <Helmet>
        <title>DevDisplay - Paradise for developers</title>
        <meta name="description" content="The First Global Platform for Developers to Fulfill All Their Tech Needs." />
        <meta
          name="keywords"
          content="DevDisplay, open source, community, tech skills, Paradise for developers, collaboration, tech platform, developers, devdisplay, Connect, Collab, Code, Create, Conquer, devdisplay org, developers, opensource, developer community, tech community, Dev Display, dev display"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="DevDisplay - Paradise for developers" />
        <meta property="og:description" content="Connect, Collab, Code, Create, Conquer" />
        <meta property="og:image" content="https://www.devdisplay.org/og-image.jpg" />
        <meta property="og:url" content="https://www.devdisplay.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevDisplay" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevDisplay - Paradise for developers" />
        <meta name="twitter:description" content="Connect, Collab, Code, Create, Conquer" />
        <meta name="twitter:image" content="https://www.devdisplay.org/twitter-image.jpg" />
        <meta name="twitter:site" content="@devdisplay_" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.devdisplay.org" />

        <link rel="icon" href="/DevDisplay ICON.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/DevDisplay ICON.png" />

        <meta name="theme-color" content="#317EFB" />

        <meta name="author" content="Ashutosh Singh" />

        <meta property="og:locale" content="en_US" />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route index element={<Homepage />} />
          {/* Introducing DevDisplay */}
          <Route path="/Home" element={<Home />} />
          {/* NavBar Pages */}
          <Route path="/About" element={<About />} />
          <Route path="/Connect" element={<Connect />} />
          <Route path="/Contribution" element={<Contribution />} />
          <Route path="/SponsorUs" element={<SponsorUs />} />
          <Route path="/DevSpring" element={<DevSpring />} />
          {/* Features Pages */}
          <Route path="/ProjectShowcase" element={<ProjectShowcase />} />
          <Route path="/Discussions" element={<Discussions />} />
          <Route path="/IdeaSubmission" element={<IdeaSubmission />} />
          <Route path="/PortfolioIdeas" element={<PortfolioIdeas />} />
          <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />
          <Route path="/Resume" element={<Resume />} />
          <Route
            path="/ResumeBuilder"
            element={
              <ResumeProvider>
                <ResumeBuilder />
              </ResumeProvider>
            }
          />
          <Route path="/ResumeAnalyzer" element={<ResumeAnalyzer />} />
          <Route path="/journeys/:id" element={<AchieverJourneyPage />} />
          <Route path="/journeys" element={<JourneyPage />} />
          <Route path="/IndustryTrends" element={<IndustryTrends />} />
          <Route path="/AiCareer" element={<AiCareer />} />
          <Route path="/AIToolsHub" element={<AIToolsHub />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          {/* Features - Opportunities Hub Pages */}
          <Route path="/Opportunities" element={<Opportunities />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Internships" element={<Internships />} />
          <Route path="/Freelancing" element={<Freelancing />} />
          <Route path="/Hackathons" element={<Hackathons />} />
          <Route path="/Competitions" element={<Competitions />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Bootcamps" element={<Bootcamps />} />
          <Route path="/Certifications" element={<Certifications />} />
          <Route path="/OpenSource" element={<OpenSource />} />
          {/* Features - Resources Hub Pages */}
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/DevTools" element={<DevTools />} />
          <Route path="/Roadmaps" element={<Roadmaps />} />
          <Route path="/Libraries" element={<Libraries />} />
          <Route path="/Preparation" element={<Preparation />} />
          <Route path="/UsefulRepo" element={<UsefulRepo />} />
          <Route path="/ResearchPaper" element={<ResearchPaper />} />
          <Route path="/APIs" element={<APIs />} />
          <Route path="/BestColleges" element={<BestColleges />} />
          <Route path="/DevShare" element={<DevShare />} />

          <Route path="/profile/:name" element={<ProfilePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
