import React, { useState } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    // Example projects
    { id: 1, title: 'Project 1', description: 'Description of Project 1', votes: 0 },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', votes: 0 },
  ]);

  const handleVote = (id) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) => (project.id === id ? { ...project, votes: project.votes + 1 } : project)),
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = {
      id: projects.length + 1,
      title: event.target.title.value,
      description: event.target.description.value,
      votes: 0,
    };
    setProjects([...projects, newProject]);
    event.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">
          This is the Project Showcase page - Want to Build this page as a contributor
        </h1>
      </header>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Submit Your Project</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Project Title</label>
            <input type="text" name="title" className="w-full rounded-lg border p-2" required />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold">Project Description</label>
            <textarea name="description" className="w-full rounded-lg border p-2" required></textarea>
          </div>
          <button type="submit" className="rounded-lg bg-blue-500 px-4 py-2 text-white">
            Submit
          </button>
        </form>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Showcased Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg bg-white p-4 shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => handleVote(project.id)} className="rounded-lg bg-blue-500 px-4 py-2 text-white">
                  Vote
                </button>
                <span>{project.votes} Votes</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
