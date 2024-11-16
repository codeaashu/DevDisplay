import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from './Homepage';
import Home from './Page/Home.jsx';
import Opportunities from './Page/Opportunities.jsx';
import IdeaSubmission from './Page/IdeaSubmission.jsx';
import PortfolioBuilder from './Page/PortfolioBuilder.jsx';
import ProjectShowcase from './Page/ProjectShowcase.jsx';
import ResumeBuilder from './Page/ResumeBuilder.jsx';
import Resources from './Page/Resources.jsx';
import Discussions from './Page/Discussions.jsx';
import NotFoundPage from './Page/NotFoundPage.jsx';

function App() {
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
        <Route path="/Home" element={<Home />} />
        <Route path="/Opportunities" element={<Opportunities />} />
        <Route path="/IdeaSubmission" element={<IdeaSubmission />} />
        <Route path="/PortfolioBuilder" element={<PortfolioBuilder />} />
        <Route path="/ProjectShowcase" element={<ProjectShowcase />} />
        <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Discussions" element={<Discussions />} />
        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
