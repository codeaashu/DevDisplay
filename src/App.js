import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from './Homepage';
// Introducing DevDisplay
import Home from './Page/Home.jsx';
// NavBar Pages
import About from './Page/About.jsx';
import Contribution from './Page/Contribution.jsx';
import SponsorUs from './Page/Sponsor.jsx';
import DevSpring from './Page/DevSpring.jsx';
// Features Pages
import IdeaSubmission from './Page/IdeaSubmission.jsx';
import PortfolioIdeas from './Page/PortfolioIdeas.jsx';
import PortfolioBuilder from './Page/PortfolioBuilder.jsx';
import ProjectShowcase from './Page/ProjectShowcase.jsx';
import ResumeBuilder from './Page/ResumeBuilder.jsx';
import Discussions from './Page/Discussions.jsx';
import IndustryTrends from './Page/IndustryTrends.jsx';
import JourneyPage from './Page/JourneyPage.jsx';
import AiCareer from './Page/AiCareer.jsx';
import AIToolsHub from './Page/AIToolsHub.jsx';
import AchieverJourneyPage from './components/AchievementJourney/IndividualJourney.js';
// Features - Opportunities Hub Pages
import Opportunities from './Page/Opportunities.jsx';
import HybridOnsiteJobs from './Page/OpportunitiesHub/HybridOnsiteJobs.jsx';
import RemoteJobs from './Page/OpportunitiesHub/RemoteJobs.jsx';
import Internships from './Page/OpportunitiesHub/Internships.jsx';
import FreelanceWork from './Page/OpportunitiesHub/FreelanceWork.jsx';
import Hackathons from './Page/OpportunitiesHub/Hackathons.jsx';
import TechFestEvents from './Page/OpportunitiesHub/TechFestEvents.jsx';
import Bootcamps from './Page/OpportunitiesHub/Bootcamps.jsx';
import Certifications from './Page/OpportunitiesHub/Certifications.jsx';
import OpenSourceProgram from './Page/OpportunitiesHub/OpenSourceProgram.jsx';
// Features - Resources Hub Pages
import Resources from './Page/Resources.jsx';
import Documentation from './Page/ResoucesHub/Documentation.jsx';
import ProgrammingLanguages from './Page/ResoucesHub/ProgrammingLanguages.jsx';
import TechNotes from './Page/ResoucesHub/TechNotes.jsx';
import AITools from './Page/ResoucesHub/AITools.jsx';
import OpenSource from './Page/ResoucesHub/OpenSource.jsx';
import RoadmapGuide from './Page/ResoucesHub/RoadmapGuide.jsx';
import InterviewPrep from './Page/ResoucesHub/InterviewPrep.jsx';
import TopGithubRepo from './Page/ResoucesHub/TopGithubRepo.jsx';
import ContributionsGuide from './Page/ResoucesHub/ContributionsGuide.jsx';

import PageNotFound from './Page/PageNotFound.jsx';
function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>DevDisplay - Global Tech Hub</title>
        <meta
          name="description"
          content="DevDisplay brings together all your tech needs in one place. Showcase your skills, connect globally, collaborate, build and promote."
        />
        <meta
          name="keywords"
          content="DevDisplay, open source, community, tech skills, collaboration, tech platform, developers, devdisplay, devdisplay org, developers, opensource, developer community, tech community, Dev Display, dev display"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="DevDisplay - Global Tech Hub" />
        <meta
          property="og:description"
          content="Join DevDisplay to Showcase your skills, connect globally, collaborate, build and promote."
        />
        <meta property="og:image" content="https://www.devdisplay.org/og-image.jpg" />
        <meta property="og:url" content="https://www.devdisplay.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevDisplay" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevDisplay - Global Tech Hub" />
        <meta
          name="twitter:description"
          content="Showcase your skills, connect globally, collaborate, build and promote."
        />
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
        <Route path="/Contribution" element={<Contribution />} />
        <Route path="/SponsorUs" element={<SponsorUs />} />
        <Route path="/DevSpring" element={<DevSpring />} />
        {/* Features Pages */}
        <Route path="/ProjectShowcase" element={<ProjectShowcase />} />
        <Route path="/Discussions" element={<Discussions />} />
        <Route path="/IdeaSubmission" element={<IdeaSubmission />} />
        <Route path="/PortfolioIdeas" element={<PortfolioIdeas />} />
        <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/journeys/:id" element={<AchieverJourneyPage />} />
        <Route path="/journeys" element={<JourneyPage />} />
        <Route path="/IndustryTrends" element={<IndustryTrends />} />
        <Route path="/AiCareer" element={<AiCareer />} />
        <Route path="/AIToolsHub" element={<AIToolsHub />} />
        {/* Features - Opportunities Hub Pages */}
        <Route path="/Opportunities" element={<Opportunities />} />
        <Route path="/HybridOnsiteJobs" element={<HybridOnsiteJobs />} />
        <Route path="/RemoteJobs" element={<RemoteJobs />} />
        <Route path="/Internships" element={<Internships />} />
        <Route path="/FreelanceWork" element={<FreelanceWork />} />
        <Route path="/Hackathons" element={<Hackathons />} />
        <Route path="/TechFestEvents" element={<TechFestEvents />} />
        <Route path="/Bootcamps" element={<Bootcamps />} />
        <Route path="/Certifications" element={<Certifications />} />
        <Route path="/OpenSourceProgram" element={<OpenSourceProgram />} />
        {/* Features - Resources Hub Pages */}
        <Route path="/Resources" element={<Resources />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/courses" element={<ProgrammingLanguages />} />
        <Route path="/notes" element={<TechNotes />} />
        <Route path="/ai-tools" element={<AITools />} />
        <Route path="/libraries" element={<OpenSource />} />
        <Route path="/roadmaps" element={<RoadmapGuide />} />
        <Route path="/interview-kits" element={<InterviewPrep />} />
        <Route path="/github" element={<TopGithubRepo />} />
        <Route path="/community" element={<ContributionsGuide />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
