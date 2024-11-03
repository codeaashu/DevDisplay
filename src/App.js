import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from './Homepage';
import Opportunities from './Page/Opportunities.jsx';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>DevDisplay - Your Global Open Source Community Platform</title>
        <meta
          name="description"
          content="DevDisplay brings together all your tech needs in one place. Showcase your skills, connect with collaborators, and join a user-friendly, searchable platform."
        />
        <meta
          name="keywords"
          content="DevDisplay, open source, community, tech skills, collaboration, tech platform, developers"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="DevDisplay - Your Global Open Source Community Platform" />
        <meta
          property="og:description"
          content="Join DevDisplay to showcase your skills and connect with potential collaborators, all in a user-friendly, searchable format."
        />
        <meta property="og:image" content="https://www.devdisplay.org/og-image.jpg" />
        <meta property="og:url" content="https://www.devdisplay.org" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevDisplay" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DevDisplay - Your Global Open Source Community Platform" />
        <meta
          name="twitter:description"
          content="Showcase your skills, connect with collaborators, and join a user-friendly platform for developers worldwide."
        />
        <meta name="twitter:image" content="https://www.devdisplay.org/twitter-image.jpg" />
        <meta name="twitter:site" content="@devdisplay" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.devdisplay.org" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <meta name="theme-color" content="#317EFB" />

        <meta name="author" content="DevDisplay Team" />

        <meta property="og:locale" content="en_US" />
      </Helmet>

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
