import React from 'react';

const proposals = [
  {
    name: 'Namay Rohatgi',
    organization: 'The Honeynet Project',
    project: 'https://github.com/honeynet/project-namay',
    proposal: 'https://docs.google.com/document/d/namay-honeynet',
  },
  {
    name: 'Adesh Gupta',
    organization: 'Graphite',
    project: 'https://github.com/graphite-project/adesh',
    proposal: 'https://docs.google.com/document/d/adesh-graphite',
  },
  {
    name: 'Krishna Pandey',
    organization: 'LLVM Compiler Infrastructure',
    project: 'https://github.com/llvm/krishna-pandey',
    proposal: 'https://docs.google.com/document/d/krishna-llvm',
  },
  {
    name: 'Ayush Chandekar',
    organization: 'Git',
    project: 'https://github.com/git/ayush-chandekar',
    proposal: 'https://docs.google.com/document/d/ayush-git',
  },
  {
    name: 'Praneeth Sarode',
    organization: 'libssh',
    project: 'https://github.com/libssh/praneeth',
    proposal: 'https://docs.google.com/document/d/praneeth-libssh',
  },
  {
    name: 'Varun R Mallya',
    organization: 'GNOME Foundation',
    project: 'https://github.com/GNOME/varun-mallya',
    proposal: 'https://docs.google.com/document/d/varun-gnome',
  },
  {
    name: 'Lakshya Shishir Khandelwal',
    organization: 'MIT App Inventor',
    project: 'https://github.com/mit-cml/lakshya',
    proposal: 'https://docs.google.com/document/d/lakshya-mit-appinventor',
  },
  {
    name: 'Sukhman Singh',
    organization: 'Freifunk.net',
    project: 'https://github.com/freifunk/sukhman',
    proposal: 'https://docs.google.com/document/d/sukhman-freifunk',
  },
  {
    name: 'Divyansh Jain',
    organization: 'GNOME Foundation',
    project: 'https://github.com/GNOME/divyansh',
    proposal: 'https://docs.google.com/document/d/divyansh-gnome',
  },
  {
    name: 'Ashish',
    organization: 'MetaCall',
    project: 'https://github.com/metacall/ashish',
    proposal: 'https://docs.google.com/document/d/ashish-metacall',
  },
  {
    name: 'Khushal Agrawal',
    organization: 'Inkscape',
    project: 'https://github.com/inkscape/khushal',
    proposal: 'https://docs.google.com/document/d/khushal-inkscape',
  },
  {
    name: 'Darshan Kumar',
    organization: 'CNCF',
    project: 'https://github.com/cncf/darshan',
    proposal: 'https://docs.google.com/document/d/darshan-cncf',
  },
  {
    name: 'Gurmannat Sohal',
    organization: 'GNOME Foundation',
    project: 'https://github.com/GNOME/gurmannat',
    proposal: 'https://docs.google.com/document/d/gurmannat-gnome',
  },
  {
    name: 'Patel Jainil',
    organization: 'Pitivi',
    project: 'https://github.com/pitivi/jainil',
    proposal: 'https://docs.google.com/document/d/jainil-pitivi',
  },
  {
    name: 'Vansh Uppal',
    organization: 'Inkscape',
    project: 'https://github.com/inkscape/vansh',
    proposal: 'https://docs.google.com/document/d/vansh-inkscape',
  },
  {
    name: 'Bashar Ahmed',
    organization: 'Inkscape',
    project: 'https://github.com/inkscape/bashar',
    proposal: 'https://docs.google.com/document/d/bashar-inkscape',
  },
  {
    name: 'Ishan Rawat',
    organization: 'Monado',
    project: 'https://github.com/Monado/ishan',
    proposal: 'https://docs.google.com/document/d/ishan-monado',
  },
  {
    name: 'Pragyansh Chaturvedi',
    organization: 'ScummVM',
    project: 'https://github.com/scummvm/pragyansh',
    proposal: 'https://docs.google.com/document/d/pragyansh-scummvm',
  },
  {
    name: 'Priyansh Rathi',
    organization: 'Godot Engine',
    project: 'https://github.com/godotengine/priyansh',
    proposal: 'https://docs.google.com/document/d/priyansh-godot',
  },
  {
    name: 'Rohith Varma Buddaraju',
    organization: 'TARDIS RT Collaboration',
    project: 'https://github.com/tardis-sn/rohith',
    proposal: 'https://docs.google.com/document/d/rohith-tardis',
  },
  {
    name: 'Sri Sai Natha Rao Pathange',
    organization: 'Neutralinojs',
    project: 'https://github.com/neutralinojs/srisainatha',
    proposal: 'https://docs.google.com/document/d/srinatha-neutralinojs',
  },
  {
    name: 'Manas Chaudhary',
    organization: 'xrdesktop',
    project: 'https://github.com/xrdesktop/manas',
    proposal: 'https://docs.google.com/document/d/manas-xrdesktop',
  },
  {
    name: 'Gaurav Genani',
    organization: 'Cilium',
    project: 'https://github.com/cilium/gaurav',
    proposal: 'https://docs.google.com/document/d/gaurav-cilium',
  },
  {
    name: 'Aviral Jain',
    organization: 'CloudCV',
    project: 'https://github.com/Cloud-CV/aviral',
    proposal: 'https://docs.google.com/document/d/aviral-cloudcv',
  },
  {
    name: 'Shreyaa Sharma',
    organization: 'Ceph',
    project: 'https://github.com/ceph/shreyaa',
    proposal: 'https://docs.google.com/document/d/shreyaa-ceph',
  },
  {
    name: 'Ashutosh Bharambe',
    organization: 'NumFOCUS',
    project: 'https://github.com/numfocus/ashutosh',
    proposal: 'https://docs.google.com/document/d/ashutosh-numfocus',
  },
  {
    name: 'Mohit Sharma',
    organization: 'OWASP',
    project: 'https://github.com/OWASP/mohit',
    proposal: 'https://docs.google.com/document/d/mohit-owasp',
  },
  {
    name: 'Nupur Agrawal',
    organization: 'The Libreswan Project',
    project: 'https://github.com/libreswan/nupur',
    proposal: 'https://docs.google.com/document/d/nupur-libreswan',
  },
  {
    name: 'Ayan Choudhary',
    organization: 'Creative Commons',
    project: 'https://github.com/creativecommons/ayan',
    proposal: 'https://docs.google.com/document/d/ayan-cc',
  },
  {
    name: 'Supratik Das',
    organization: 'Continuous Delivery Foundation',
    project: 'https://github.com/cdfoundation/supratik',
    proposal: 'https://docs.google.com/document/d/supratik-cdf',
  },
  {
    name: 'Shreyaa Sharma',
    organization: 'Public Lab (Outreachy)',
    project: 'https://github.com/publiclab/shreyaa',
    proposal: 'https://docs.google.com/document/d/shreyaa-publiclab',
  },
  {
    name: 'Ashutosh Bharambe',
    organization: 'Julia (Julia SoC)',
    project: 'https://github.com/JuliaLang/ashutosh',
    proposal: 'https://docs.google.com/document/d/ashutosh-julia',
  },
  {
    name: 'Vaibhav',
    organization: 'Zulip',
    project: 'https://github.com/zulip/vaibhav',
    proposal: 'https://docs.google.com/document/d/vaibhav-zulip',
  },
  {
    name: 'Kanav Gupta',
    organization: 'The Julia Language',
    project: 'https://github.com/JuliaLang/kanav',
    proposal: 'https://docs.google.com/document/d/kanav-julia',
  },
  {
    name: 'Agrim Mittal',
    organization: 'Bundler',
    project: 'https://github.com/bundler/agrim',
    proposal: 'https://docs.google.com/document/d/agrim-bundler',
  },
  {
    name: 'Deepesh Pathak',
    organization: 'CloudCV',
    project: 'https://github.com/Cloud-CV/deepesh',
    proposal: 'https://docs.google.com/document/d/deepesh-cloudcv',
  },
  {
    name: 'Gautham Goli',
    organization: 'Homebrew',
    project: 'https://github.com/Homebrew/gautham',
    proposal: 'https://docs.google.com/document/d/gautham-homebrew',
  },
  {
    name: 'Chirag Maheshwari',
    organization: 'Amahi',
    project: 'https://github.com/amahi/chirag',
    proposal: 'https://docs.google.com/document/d/chirag-amahi',
  },
  {
    name: 'Utkarsh Gupta',
    organization: 'CloudCV',
    project: 'https://github.com/Cloud-CV/utkarsh',
    proposal: 'https://docs.google.com/document/d/utkarsh-cloudcv',
  },
  {
    name: 'Ketan Gupta',
    organization: 'Tiled',
    project: 'https://github.com/mapeditor/ketan',
    proposal: 'https://docs.google.com/document/d/ketan-tiled',
  },
  {
    name: 'Harkirat Singh',
    organization: 'Mozilla',
    project: 'https://github.com/mozilla/harkirat',
    proposal: 'https://docs.google.com/document/d/harkirat-mozilla',
  },
  {
    name: 'Ravinder Nehra',
    organization: 'Honeynet Project',
    project: 'https://github.com/honeynet/ravinder',
    proposal: 'https://docs.google.com/document/d/ravinder-honeynet',
  },
  {
    name: 'Karan Desai',
    organization: 'TARDIS',
    project: 'https://github.com/tardis-sn/karan',
    proposal: 'https://docs.google.com/document/d/karan-tardis',
  },
  {
    name: 'Ashish Chaudhary',
    organization: 'CloudCV',
    project: 'https://github.com/Cloud-CV/ashish',
    proposal: 'https://docs.google.com/document/d/ashish-cloudcv',
  },
  {
    name: 'Asutosh Palai',
    organization: 'Ruby',
    project: 'https://github.com/ruby/asutosh',
    proposal: 'https://docs.google.com/document/d/asutosh-ruby',
  },
  {
    name: 'Harkirat Singh',
    organization: 'Gambit',
    project: 'https://github.com/gambit-scheme/harkirat',
    proposal: 'https://docs.google.com/document/d/harkirat-gambit',
  },
  {
    name: 'Amanpreet Singh',
    organization: 'jQuery Mobile',
    project: 'https://github.com/jquery/jquery-mobile-amanpreet',
    proposal: 'https://docs.google.com/document/d/amanpreet-jquery-mobile',
  },
  {
    name: 'Dhaval Kapil',
    organization: 'LabLua',
    project: 'https://github.com/lablua/dhaval',
    proposal: 'https://docs.google.com/document/d/dhaval-lablua',
  },
  {
    name: 'Aarti Dwivedi',
    organization: 'Portland State University',
    project: 'https://github.com/psu/aarti',
  },
  {
    name: 'Abhishek Das',
    organization: 'Open Web Application Security Project',
    project: 'https://github.com/OWASP/abhishek',
  },
  {
    name: 'Amanpreet Singh',
    organization: 'Wikimedia',
    project: 'https://github.com/wikimedia/amanpreet',
    proposal: 'https://docs.google.com/document/d/amanpreet-wikimedia',
  },
  {
    name: 'Deepali Jain',
    organization: 'Wikimedia',
    project: 'https://github.com/wikimedia/deepali',
    proposal: 'https://docs.google.com/document/d/deepali-wikimedia',
  },
  {
    name: 'Jayant Jain',
    organization: 'CodeComat',
    project: 'https://github.com/CodeComat/jayant',
    proposal: 'https://docs.google.com/document/d/jayant-codecomat',
  },
  {
    name: 'Jay Bosamiya',
    organization: 'Nmap Security Scanner',
    project: 'https://github.com/nmap/jay',
    proposal: 'https://docs.google.com/document/d/jay-nmap',
  },
  {
    name: 'Aarti Dwivedi',
    organization: 'Wikimedia',
    project: 'https://github.com/wikimedia/aarti',
  },
  {
    name: 'Abhishek Das',
    organization: 'Dept. of Biomedical Informatics, Emory University',
    project: 'https://github.com/emory/abhishek',
    proposal: 'https://docs.google.com/document/d/abhishek-emory',
  },
  {
    name: 'Richa Jain',
    organization: 'Wikimedia',
    project: 'https://github.com/wikimedia/richa',
  },
  {
    name: 'Ashwini Khare',
    organization: 'Statistics Online Computational Resource',
    project: 'https://github.com/SOCR/ashwini',
  },
];

const ProposalCard = ({ name, organization, project, proposal }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="space-y-1">
        <p className="text-sm uppercase tracking-wide text-cyan-300">{organization}</p>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={project}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-400/50 px-3 py-1 text-cyan-100 transition hover:bg-cyan-500/10"
        >
          Project
        </a>
        {proposal && (
          <a
            href={proposal}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-100 transition hover:bg-cyan-500/30"
          >
            Proposal
          </a>
        )}
      </div>
    </div>
  );
};

export default function GsocPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/opensourceProgram/GSoC.png"
            alt="Google Summer of Code"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Google Summer of Code 2026</h1>
          <p className="mt-4 text-lg text-slate-200">Goldmines for GSoC enthusiasts</p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
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
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Participant Proposals</h2>
            <p className="text-slate-300">
              Explore the mentors, orgs, and proposals alumni have worked on. Tap any card to view their project and
              proposal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
  );
}
