import React from 'react';

const ProjectsPage = () => {
  return (
    <section className="contribution-section">
      <h1 className="title">
        Add Project Showcase Features on the 👇🏻{' '}
        <a href="https://www.devdisplay.org/ProjectShowcase" target="_blank" rel="noopener noreferrer">
          https://www.devdisplay.org/ProjectShowcase
        </a>
      </h1>

      <div className="description">
        <h2>🚀 Description</h2>
        <p>
          Add a feature on this page where developers can showcase their projects. Developers will first add their
          projects through open-source contributions, and then the projects will be showcased here.
        </p>
        <h3>✨ Interactive Voting and Liking System</h3>
        <p>
          Each showcased project will have a voting or liking mechanism. Users can vote for or like projects they find
          impressive, helping highlight the most popular and trending projects within the community.
        </p>
      </div>

      <div className="resources">
        <h2>🛠 Resources to Help You</h2>
        <ul>
          <li>
            <strong>Project Showcase Inspiration</strong> -{' '}
            <a href="https://www.projectshut.tech/" target="_blank" rel="noopener noreferrer">
              https://www.projectshut.tech/
            </a>
          </li>
          <li>
            <strong>Source Code</strong> -{' '}
            <a href="https://github.com/priyankarpal/projectshut" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </li>
        </ul>
      </div>

      <div className="purpose">
        <h2>🎯 Purpose of this Feature</h2>
        <ul>
          <li>
            <strong>Developer Project Submissions:</strong> Allow developers to submit their projects via open-source
            contributions.
          </li>
          <li>
            <strong>Interactive Voting and Liking System:</strong> Users can vote for or like showcased projects,
            dynamically highlighting the most popular ones.
          </li>
        </ul>
      </div>

      <div className="benefits">
        <h2>🌟 Benefits to the Community</h2>
        <ul>
          <li>Provides a platform for developers to showcase their skills and projects.</li>
          <li>Fosters community participation and engagement.</li>
          <li>Highlights outstanding projects, giving developers greater visibility.</li>
        </ul>
      </div>

      <div className="contribution-benefits">
        <h2>🏅 Benefits of Contributing to This Feature</h2>
        <ul>
          <li>
            <strong>Gain Recognition 💌:</strong> Be featured as a core team member on the Contributor Wall of Fame.
          </li>
          <li>
            <strong>Career Credentials 🚀:</strong> Receive an Internship & Experience Certificate for your
            contribution.
          </li>
          <li>
            <strong>Exclusive Opportunities 🎯:</strong> Priority access to jobs, hackathons, and bootcamps.
          </li>
          <li>
            <strong>Swags 🎁:</strong> Get exclusive DevDisplay merchandise like T-shirts, hoodies, and stickers.
          </li>
          <li>
            <strong>Expand Your Network 👋🏻:</strong> Collaborate with a global community of developers.
          </li>
        </ul>
      </div>

      <div className="contact">
        <h2>📧 For More Details and Help</h2>
        <ul>
          <li>
            Join DevDisplay Discord:{' '}
            <a href="https://discord.gg/chyt2UgTv5" target="_blank" rel="noopener noreferrer">
              Join Here
            </a>
          </li>
          <li>Email: team@devdisplay.org</li>
          <li>Creator's Email: hellow.ashutosh@gmail.com</li>
          <li>
            Follow on Social Media:{' '}
            <a href="https://www.linkedin.com/company/devdisplay/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            ,{' '}
            <a href="https://x.com/devdisplay_" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            ,{' '}
            <a href="https://www.instagram.com/devdisplay/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <p className="thank-you">Thanks and Best Regards, 🌟 DevDisplay Team 💌</p>
    </section>
  );
};

export default ProjectsPage;
