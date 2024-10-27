import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  return (
    <a
      href={data.social?.GitHub}
      target="_blank"
      rel="noreferrer"
      className="mx-auto my-6 flex w-[300px] flex-col items-center justify-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-200 hover:shadow-2xl dark:bg-textPrimary"
    >
      {/* Profile Picture */}
      <img src={data.avatar} alt={`${data.name}'s profile`} className="mb-4 h-24 w-24 rounded-full" />

      {/* Name and Location */}
      <h2 className="mb-1 text-center text-lg font-semibold dark:text-white">{data.name}</h2>
      <p className="mb-4 flex items-center text-sm text-gray-500 dark:text-white">
        <FaMapMarkerAlt className="mr-1" />
        {data.location}
      </p>

      {/* Bio */}
      <p className="mb-4 text-center text-sm text-gray-600 dark:text-white">{data.bio}</p>

      {/* Skills - Ticker/Scrolling Effect */}
      <div className="relative flex w-full overflow-hidden">
        <div className="animate-scroll flex gap-2 whitespace-nowrap">
          {data.skills.map((skill, index) => (
            <span key={index} className="rounded-full bg-blue-200 px-2 py-1 text-xs font-medium text-blue-800">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-4 flex space-x-4">
        {data.social?.GitHub && <FaGithub className="text-xl text-gray-800 hover:text-blue-600" />}
        {data.social?.Twitter && <FaTwitter className="text-xl text-blue-400 hover:text-blue-600" />}
        {data.social?.LinkedIn && <FaLinkedin className="text-xl text-blue-700 hover:text-blue-600" />}
      </div>
    </a>
  );
}

export default Profile;
