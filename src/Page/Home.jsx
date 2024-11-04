import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Welcome to TechDisplay</h1>
        <p>Your hub for all tech-related opportunities and resources.</p>
      </header>
      <main className="p-4">
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
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Trending Projects</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Add project cards here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
