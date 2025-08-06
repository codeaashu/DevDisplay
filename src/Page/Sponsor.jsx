import React from 'react';
import Navbar from '../components/Navbar';
import { SupportersComponent } from './Home';
const SponsorUs = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="min-h-screen bg-gray-900 p-8 text-white">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Thank you for your interest in sponsoring <strong>DevDisplay</strong>
        </h3>

        <h4 className="mb-6 text-center text-4xl font-bold">
          DevDisplay - Global Open Source Tech Community & Organization
        </h4>

        <p className="mb-6 text-lg">
          We are excited to offer you the opportunity to partner with us as a sponsor for our upcoming events and
          initiatives. Your involvement will help us further our mission of fostering collaboration and innovation
          within the tech community.
        </p>

        <div className="mb-8">
          <h6 className="mb-2 text-xl font-semibold">What is DevDisplay?</h6>
          <p className="mb-4">
            DevDisplay is a global open-source tech community with the mission to unite all tech-related needs under one
            platform. We are building a vibrant community that nurtures collaboration, innovation, and skill-building.
            DevDisplay is the ultimate hub for developers to grow, learn, and thrive in the tech ecosystem.
          </p>
          <p className="mb-4">
            Learn more about us at{' '}
            <a
              href="http://www.devdisplay.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              www.devdisplay.org
            </a>
            .
          </p>
        </div>

        <h5 className="mb-6 text-2xl font-bold">As a sponsor, you’ll have the opportunity to:</h5>
        <ul className="mb-6 list-disc pl-6 text-lg">
          <li>Gain visibility within the global tech community and beyond.</li>
          <li>Showcase your brand to top-tier developers, designers, and industry leaders.</li>
          <li>Support innovation in real-world projects that address global challenges.</li>
          <li>
            Enhance your corporate image by contributing to the growth of open-source and empowering the next generation
            of tech professionals.
          </li>
        </ul>

        <h6 className="mb-6 text-xl font-semibold">
          We are seeking sponsors who can help us make DevDisplay a success by providing support in the following areas:
        </h6>
        <ul className="mb-6 list-disc pl-6 text-lg">
          <li>Financial contributions.</li>
          <li>Developer tools, platforms, or services.</li>
          <li>Swag items, gifts, or giveaways for participants.</li>
          <li>Hosting venues or virtual event platforms.</li>
          <li>Mentorship or technical resources for participants.</li>
        </ul>

        <h5 className="mb-6 text-2xl font-bold">
          We invite you to be a part of this exciting opportunity and create a lasting impact together with us. Reach
          out to us to discuss how you can contribute!
        </h5>

        <h6 className="mb-6 text-center text-xl font-semibold">Let’s build something remarkable together! 🌟</h6>

        <p className="mb-6 text-lg">
          For inquiries or to discuss sponsorship opportunities, please contact us at{' '}
          <a href="mailto:team@devdisplay.org" className="text-blue-500 hover:underline">
            team@devdisplay.org
          </a>
          .
        </p>

        <div className="mt-6 text-center">
          <a href="https://chat.whatsapp.com/FBPqCMHnS0a1xG9xjaKeVr" target="_blank" rel="noopener noreferrer">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Join the Sponsor Group
            </button>
          </a>
        </div>

        <p className="mt-6 text-center text-lg">
          We appreciate your support and look forward to collaborating with you!
        </p>
      </div>
      <SupportersComponent />
    </div>
  );
};

export default SponsorUs;
