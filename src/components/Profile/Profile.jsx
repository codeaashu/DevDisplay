import React from 'react';
import QRCode from 'react-qr-code';
import { FaQrcode } from 'react-icons/fa';
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
import { FaHandshake, FaCopy, FaTimes } from 'react-icons/fa';
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6';
import { SiLeetcode, SiCodeforces, SiHashnode, SiReplit, SiHackerrank } from 'react-icons/si';
import './ProfileShareTooltip.css';

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
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [showQRModal, setShowQRModal] = React.useState(false);
  const shareBtnRef = React.useRef();

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

  React.useEffect(() => {
    if (!showTooltip) return;
    function handleClickOutside(e) {
      if (shareBtnRef.current && !shareBtnRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  let profileFileName = '';
  if (data.fileName) {
    profileFileName = data.fileName.replace('.json', '');
  } else if (data.name) {
    profileFileName = data.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[^a-z0-9]/g, '');
  }
  const shareUrl = `https://www.devdisplay.org/profile/${profileFileName}`;

  const handleShareX = () => {
    const caption = encodeURIComponent(`🚀 Check out my DevDisplay profile! #DevDisplay\n${shareUrl}`);
    window.open(`https://x.com/intent/tweet?text=${caption}`, '_blank');
    setShowTooltip(false);
  };
  const handleShareLinkedIn = () => {
    const caption = encodeURIComponent(`Check out my DevDisplay profile! #DevDisplay\n${shareUrl}`);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&summary=${caption}`, '_blank');
    setShowTooltip(false);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowTooltip(false);
  };
  const handleDownloadQR = () => {
    const svg = document.getElementById('profile-qr-code');
    if (!svg) return;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const qrImg = new window.Image();
    qrImg.onload = function () {
      const size = 864;
      const qrSize = 640;
      const padding = (size - qrSize) / 2;
      const borderRadius = 60;
      const borderWidth = 8;
      const borderColor = '#0ea5e9';
      const textFontSize = 72;
      const textPaddingTop = 40;
      const text = 'Connect with me!';
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(borderRadius, 0);
      ctx.lineTo(size - borderRadius, 0);
      ctx.quadraticCurveTo(size, 0, size, borderRadius);
      ctx.lineTo(size, size - borderRadius);
      ctx.quadraticCurveTo(size, size, size - borderRadius, size);
      ctx.lineTo(borderRadius, size);
      ctx.quadraticCurveTo(0, size, 0, size - borderRadius);
      ctx.lineTo(0, borderRadius);
      ctx.quadraticCurveTo(0, 0, borderRadius, 0);
      ctx.closePath();
      ctx.fillStyle = '#ffffffff';
      ctx.fill();
      ctx.lineWidth = borderWidth;
      ctx.strokeStyle = borderColor;
      ctx.stroke();
      ctx.restore();
      ctx.font = `bold ${textFontSize}px Arial`;
      ctx.fillStyle = '#0ea5e9';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(text, size / 2, textPaddingTop);
      const gapBelowText = 48;
      ctx.drawImage(qrImg, padding, textPaddingTop + textFontSize + gapBelowText, qrSize, qrSize);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngFile;
      downloadLink.download = `${profileFileName}-profile-qr.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    qrImg.src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgStr)));
  };

  return (
    <div className="mb-6 h-auto rounded-lg border border-blue-900 bg-[#0e1a34] p-4 shadow">
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
          <div className="relative" ref={shareBtnRef}>
            <FaShareAlt
              className="mr-4 cursor-pointer text-xl text-blue-600 duration-300 hover:scale-125"
              onClick={() => setShowTooltip(true)}
            />
            {showTooltip && (
              <div className="profile-share-tooltip">
                <button className="profile-share-close" onClick={() => setShowTooltip(false)}>
                  <FaTimes />
                </button>
                <div className="profile-share-row" onClick={handleCopy}>
                  <FaCopy className="text-xl" />
                  <span>Copy Link</span>
                </div>
                <div
                  className="profile-share-row"
                  onClick={() => {
                    setShowQRModal(true);
                    setShowTooltip(false);
                  }}
                >
                  <FaQrcode className="text-xl" />
                  <span>Share QR</span>
                </div>
                <div className="profile-share-row" onClick={handleShareLinkedIn}>
                  <FaLinkedin className="text-xl" />
                  <span>Share on LinkedIn</span>
                </div>
                <div className="profile-share-row" onClick={handleShareX}>
                  <FaXTwitter className="text-xl" />
                  <span>Share on X</span>
                </div>
              </div>
            )}
          </div>
          <a
            href={data.portfolio}
            className={`flex w-28 items-center gap-2 ${
              data.portfolio ? 'text-blue-600 hover:underline' : 'cursor-not-allowed text-blue-600 brightness-50'
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <FaHandshake className="text-lg duration-300 hover:scale-125" />
          </a>
        </div>
      </div>
      {/* QR Modal */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex w-[340px] flex-col items-center rounded-lg bg-white p-6 shadow-lg">
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowQRModal(false)}
            >
              <FaTimes />
            </button>
            <div className="mb-2 text-lg font-bold text-[#15457B]">Connect with me!</div>
            <div
              style={{
                padding: 24,
                background: '#fff',
                borderRadius: 20,
                border: '3px solid #0ea5e9',
                boxShadow: '0 2px 12px rgba(14,165,233,0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <QRCode id="profile-qr-code" value={shareUrl} size={192} style={{ borderRadius: 16 }} />
              <img
                src={require('./WordMark.png')}
                alt="DevDisplay Logo"
                style={{ width: 120, marginTop: 12 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://cdn.jsdelivr.net/gh/codeaashu/DevDisplay@main/public/DDColorLOGO.png';
                }}
              />
            </div>
            <p className="mt-2 break-all text-center text-xs text-gray-600">{shareUrl}</p>
            <button
              className="mt-4 rounded bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
              onClick={handleDownloadQR}
            >
              Download QR
            </button>
          </div>
        </div>
      )}
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
