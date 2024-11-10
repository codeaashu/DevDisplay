import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">This is the Project Showcase page</h1>
        <h1 className="text-2xl font-bold">Want to Build this page as a contributer</h1>
      </header>
      <h1>Features</h1>
      <h1>
        Add a features in this page where developer can showcase their project - Develoepr first add their project
        through the open source contribution and then the project are showcasing in this page{' '}
      </h1>
      <h1>
        After that add a voting or liking on every project where user can like and vote for trending the project - like
        this website (https://peerlist.io/projects){' '}
      </h1>
      <h1>Take help by this 👇🏻</h1>
      <a href="https://www.projectshut.tech/ ">Project adding inspiration</a> and thier source code{' '}
      <a href="https://github.com/priyankarpal/projectshut">Source Code</a>
    </div>
  );
};

export default ProjectsPage;
