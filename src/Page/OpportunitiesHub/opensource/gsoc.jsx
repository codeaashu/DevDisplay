import React, { useEffect } from 'react';
import styled from 'styled-components';
import GsocLoader from '../../../components/GsocLoader';

const proposals = [
  {
    name: 'Adesh Gupta',
    organization: 'Org - Graphite',
    proposal: 'https://docs.google.com/document/d/1VY8ccwwpNhQdqefwBJN4QS1NLHeWzrEgbiYAA9WBwqE/edit?usp=sharing',
  },
  {
    name: 'Ayush Chandekar',
    organization: 'Org - Git',
    proposal: 'https://docs.google.com/document/d/1tJrtWxo1UGKChB3hu5eZ-ljm0FtU_fsv0TnIRwu3EKY/edit?usp=sharing',
  },
  {
    name: 'Praneeth Sarode',
    organization: 'Org - libssh',
    proposal: 'https://docs.google.com/document/d/1kxUkL2ggqatuvYgY5Zu-eBM9UkNo_LmvhvVBh2AARpQ/edit?usp=sharing',
  },
  {
    name: 'Varun R Mallya',
    organization: 'Org - GNOME Foundation',
    proposal:
      'https://gitlab.gnome.org/varunrmallya/gsoc-proposal-sysprof-2025/-/blob/main/gsoc_proposal.pdf?ref_type=heads',
  },
  {
    name: 'Lakshya Shishir Khandelwal',
    organization: 'Org - MIT App Inventor',
    proposal: 'https://docs.google.com/document/d/18NvnSxxb33Iorf6LWb0VhchTkSfHMk4T3ptfDWWBQRU/edit?usp=sharing',
  },
  {
    name: 'Sukhman Singh',
    organization: 'Org - Freifunk.net',
    proposal: 'https://drive.google.com/file/d/1si1qvRqnABWDqPUuQZtKqwTFhUyc4V8L/view?usp=sharing',
  },
  {
    name: 'Divyansh Jain',
    organization: 'Org - GNOME Foundation',
    proposal: 'https://docs.google.com/document/d/1g3KVR9xdDpRDfpSMn5qGEOgN5H1gFJWfiE_uRO92tEo/edit?usp=sharing',
  },
  {
    name: 'Samad Yar Khan',
    organization: 'Org - Rocket.Chat',
    proposal: 'https://drive.google.com/file/d/1xpysiKgsI_pJckDiwW56mD67JSe85OkM/view?usp=drive_link',
  },
  {
    name: 'Atharva Purohit',
    organization: 'Org - INCF',
    proposal: 'https://drive.google.com/file/d/1PDqNwk0liZFEIfqYqAXfWbS7B1lu5N5R/view?usp=drive_link',
  },
  {
    name: 'Ashish',
    organization: 'Org - MetaCall',
    proposal: 'https://docs.google.com/document/d/1A4mXeMjOwjf9mdiE0yejHE5CYKSKUK1G6_K88jG9hWM/edit?usp=sharing',
  },
  {
    name: 'Khushal Agrawal',
    organization: 'Org - Inkscape',
    proposal: 'https://gitlab.com/SK1PPR/inkscape-gsoc-proposal',
  },
  {
    name: 'Darshan Kumar',
    organization: 'Org - CNCF',
    proposal: 'https://drive.google.com/file/d/1izjx6fTHqYqqH8Wkk72fgE5AK_RWWCdn/view?usp=sharing',
  },
  {
    name: 'Gurmannat Sohal',
    organization: 'Org - GNOME Foundation',
    proposal: 'https://docs.google.com/document/d/1QbkabJ6Unu5QbE09rWegll9IMef84JJw6vmsHp6VVvA/edit?usp=sharing',
  },
  {
    name: 'Patel Jainil',
    organization: 'Org - Pitivi',
    proposal: 'https://docs.google.com/document/d/1eqrKALH3KfKu7KKF8gZ_O-5ZjEK7rs3BR0-oZRih0lc/edit?usp=sharing',
  },
  {
    name: 'Vansh Uppal',
    organization: 'Org - Inkscape',
    proposal: 'https://drive.google.com/file/d/1O44n1i0azEJ55KZ-pTXbytr6xcm9piL2/view?usp=sharing',
  },
  {
    name: 'Pragyansh Chaturvedi',
    organization: 'Org - ScummVM',
    proposal: 'https://drive.google.com/open?id=1GH5AM0yCgvZCBW-kjF27Slv1sXdE4BR5',
  },
  {
    name: 'Manas Chaudhary',
    organization: 'Org - xrdesktop',
    proposal: 'https://drive.google.com/open?id=1KhFJYoW7UJS50Va0cL1-PKLULeoFbowV',
  },
  {
    name: 'Gaurav Genani',
    organization: 'Org - Cilium',
    proposal: 'https://drive.google.com/open?id=15V4cistpAC4JwDW5t397WGEBDITK5GYG',
  },
  {
    name: 'Aviral Jain',
    organization: 'Org - CloudCV',
    proposal: 'https://drive.google.com/open?id=1iTvpGfoXu4b3s-GPibzuVKCQt7MfzoI4',
  },
  {
    name: 'Shreyaa Sharma',
    organization: 'Org - Ceph',
    proposal: 'https://drive.google.com/open?id=10m9AP8f-bl4aLEJhhoSsl0c75oJU4bYr',
  },
  {
    name: 'Ashutosh Bharambe',
    organization: 'Org - NumFOCUS',
    proposal: 'https://drive.google.com/open?id=18peTN951HhffS4JgbRvXlpLhoQSGGw9y',
  },
  {
    name: 'Mohit Sharma',
    organization: 'Org - OWASP',
    proposal: 'https://docs.google.com/document/d/1j66dmafHjKCPazvBindixuh1z6unW--s91nskcVXMzE/edit?usp=sharing',
  },
  {
    name: 'Nupur Agrawal',
    organization: 'Org - The Libreswan Project',
    proposal: 'https://docs.google.com/document/d/1gHD60s-ZGw2NcQRaAFtl3KeC8yWPqibTR0ZClTd3nj0/edit?usp=sharing',
  },
  {
    name: 'Ayan Choudhary',
    organization: 'Org - Creative Commons',
    proposal: 'https://docs.google.com/document/d/1KzBeYTRkilffMjY51u5KeZk2YvaM9IYTjk_kB1_9AXg/edit?usp=sharing',
  },
  {
    name: 'Supratik Das',
    organization: 'Org - Continuous Delivery Foundation',
    proposal: 'https://docs.google.com/document/d/1kGy-V0HGi9p9qzUfWtVoe3o50KnwXYtFVuKpoBJcZPU/edit?usp=sharing',
  },
  {
    name: 'Shreyaa Sharma',
    organization: 'Org - Public Lab (Outreachy)',
    proposal: 'https://docs.google.com/document/d/1rcm1SrZuSZvk2G206wLVrw5DLlYjjImiVepvWvMcays/edit?usp=sharing',
  },
  {
    name: 'Ashutosh Bharambe',
    organization: 'Org - Julia (Julia SoC)',
    proposal: 'https://drive.google.com/file/d/1Rc9-TvWh9eSyotWwiklgAqbyoPI0osRG/view?usp=sharing',
  },
  {
    name: 'Kanav Gupta',
    organization: 'Org - The Julia Language',
    proposal: 'https://drive.google.com/open?id=1K25gOIfC9GUq33n0OH6-AZKq7HEAlcwv',
  },
  {
    name: 'Ketan Gupta',
    organization: 'Org - Tiled',
    proposal: 'https://goo.gl/v23EHz',
  },
  {
    name: 'Harkirat Singh',
    organization: 'Org - Mozilla',
    proposal: 'https://goo.gl/c6U1Q1',
  },
  {
    name: 'Ravinder Nehra',
    organization: 'Org - Honeynet Project',
    proposal: 'https://rnehra01.github.io/assets/pdf/HoneynetGSoCproposal.pdf',
  },
  {
    name: 'Karan Desai',
    organization: 'Org - TARDIS',
    proposal: 'http://opensupernova.org/~wkerzend/gsoc2016/lib/exe/fetch.php?media=karandesai_gsoc_2016.pdf',
  },
  {
    name: 'Asutosh Palai',
    organization: 'Org - Ruby',
    proposal: 'https://docs.google.com/document/d/1QAeM8i7cyM_4wUSdf8oQeSH9919ffAt6HLAjS6SrcSs/edit?usp=sharing',
  },
  {
    name: 'Harkirat Singh',
    organization: 'Org - Gambit',
    proposal: 'https://goo.gl/S6wmLv',
  },
  {
    name: 'Amanpreet Singh',
    organization: 'Org - jQuery Mobile',
    proposal: 'https://docs.google.com/document/d/16xIbGHdqmJExXlksMso--rOecZ34j0-iVskw9gUK3P8/edit?usp=sharing',
  },
  {
    name: 'Unknown',
    organization: 'Org - Chromium',
    proposal:
      'https://docs.google.com/document/d/1IOj4hSdPl8h1-8zYK_Gt3OxA0R44SLbmr-ZH3f9yDXM/edit?tab=t.0#heading=h.f9xi00yo67jk',
  },
];

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="matrix-container">
        <div className="matrix-grid" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  .matrix-container {
    width: 100%;
    height: 100%;
    perspective: 1500px;
    position: relative;
    background-color: #0d0d1a;
    overflow: hidden;
  }

  .matrix-grid {
    width: 100%;
    height: 100%;
    background:
      linear-gradient(#262645 1px, transparent 1px), linear-gradient(90deg, #262645 1px, transparent 1px),
      repeating-linear-gradient(45deg, rgba(0, 255, 170, 0.05) 0px 1px, transparent 1px 12px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 170, 0.05) 0px 1px, transparent 1px 12px),
      radial-gradient(circle at center, #0a0a1a 0%, #000 100%);
    background-size:
      28px 28px,
      28px 28px,
      50px 50px,
      50px 50px,
      cover;
    border: 1px solid rgba(0, 255, 170, 0.1);
    box-shadow:
      inset 0 0 40px rgba(0, 255, 170, 0.1),
      0 0 60px rgba(0, 255, 170, 0.15);
    transform-style: preserve-3d;
    transition: all 0.6s ease-in-out;
    position: relative;
  }

  .matrix-grid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 170, 0.4), transparent);
    animation: borderFlow 6s linear infinite;
    pointer-events: none;
    mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  .matrix-grid::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(0, 255, 170, 0.15) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: pulse 3.5s ease-in-out infinite alternate;
    z-index: 1;
  }

  @keyframes borderFlow {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.85);
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.5;
    }
  }
