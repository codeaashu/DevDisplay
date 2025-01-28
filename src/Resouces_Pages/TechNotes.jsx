import React from 'react';
import Navbar from './commonComponents/Navbar';

const techNotes = [
  {
    title: 'Understanding RESTful APIs',
    author: 'John Doe',
    description:
      'An in-depth guide to understanding RESTful APIs, their principles, and how to design them effectively.',
    content:
      'RESTful APIs are based on the principles of Representational State Transfer. They are stateless, cacheable, and designed around resources.',
    url: 'https://developer.mozilla.org/en-US/docs/Glossary/REST',
  },
  {
    title: 'Introduction to Cloud Computing',
    author: 'Jane Smith',
    description:
      'Learn the basics of cloud computing and explore different types of cloud services and deployment models.',
    content:
      'Cloud computing provides on-demand delivery of IT resources over the internet with pay-as-you-go pricing.',
    url: 'https://aws.amazon.com/what-is-cloud-computing/',
  },
  {
    title: 'Version Control with Git',
    author: 'Alex Johnson',
    description: 'Master Git and GitHub with this comprehensive guide on version control for developers.',
    content:
      'Git is a distributed version control system that allows developers to track changes and collaborate efficiently.',
    url: 'https://git-scm.com/doc',
  },
  {
    title: 'CSS Grid vs Flexbox',
    author: 'Emily Davis',
    description: 'A comparison of CSS Grid and Flexbox, with examples to help you choose the right layout method.',
    content: 'CSS Grid is ideal for two-dimensional layouts, while Flexbox excels in one-dimensional alignment tasks.',
    url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
  },
  {
    title: 'Building Scalable Backend Systems',
    author: 'Michael Brown',
    description: 'Techniques and best practices for building scalable and maintainable backend systems.',
    content:
      'Scalability in backend systems is achieved through horizontal scaling, load balancing, and efficient database design.',
    url: 'https://www.scalable-system-design.com/',
  },
];

const TechNotes = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">Tech Notes</h1>
        <div className="grid grid-cols-1 gap-8">
          {techNotes.map((note, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-8 shadow-lg transition hover:shadow-xl">
              <h2 className="mb-4 text-2xl font-semibold text-[#00a6fb]">{note.title}</h2>
              <h3 className="mb-4 text-sm text-gray-300">Author: {note.author}</h3>
              <p className="mb-4 text-sm text-gray-400">{note.description}</p>
              <p className="mb-6 text-gray-300">{note.content}</p>
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00a6fb] hover:underline"
              >
                Read Full Article
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechNotes;
