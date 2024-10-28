import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6';

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const cardRef = React.useRef();

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
    cardRef.current.addEventListener('wheel', handleWheel, { passive: false });
  }, []);

  return (
    <div className="mb-6 h-auto rounded-lg bg-white p-4 shadow dark:bg-textPrimary">
      <div className="relative flex gap-4">
        <div className="h-24 w-24 flex-shrink-0">
          <img src={data.avatar} className="h-full w-full rounded-full" alt="User logo" />
        </div>
        <div className="w-[55%] sm:w-[75%]">
          <h3>
            <a
              className="text-lg font-bold hover:text-textSecondary dark:text-white"
              href={data.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              {data.name}
            </a>
          </h3>
          <p className="flex items-center gap-x-1 text-sm dark:text-white">
            <FaLocationDot />
            {data.location}
          </p>
          <div className=" group flex overflow-hidden">
            <div
              className=" skills-container group-hover:paused mr-2 mt-4 flex h-auto  animate-loop-scroll gap-4 whitespace-nowrap "
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className=" inline h-auto  cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-2  text-blue-50 sm:text-xs md:h-[30px]"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div
              className=" skills-container group-hover:paused mr-2 mt-4 flex h-auto  animate-loop-scroll gap-4 whitespace-nowrap"
              aria-hidden="true"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className=" inline h-auto  cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2  py-2  text-blue-50 sm:text-xs md:h-[30px]"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div
              className=" skills-container group-hover:paused mt-4 flex h-auto animate-loop-scroll  gap-4 whitespace-nowrap"
              aria-hidden="true"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => {
                  return (
                    <div
                      className=" inline h-auto  cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2  py-2  text-blue-50  sm:text-xs md:h-[30px]"
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div
          className={` md:absolute md:right-2 md:top-2 ${
            data.portfolio ? 'ml-auto w-28 hover:underline' : 'ml-auto w-28 cursor-not-allowed brightness-50'
          }`}
        >
          <a href={data.portfolio} className="text-textSecondary" target="_blank" rel="noreferrer">
            View Profile &#8594;
          </a>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm text-blue-950 dark:text-blue-100">{data.bio}</div>
        <div className="mt-3 flex justify-center  gap-x-4">
          {data.social?.GitHub && (
            <a href={data.social.GitHub} target="_blank" rel="noreferrer">
              <FaGithub className="text-xl text-blue-500 duration-300 hover:scale-125 hover:text-blue-600" />
            </a>
          )}

          {data.social?.Twitter && (
            <a href={data.social.Twitter} target="_blank" rel="noreferrer">
              <FaXTwitter className="text-xl text-blue-500 duration-300 hover:scale-125 hover:text-blue-600" />
            </a>
          )}

          {data.social?.LinkedIn && (
            <a href={data.social.LinkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin className="text-xl text-blue-500 duration-300 hover:scale-125 hover:text-blue-600" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