`;

const ProposalCard = ({ name, organization, proposal }) => {
  return (
    <CardStyledWrapper>
      <a href={proposal} target="_blank" rel="noreferrer" className="card-link">
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50px"
                  height="50px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <strong>Proposal</strong>
              </div>
            </div>
            <div className="front">
              <div className="img">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content">
                <small className="badge">Proposal Details</small>
                <div className="middle">{organization}</div>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>{name}</strong>
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#20c997"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </CardStyledWrapper>
  );
};

const StyledLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 50px;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(34, 211, 238, 0.3);
  color: #cffafe;
  font-weight: 600;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.1);
  font-size: 0.9rem;

  @media (min-width: 640px) {
    padding: 12px 24px;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(34, 211, 238, 0.8);
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.4);
    background: rgba(15, 23, 42, 0.8);
    color: #fff;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover .shine {
    left: 100%;
    transition: 0.5s;
  }
`;

const CardStyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 100%;
    height: 320px;
    perspective: 1000px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #66e3ffff, #66e3ffff, #66e3ffff, #66e3ffff, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .front-content .middle {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    color: #e2e8f0;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #66e0ffff;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #66b0ffff;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ffa322ff;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export default function GsocPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 z-0">
        <Pattern />
      </div>
      <main className="relative z-10 min-h-screen text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-10 top-10 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
            <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-2 top-2 h-40 w-40 rounded-full bg-cyan-500 blur-2xl sm:right-4 sm:top-4 sm:h-48 sm:w-48 sm:blur-3xl md:right-10 md:top-10 md:h-96 md:w-96" />
            <div className="absolute bottom-2 left-2 h-40 w-40 rounded-full bg-blue-500 blur-2xl sm:bottom-4 sm:left-4 sm:h-48 sm:w-48 sm:blur-3xl md:bottom-10 md:left-10 md:h-96 md:w-96" />
          </div>
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 md:grid-cols-2 md:gap-32">
            <div className="space-y-4 text-center md:text-left">
              <p className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text pb-2 text-4xl font-semibold tracking-wide text-transparent sm:text-6xl md:text-8xl">
                Everything
              </p>
              <p className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text pb-2 text-2xl font-semibold tracking-wide text-transparent sm:text-4xl md:text-5xl">
                You Need to Decode:
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                  <img
                    src="/assets/opensourceProgram/GSOC.png"
                    alt="Google Summer of Code 2026"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <GsocLoader />
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 sm:py-10 md:py-12">
          <div className="mx-auto flex max-w-[95%] flex-col gap-4 sm:gap-6">
            <div className="flex flex-wrap justify-center gap-8 py-6">
              <StyledLink href="https://github.com/codeaashu/GSOC-The-Beginners-Guide" target="_blank" rel="noreferrer">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </span>
                <span>The Beginners Guide to GSoC</span>
                <div className="shine"></div>
              </StyledLink>

              <StyledLink href="https://summerofcode.withgoogle.com/programs/2026" target="_blank" rel="noreferrer">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </span>
                <span>GSoC 2026 Timeline</span>
                <div className="shine"></div>
              </StyledLink>

              <StyledLink href="https://www.gsocorganizations.dev/" target="_blank" rel="noreferrer">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </span>
                <span>List of GSoC Organizations</span>
                <div className="shine"></div>
              </StyledLink>
            </div>

            <div className="space-y-4 text-center sm:space-y-6">
              <h2 className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                Selected Participant Proposals
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
                Explore the selected proposals of GSoC alumni. Tap any card to view their project and proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {proposals.map((entry) => (
                <ProposalCard
                  key={`${entry.name}-${entry.organization}`}
                  name={entry.name}
                  organization={entry.organization}
                  project={entry.project}
                  proposal={entry.proposal}
                />
              ))}
            </div>
            <br />

            <div className="space-y-8 text-center sm:space-y-8">
              <h2 className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                Make Your First Open Source Contribution!
              </h2>
              <p className="mx-auto max-w-3xl text-base text-lg font-bold text-slate-300">
                Create your Developer profile through open source contribution on DevDisplay.
              </p>
              <div className="flex flex-col items-center justify-center gap-8 rounded-xl border border-slate-600 bg-transparent p-6 md:p-10">
                <img
                  src="https://www.devdisplay.org/DDColorLOGO.png"
                  alt="DevDisplay Logo"
                  className="h-12 w-auto md:h-20"
                />
                <StyledLink href="https://www.devdisplay.org/" target="_blank" rel="noreferrer">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                  </span>
                  <span className="uppercase tracking-wider">Add Your Profile</span>
                  <div className="shine"></div>
                </StyledLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
