import React, { useState } from 'react';
import styled from 'styled-components';
import { FiCopy, FiExternalLink, FiMail, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaGlobe, FaYoutube, FaTelegram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

// Animated background with dots
const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    box-shadow:
      100px 200px #fff,
      300px 100px #fff,
      500px 300px #fff,
      700px 150px #fff,
      900px 250px #fff,
      150px 400px #fff,
      350px 500px #fff,
      550px 400px #fff,
      750px 500px #fff,
      950px 400px #fff,
      200px 600px #fff,
      400px 700px #fff,
      600px 600px #fff,
      800px 700px #fff,
      1000px 600px #fff,
      250px 800px #fff,
      450px 900px #fff,
      650px 800px #fff,
      850px 900px #fff,
      1050px 800px #fff,
      50px 50px #fff,
      1200px 300px #fff,
      1400px 500px #fff,
      1600px 200px #fff,
      1800px 400px #fff,
      75px 750px #fff,
      275px 150px #fff,
      475px 350px #fff,
      675px 550px #fff,
      875px 250px #fff,
      125px 350px #fff,
      325px 650px #fff,
      525px 750px #fff,
      725px 450px #fff,
      925px 650px #fff,
      175px 950px #fff,
      375px 50px #fff,
      575px 150px #fff,
      775px 850px #fff,
      975px 50px #fff;
    animation: sparkle 8s linear infinite;
  }

  @keyframes sparkle {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }
`;

// Moving dot animation
const MovingDot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #00d4ff, #00ff88);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  animation: moveDot 20s linear infinite;
  z-index: 1;

  @keyframes moveDot {
    0% {
      top: 10%;
      left: 10%;
    }
    25% {
      top: 10%;
      left: 90%;
    }
    50% {
      top: 90%;
      left: 90%;
    }
    75% {
      top: 90%;
      left: 10%;
    }
    100% {
      top: 10%;
      left: 10%;
    }
  }

  &:nth-child(2) {
    animation-delay: -5s;
    background: linear-gradient(45deg, #ff00d4, #ff4400);
    box-shadow: 0 0 10px rgba(255, 0, 212, 0.5);
  }

  &:nth-child(3) {
    animation-delay: -10s;
    background: linear-gradient(45deg, #d400ff, #0044ff);
    box-shadow: 0 0 10px rgba(212, 0, 255, 0.5);
  }
`;

// Main container
const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
`;

// Logo section
const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #00d4ff, #00ff88, #ff00d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Links grid
const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Individual link card
const LinkCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

// Icon container
const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor || 'rgba(255, 255, 255, 0.1)'};
  flex-shrink: 0;

  svg,
  img {
    width: 24px;
    height: 24px;
    color: ${(props) => props.iconColor || '#fff'};
  }
`;

// Link info
const LinkInfo = styled.div`
  flex: 1;
  min-width: 0;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: white;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
`;

// Action buttons
const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverColor || 'rgba(0, 212, 255, 0.2)'};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Toast notification
const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: rgba(0, 212, 255, 0.9);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? 0 : '100px')});
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
  }
`;

const Connect = () => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy');
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const links = [
    {
      id: 'platform',
      name: 'DevDisplay Platform',
      description: 'Main platform for developers',
      url: 'https://devdisplay.org',
      icon: <FaGlobe />,
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      iconColor: '#fff',
    },
    {
      id: 'community',
      name: 'DevDisplay Community',
      description: 'Join our developer community',
      url: 'https://www.devdisplay.tech/',
      icon: <FaGlobe />,
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      iconColor: '#fff',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Follow us on LinkedIn',
      url: 'https://www.linkedin.com/company/devdisplay/',
      icon: <FaLinkedin />,
      bgColor: '#0077b5',
      iconColor: '#fff',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      description: 'Follow us on Twitter',
      url: 'https://twitter.com/devdisplay_',
      icon: <SiX />,
      bgColor: '#000000',
      iconColor: '#fff',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Follow us on Instagram',
      url: 'https://instagram.com/devdisplay',
      icon: <FaInstagram />,
      bgColor: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      iconColor: '#fff',
    },
    {
      id: 'discord',
      name: 'Discord',
      description: 'Join our Discord server',
      url: 'https://discord.com/invite/chyt2UgTv5',
      icon: <FaDiscord />,
      bgColor: '#5865f2',
      iconColor: '#fff',
    },
    {
      id: 'github-repo',
      name: 'GitHub Repository',
      description: 'Main DevDisplay repository',
      url: 'https://github.com/codeaashu/DevDisplay',
      icon: <FaGithub />,
      bgColor: '#333333',
      iconColor: '#fff',
    },
    {
      id: 'github-org',
      name: 'GitHub Organization',
      description: 'DevDisplay GitHub organization',
      url: 'https://github.com/DevDisplay',
      icon: <FaGithub />,
      bgColor: '#333333',
      iconColor: '#fff',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      description: 'Subscribe to our channel',
      url: 'https://youtube.com/@devdisplay',
      icon: <FaYoutube />,
      bgColor: '#ff0000',
      iconColor: '#fff',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Join our Telegram community',
      url: 'https://t.me/devdisplay',
      icon: <FaTelegram />,
      bgColor: '#0088cc',
      iconColor: '#fff',
    },
    {
      id: 'email',
      name: 'Contact Team',
      description: 'team@devdisplay.org',
      url: 'mailto:team@devdisplay.org',
      icon: <FiMail />,
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      iconColor: '#fff',
      isEmail: true,
      emailAddress: 'team@devdisplay.org',
    },
    {
      id: 'founder',
      name: 'Connect with Founder',
      description: 'Get in touch with our founder',
      url: 'https://www.devdisplay.org/profile/codeaashu',
      icon: <FiUser />,
      bgColor: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
      iconColor: '#333',
    },
  ];

  return (
    <>
      <AnimatedBackground>
        <MovingDot />
        <MovingDot />
        <MovingDot />
      </AnimatedBackground>

      <Container>
        <LogoSection>
          <img src="/DDColorLOGO.png" alt="DevDisplay Logo" />
          <h1>Connect with DevDisplay</h1>
          <p>The First Global Platform and community for Developers to Fulfill All Their Tech Needs.</p>
        </LogoSection>

        <LinksGrid>
          {links.map((link) => (
            <LinkCard key={link.id}>
              <IconContainer bgColor={link.bgColor} iconColor={link.iconColor}>
                {link.icon}
              </IconContainer>

              <LinkInfo>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </LinkInfo>

              <ActionButtons>
                <ActionButton
                  onClick={() => copyToClipboard(link.isEmail ? link.emailAddress : link.url, link.name)}
                  hoverColor="rgba(0, 212, 255, 0.2)"
                  title="Copy link"
                >
                  <FiCopy />
                </ActionButton>

                <ActionButton onClick={() => openLink(link.url)} hoverColor="rgba(0, 255, 136, 0.2)" title="Visit link">
                  <FiExternalLink />
                </ActionButton>
              </ActionButtons>
            </LinkCard>
          ))}
        </LinksGrid>

        <Toast show={toast.show}>{toast.message}</Toast>
      </Container>
    </>
  );
};

export default Connect;
