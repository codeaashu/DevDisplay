import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaUserCircle,
  FaCheckCircle,
  FaStackOverflow,
  FaYoutube,
  FaDev,
  FaBehance,
  FaDribbble,
  FaFigma,
  FaCoffee,
  FaProductHunt,
  FaMedium,
  FaDiscord,
  FaReddit,
  FaShareAlt,
} from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces, SiHashnode, SiReplit, SiHackerrank } from 'react-icons/si';

const UnstopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
    <circle cx="112.5" cy="112.5" r="112.5" fill="#15457B" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="140"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      dy=".35em"
    >
      un
    </text>
  </svg>
);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function Profile({ data }) {
  return <Card data={data} />;
}

function Card({ data }) {
  const cardRef = React.useRef();
  const [showFallback, setShowFallback] = React.useState(false);

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
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
          {!showFallback ? (
            <img
              src={data.avatar}
              onError={() => setShowFallback(true)}
              className="h-full w-full rounded-full"
              alt="User Avatar"
            />
          ) : (
            <FaUserCircle className="text-6xl text-gray-500" />
          )}
        </div>

        <div className="w-[55%] sm:w-[75%]">
          <h3>
            <a
              className="flex items-center text-lg font-bold hover:text-textSecondary dark:text-white"
              href={data.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              {data.name}
              {data.verified && (
                <FaCheckCircle className="ml-2 rounded-full border-[1px] border-[#0ea5e9] p-0.5 text-xl text-[#0ea5e9]" />
              )}
            </a>
          </h3>
          <p className="flex items-center gap-x-1 text-sm dark:text-white">
            <FaLocationDot />
            {data.location}
          </p>
          <div className="group flex overflow-hidden">
            <div
              className="skills-container group-hover:paused mr-2 mt-4 flex h-auto animate-loop-scroll gap-4 whitespace-nowrap"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => (
                  <div
                    className="inline h-auto cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
            </div>
            <div
              className="skills-container group-hover:paused mr-2 mt-4 flex h-auto animate-loop-scroll gap-4 whitespace-nowrap"
              aria-hidden="true"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => (
                  <div
                    className="inline h-auto cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
            </div>
            <div
              className="skills-container group-hover:paused mt-4 flex h-auto animate-loop-scroll gap-4 whitespace-nowrap"
              aria-hidden="true"
              ref={cardRef}
            >
              {data.skills &&
                data.skills.map((skill, index) => (
                  <div
                    className="inline h-auto cursor-default whitespace-nowrap rounded-md bg-secondaryColor px-2 py-1 text-[9px] text-white sm:text-sm md:h-[30px]"
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end md:absolute md:right-0 md:top-0">
          <FaShareAlt
            className="mr-4 cursor-pointer text-xl text-blue-600 duration-300 hover:scale-125"
            onClick={(e) => {
              const profileFileName = data.fileName.replace('.json', '');
              const shareUrl = `https://www.devdisplay.org/profile/${profileFileName}`;
              console.log('Share URL:', shareUrl); // Log the share URL

              if (navigator.share) {
                navigator
                  .share({
                    title: 'Check out this profile!',
                    text: 'Check out my DevDisplay profile!',
                    url: shareUrl,
                  })
                  .then(() => console.log('Successful share'))
                  .catch((error) => console.log('Error sharing', error));
              } else {
                navigator.clipboard.writeText(shareUrl);
                alert(`URL copied to clipboard: ${shareUrl}`);
              }
            }}
          />
          <a
            href={data.portfolio}
            className={`flex w-28 items-center gap-2 ${
              data.portfolio ? 'text-blue-600 hover:underline' : 'cursor-not-allowed text-blue-600 brightness-50'
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <FaHandshake className="text-lg" />
          </a>
        </div>
      </div>
      <div className="mt-4">
        <div className="dark:text-white">{data.bio}</div>
        <div className="mt-1 flex gap-x-4">
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

          {data.social?.Instagram && (
            <a href={data.social.Instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Discord && (
            <a href={data.social.Discord} target="_blank" rel="noreferrer">
              <FaDiscord className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.LeetCode && (
            <a href={data.social.LeetCode} target="_blank" rel="noreferrer">
              <SiLeetcode className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Codeforces && (
            <a href={data.social.Codeforces} target="_blank" rel="noreferrer">
              <SiCodeforces className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.StackOverflow && (
            <a href={data.social.StackOverflow} target="_blank" rel="noreferrer">
              <FaStackOverflow className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.YouTube && (
            <a href={data.social.YouTube} target="_blank" rel="noreferrer">
              <FaYoutube className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.DevTo && (
            <a href={data.social.DevTo} target="_blank" rel="noreferrer">
              <FaDev className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Hashnode && (
            <a href={data.social.Hashnode} target="_blank" rel="noreferrer">
              <SiHashnode className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Behance && (
            <a href={data.social.Behance} target="_blank" rel="noreferrer">
              <FaBehance className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Dribbble && (
            <a href={data.social.Dribbble} target="_blank" rel="noreferrer">
              <FaDribbble className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Figma && (
            <a href={data.social.Figma} target="_blank" rel="noreferrer">
              <FaFigma className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Replit && (
            <a href={data.social.Replit} target="_blank" rel="noreferrer">
              <SiReplit className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.BuyMeACoffee && (
            <a href={data.social.BuyMeACoffee} target="_blank" rel="noreferrer">
              <FaCoffee className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.ProductHunt && (
            <a href={data.social.ProductHunt} target="_blank" rel="noreferrer">
              <FaProductHunt className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Medium && (
            <a href={data.social.Medium} target="_blank" rel="noreferrer">
              <FaMedium className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Reddit && (
            <a href={data.social.Reddit} target="_blank" rel="noreferrer">
              <FaReddit className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Unstop && (
            <a href={data.social.Unstop} target="_blank" rel="noreferrer">
              <UnstopIcon className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.HackerRank && (
            <a href={data.social.HackerRank} target="_blank" rel="noreferrer">
              <SiHackerrank className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}

          {data.social?.Email && isValidEmail(data.social.Email) && (
            <a href={`mailto:${data.social.Email}`} target="_blank" rel="noreferrer">
              <FaEnvelope className="text-2xl text-blue-600 duration-300 hover:scale-125" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
