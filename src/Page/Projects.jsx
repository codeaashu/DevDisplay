import React from 'react';

const projects = [
  // Add projects here
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Projects</h1>
      </header>
      <main className="mt-4">
        <section className="mb-8">
          <h2 className="text-xl font-bold">Project Showcase</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="rounded-lg bg-white p-4 shadow">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <button className="mt-2 rounded-lg bg-blue-500 px-4 py-2">Upvote</button>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold">Project Spotlight</h2>
          {/* Add spotlight project here */}
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
