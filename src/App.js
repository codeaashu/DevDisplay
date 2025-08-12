// filepath: c:\Users\Ashutosh\OneDrive\Documents\GitHub\DevDisplay\src\App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import Homepage from './Homepage';
// Introducing DevDisplay
import Home from './Page/Home.jsx';
// NavBar Pages
import About from './Page/About.jsx';
import Connect from './Page/Connect.jsx';
import Contribution from './Page/Contribution.jsx';
import SponsorUs from './Page/Sponsor.jsx';
import DevSpring from './Page/DevSpring.jsx';
// Features Pages
import IdeaSubmission from './Page/IdeaSubmission.jsx';
import PortfolioIdeas from './Page/PortfolioIdeas/PortfolioIdeas.jsx';
import PortfolioBuilder from './Page/PortfolioBuilder.jsx';
import ProjectShowcase from './Page/ProjectShowcase.jsx';
import Resume from './Page/Resume.jsx';
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder.jsx';
import ResumeAnalyzer from './components/ResumeAnalyzer/ResumeAnalyzer.jsx';
import Discussions from './Page/Discussions.jsx';
import IndustryTrends from './Page/IndustryTrends.jsx';
import JourneyPage from './Page/JourneyPage.jsx';
import AiCareer from './Page/AiCareer.jsx';
import AIToolsHub from './Page/AIToolsHub.jsx';
import AchieverJourneyPage from './components/AchievementJourney/IndividualJourney.js';
import Leaderboard from './Page/Leaderboard.jsx';
// Features - Opportunities Hub Pages
import Opportunities from './Page/Opportunities.jsx';
import Jobs from './Page/OpportunitiesHub/Jobs.jsx';
import Internships from './Page/OpportunitiesHub/Internships.jsx';
import Freelancing from './Page/OpportunitiesHub/Freelancing.jsx';
import Hackathons from './Page/OpportunitiesHub/Hackathons.jsx';
import Competitions from './Page/OpportunitiesHub/Competitions.jsx';
import Events from './Page/OpportunitiesHub/Events.jsx';
import Bootcamps from './Page/OpportunitiesHub/Bootcamps.jsx';
import Certifications from './Page/OpportunitiesHub/Certifications.jsx';
import OpenSource from './Page/OpportunitiesHub/OpenSource.jsx';
// Features - Resources Hub Pages
import Resources from './Page/Resources.jsx';
import Documentation from './Page/ResoucesHub/Documentation.jsx';
import Courses from './Page/ResoucesHub/Courses.jsx';
import Notes from './Page/ResoucesHub/Notes.jsx';
import DevTools from './Page/ResoucesHub/DevTools.jsx';
import Roadmaps from './Page/ResoucesHub/Roadmaps.jsx';
import Libraries from './Page/ResoucesHub/Libraries.jsx';
import Preparation from './Page/ResoucesHub/Preparation.jsx';
import UsefulRepo from './Page/ResoucesHub/UsefulRepo.jsx';
import ResearchPaper from './Page/ResoucesHub/ResearchPaper.jsx';
import APIs from './Page/ResoucesHub/APIs.jsx';
import BestColleges from './Page/ResoucesHub/BestColleges.jsx';
import DevShare from './Page/ResoucesHub/DevShare.jsx';

import PageNotFound from './Page/PageNotFound.jsx';
import ProfilePage from './components/Profile/ProfilePage';
import { ResumeProvider } from './components/ResumeBuilder/context/ResumeContext.jsx';

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
    </BrowserRouter>
  );
}

export default App;
