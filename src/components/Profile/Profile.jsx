import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6';

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const cardRef = React.useRef();

  // Redirect to GitHub profile on card click
  const handleCardClick = () => {
    if (data.social?.GitHub) {
      window.open(data.social.GitHub, "_blank");
    }
  };

  return (
    <div
      className="mb-6 cursor-pointer h-auto w-full max-w-lg mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-textPrimary hover:shadow-xl transition-shadow duration-300"
    >
      <div onClick={handleCardClick} className="flex flex-col items-center text-center gap-4">
        {/* Profile Image */}
        <div className="h-24 w-24 flex-shrink-0">
          <img src={data.avatar} className="h-full w-full rounded-full" alt="User logo" />
        </div>

        {/* Name and Location */}
        <h3 className="text-lg font-bold text-textPrimary dark:text-white">
          {data.name}
        </h3>
        <p className="flex items-center gap-1 text-sm text-secondaryColor dark:text-white">
          <FaLocationDot />
          {data.location}
        </p>

        {/* Skills */}
        <div
          className="skills-container mt-4 flex flex-wrap gap-2 justify-center"
          ref={cardRef}
        >
          {data.skills &&
            data.skills.map((skill, index) => (
              <div
                className="inline-block rounded-md bg-secondaryColor px-2 py-1 text-xs text-white"
                key={index}
              >
                {skill}
              </div>
            ))}
        </div>
      </div>

      {/* Bio and Social Links */}
      <div className="mt-4 text-center">
        <div className="dark:text-white text-textSecondary">{data.bio}</div>
        <div className="mt-2 flex justify-center gap-4">
          {data.social?.GitHub && (
            <a href={data.social.GitHub} target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}
          {data.social?.Twitter && (
            <a href={data.social.Twitter} target="_blank" rel="noreferrer">
              <FaXTwitter className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}
          {data.social?.LinkedIn && (
            <a href={data.social.LinkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
