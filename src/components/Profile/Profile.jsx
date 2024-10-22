import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6';

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const cardRef = React.useRef(null);

  const handleWheel = (event) => {
    event.stopPropagation();
    event.preventDefault();
    let container = event.target;
    if (!container) return false;

    while (!container.classList.contains('skills-container')) {
      container = container.parentNode;
    }

    const delta = event.deltaX || event.deltaY;
    container.scrollLeft += delta;
  };

  React.useEffect(() => {
    const cardElement = cardRef.current;

    // Ensure the cardElement exists before attaching the event listener
    if (cardElement) {
      cardElement.addEventListener('wheel', handleWheel, { passive: false });

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        cardElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div className="mb-6 h-auto rounded-lg bg-white p-6 shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800">
      <div className="relative flex gap-4">
        {/* Avatar */}
        <div className="h-24 w-24 flex-shrink-0">
          <img
            src={data.avatar}
            className="h-full w-full rounded-full shadow-lg transition-all hover:shadow-xl"
            alt={`${data.name}'s avatar`}
          />
        </div>

        {/* Profile Information */}
        <div className="w-[55%] sm:w-[75%]">
          <h3 className="text-lg font-bold dark:text-white">
            <a
              className="hover:text-blue-500 transition-colors"
              href={data.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              {data.name}
            </a>
          </h3>
          <p className="flex items-center gap-x-1 text-sm dark:text-gray-300">
            <FaLocationDot className="text-red-600" />
            {data.location}
          </p>

          {/* Skills Section */}
          <div className="group flex overflow-hidden">
            <div
              className="skills-container group-hover:paused mr-2 mt-4 flex h-auto animate-loop-scroll gap-4 whitespace-nowrap"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => (
                  <div
                    className="inline-block h-auto cursor-default rounded-md bg-blue-500 px-3 py-1 text-xs text-white sm:text-sm md:h-[30px] shadow-md transition-transform transform hover:scale-110"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* View Profile Button */}
        <div
          className={`absolute right-2 top-2 text-sm font-semibold ${
            data.portfolio
              ? 'text-blue-600 hover:underline'
              : 'cursor-not-allowed text-gray-400'
          }`}
        >
          <a
            href={data.portfolio}
            className={data.portfolio ? '' : 'pointer-events-none'}
            target="_blank"
            rel="noreferrer"
          >
            View Profile &#8594;
          </a>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">{data.bio}</p>

        {/* Social Icons */}
        <div className="mt-3 flex gap-x-4">
          {data.social?.GitHub && (
            <a href={data.social.GitHub} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white transition-transform transform hover:scale-125" />
            </a>
          )}

          {data.social?.Twitter && (
            <a href={data.social.Twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaXTwitter className="text-2xl text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-125" />
            </a>
          )}

          {data.social?.LinkedIn && (
            <a href={data.social.LinkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
