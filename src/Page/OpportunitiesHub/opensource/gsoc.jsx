import React from 'react';
import styled from 'styled-components';
import GsocLoader from '../../../components/GsocLoader';

const proposals = [
  {
    name: 'Adesh Gupta',
    organization: 'Org - Graphite',
    proposal: 'https://docs.google.com/document/d/1VY8ccwwpNhQdqefwBJN4QS1NLHeWzrEgbiYAA9WBwqE/edit?usp=sharing',
  },
  {
    name: 'Krishna Pandey',
    organization: 'Org - LLVM Compiler Infrastructure',
    proposal: 'https://docs.google.com/document/d/1ASLkruWPY0uojwcOJc571Qk8jsGORW4NzOGPwXL9FgQ/edit?usp=sharing',
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
    name: 'Dhaval Kapil',
    organization: 'Org - LabLua',
    proposal: 'https://docs.google.com/document/d/1HlkBkoBnJJ8Mgrkl8YZAzJyh9Xl1QLxB7mP4_YPB-60/edit?usp=sharing',
  },
  {
    name: 'Deepali Jain',
    organization: 'Org - Wikimedia',
    proposal: 'https://www.mediawiki.org/wiki/Book_management',
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
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-wide text-cyan-300">{organization}</p>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={proposal}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-400/50 px-3 py-1 text-cyan-100 transition hover:bg-cyan-500/10"
        >
          Proposal
        </a>
      </div>
    </div>
  );
};

export default function GsocPage() {
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
              <p className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text pb-2 text-3xl font-semibold tracking-wide text-transparent sm:text-8xl">
                Everything
              </p>
              <p className="animate-text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text pb-2 text-3xl font-semibold tracking-wide text-transparent sm:text-5xl">
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
          <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:gap-6">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl">
              <div className="px-6 py-5 text-center">
                <a
                  href="https://www.gsocorganizations.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 px-4 py-2 text-base font-semibold text-cyan-100 transition hover:bg-cyan-500/30"
                >
                  List of GSoC Organizations
                </a>
                <a
                  href="https://summerofcode.withgoogle.com/programs/2026"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 px-4 py-2 text-base font-semibold text-cyan-100 transition hover:bg-cyan-500/30"
                >
                  GSoC 2026 Timeline
                </a>
                <a
                  href="https://github.com/codeaashu/GSOC-The-Beginners-Guide"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 px-4 py-2 text-base font-semibold text-cyan-100 transition hover:bg-cyan-500/30"
                >
                  The Beginners Guide to GSoC
                </a>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-xl font-bold sm:text-2xl">Participant Proposals</h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Explore the mentors, orgs, and proposals alumni have worked on. Tap any card to view their project and
                proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>
      </main>
    </div>
  );
}
