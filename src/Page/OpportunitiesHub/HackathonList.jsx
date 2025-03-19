import React from 'react';

const hackathons = [
  {
    organizer: 'Google',
    title: 'Code With Google',
    location: 'Online',
    date: '12 April',
    domains: ['Blockchain', 'Web', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg', // 👈 image path (stored in public/images)
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Google',
    title: 'Code With Google',
    location: 'Online',
    date: '12 April',
    domains: ['Blockchain', 'Web', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg', // 👈 image path (stored in public/images)
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
  },
  // ... Add others similarly
];

const HackathonCardComponent = ({
  organizer,
  title,
  location,
  date,
  domains,
  applyLink,
  poster, // 👈 Destructure the `poster` prop
}) => {
  return (
    <div className="flex w-72 flex-col justify-between gap-2 rounded-xl border bg-white p-4 shadow-md">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-red-600">🚩 {organizer}</span>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-200 px-2 py-1 text-xs hover:bg-gray-300"
        >
          Apply Now
        </a>
      </div>

      {/* Poster Image */}
      <div className="h-32 w-full overflow-hidden rounded-lg">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png'; // fallback image
          }}
        />
      </div>

      {/* Title */}
      <h2 className="mt-2 text-lg font-bold">{title}</h2>

      {/* Location + Date */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>📍 {location}</span>
        <span>📅 {date}</span>
      </div>

      {/* Domains/Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {domains.map((domain, idx) => (
          <span key={idx} className="rounded-full border border-gray-300 bg-gray-100 px-2 py-1 text-xs">
            • {domain}
          </span>
        ))}
      </div>
    </div>
  );
};

const HackathonList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {hackathons.map((hackathon, idx) => (
        <HackathonCardComponent key={idx} {...hackathon} />
      ))}
    </div>
  );
};

export default HackathonList;
