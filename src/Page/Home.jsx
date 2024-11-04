import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-8 text-white">
        <h1 className="text-4xl font-bold">Welcome to TechDisplay</h1>
        <p className="mt-2 text-lg">Your hub for all tech-related opportunities and resources.</p>
      </header>
      <main className="p-4">
        <section className="my-8">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-2 text-lg">
            TechDisplay aims to provide a comprehensive platform for tech enthusiasts to find opportunities, access
            resources, showcase projects, submit ideas, engage in discussions, build portfolios, and create resumes.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Opportunities</h2>
            <p>Find the latest job opportunities in tech.</p>
            <a href="/opportunities" className="text-blue-500">
              Learn more
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Tech Resources</h2>
            <p>Access a wealth of tech-related resources.</p>
            <a href="/resources" className="text-blue-500">
              Learn more
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Projects</h2>
            <p>Showcase and discover tech projects.</p>
            <a href="/projects" className="text-blue-500">
              Learn more
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Idea Submission</h2>
            <p>Submit and vote on new tech ideas.</p>
            <a href="/idea-submission" className="text-blue-500">
              Learn more
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Discussions</h2>
            <p>Engage in tech discussions with the community.</p>
            <a href="/discussions" className="text-blue-500">
              Learn more
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Portfolio Builder</h2>
            <p>Build and showcase your tech portfolio.</p>
            <a href="/portfolio-builder" className="text-blue-500">
              Learn more
            </a>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="text-xl font-bold">Resume Builder</h2>
            <p>Create and download your tech resume.</p>
            <a href="/resume-builder" className="text-blue-500">
              Learn more
            </a>
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Trending Projects</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Add project cards here */}
          </div>
        </section>
      </main>
      <footer className="animate-bounce bg-gray-800 p-4 text-center text-white">
        <p>&copy; 2023 TechDisplay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
