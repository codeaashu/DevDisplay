import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">
          This is the Project Showcase page - Want to Build this page as a contributer
        </h1>
      </header>
      <h1 className="text-2xl font-bold">Features</h1>
      <h1>
        Add a features in this page where developer can showcase their project - Develoepr first add their project
        through the open source contribution and then the project are showcasing here
      </h1>
      <hr />
      <h1>
        After that add a voting or liking on every project where user can like and vote for trending the project - like
        this website (https://peerlist.io/projects){' '}
      </h1>
      <hr />
      <h1 className="text-2xl font-bold">Take help by this 👇🏻</h1>
      <h1>
        Project adding inspiration --- https://www.projectshut.tech/ --- and thier source code ---
        https://github.com/priyankarpal/projectshut
      </h1>
    </div>
  );
};

export default ProjectsPage;
