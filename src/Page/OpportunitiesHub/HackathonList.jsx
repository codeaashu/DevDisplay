import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faCalendarAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this hackathon!',
        text: 'Explore and participate on this amazing hackathon opportunity.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of Global hackathons

const hackathons = [
  {
    organizer: 'StackBlitz / Bolt',
    title: 'World’s Largest Hackathon',
    location: 'Online',
    date: 'May 30',
    domains: ['Beginner Friendly', 'Low/No Code', 'Machine Learning', 'AI'],
    applyLink: 'https://worldslargesthackathon.devpost.com/',
    poster: '/assets/Hackathons/bolt.png',
    shareLink: '#worlds-largest-hackathon',
  },
  {
    organizer: 'Hack4Brahmaputra',
    title: 'Hack4Brahma',
    location: 'Guwahati, India',
    date: 'Sep 9',
    domains: ['Military', 'Hack For Army', 'Offline', '24 hours Hackathon'],
    applyLink: 'https://hack4brahmaputra.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Hack4Brahmaputra.png',
    shareLink: '#hack4brahma',
  },
  {
    organizer: 'Reskill - Social',
    title: 'Social Summer of Code (SSoC) 2025',
    location: 'Offline',
    date: 'June 10',
    domains: ['Beginner-friendly', 'Open Source'],
    applyLink: 'https://reskilll.com/hack/ssoc4',
    poster: '/assets/opensourceProgram/SSOC4.png',
    shareLink: '#ssoc4',
  },
  {
    organizer: 'ETHKyiv',
    title: 'ETHKyiv 2025',
    location: 'Kyiv, Ukraine',
    date: 'Jun 13 - 15',
    domains: ['Blockchain', 'Web3', 'Ethereum'],
    applyLink: 'https://ethkyiv.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/ETHKyiv 2025.jpg',
    shareLink: '#ethkyiv-2025',
  },
  {
    organizer: 'Parul University',
    title: 'AI ML Hackathon 2.0',
    location: 'Parul University (PU), Vadodara',
    date: 'Jun 14',
    domains: ['Open Innovation', 'AI/ML', 'Full Stack', 'Cloud', 'FinTech', 'HealthTech', 'Cybersecurity', 'IOT'],
    applyLink:
      'https://unstop.com/hackathons/ai-ml-hackathon-20-parul-university-pu-vadodara-1488475?lb=fAzXUaUr&utm_medium=Share&utm_source=shortUrl',
    poster: '/assets/Hackathons/AIML.png',
    shareLink: '#aiml2',
  },
  {
    organizer: 'ApeChain Africa',
    title: 'APECHAIN Africa Hackathon UCC',
    location: 'Virtual',
    date: 'Jun 16 - 28',
    domains: ['Blockchain', 'Web3', 'AI'],
    applyLink: 'https://dorahacks.io/hackathon/apechain-africa/',
    poster: '/assets/Hackathons/APECHAIN Africa Hackathon UCC.jpg',
    shareLink: '#apechain-africa',
  },
  {
    organizer: 'Samsung',
    title: 'Samsung Galaxy AI Treasure Hunt',
    location: 'Online',
    date: 'Jun 18',
    domains: ['Samsung', 'AI'],
    applyLink:
      'https://unstop.com/quiz/samsung-galaxy-ai-treasure-hunt-samsung-1485695?lb=fAzXUaUr&utm_medium=Share&utm_source=shortUrl',
    poster: '/assets/Hackathons/Samsung Galaxy AI.jpg',
    shareLink: '#samsung-galaxy-ai',
  },
  {
    organizer: 'Google',
    title: 'AI in Action',
    location: 'Online',
    date: 'Jun 18',
    domains: ['Databases', 'Machine Learning', 'AI', 'Open Ended'],
    applyLink: 'https://ai-in-action.devpost.com/?ref_feature=challenge&ref_medium=homepage-recommended-hackathons',
    poster: '/assets/Hackathons/AI in Action.png',
    shareLink: '#ai-in-action',
  },
  {
    organizer: 'GM VIETNAM',
    title: 'Vietnam Aptos Hackathon',
    location: 'Virtual',
    date: 'Jun 19',
    domains: ['Blockchain', 'Web3', 'Aptos', 'Student', 'Web3builder'],
    applyLink: 'https://dorahacks.io/hackathon/vietnamaptoshackathon/',
    poster: '/assets/Hackathons/Vietnam Aptos Hackathon.jpg',
    shareLink: '#vietnam-aptos-hackathon',
  },
  {
    organizer: 'ZK Hack',
    title: 'ZK Hack Berlin',
    location: 'Berlin, Germany',
    date: 'Jun 20 - 22',
    domains: ['Open Innovation', 'zk-tools', 'zk-DSLs'],
    applyLink: 'https://zk-hack-berlin.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/ZK Hack Berlin.jpg',
    shareLink: '#zk-hack-berlin',
  },
  {
    organizer: 'Google',
    title: 'Agent Development Kit Hackathon',
    location: 'Online',
    date: 'Jun 24',
    domains: ['Machine Learning', 'AI', 'Low/No Code', 'Open Ended'],
    applyLink:
      'https://googlecloudmultiagents.devpost.com/?ref_feature=challenge&ref_medium=homepage-recommended-hackathons',
    poster: '/assets/Hackathons/Agent Development Kit Hackathon.jpg',
    shareLink: '#agent-development-kit-hackathon',
  },
  {
    organizer: 'Chainlink',
    title: 'Chromion: A Chainlink Hackathon',
    location: 'Online',
    date: 'May 30 - Jun 29',
    domains: ['Open Innovation', 'AI', 'Tokenization', 'RWAs'],
    applyLink: 'https://chromion-chainlink-hackathon.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Chromion.jpg',
    shareLink: '#chromion',
  },
  {
    organizer: 'JIS University, Kolkata',
    title: 'HexaFalls',
    location: 'Kolkata, India',
    date: 'Jun 28 - 29',
    domains: ['AI', 'CyberSecurity', 'Blockchain', 'Automation', '32 hours Hackathon'],
    applyLink: 'https://hexafalls.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/HexaFalls.jpg',
    shareLink: '#hexafalls',
  },
  {
    organizer: 'IGNITE ROOM',
    title: 'HackArenaa',
    location: 'New Delhi, India',
    date: 'Jun 28 - 29',
    domains: ['Gaming', 'Esports', '36 hours Hackathon'],
    applyLink: 'https://hackarenaa.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/HackArenaa.jpg',
    shareLink: '#hackarenaa',
  },
  {
    organizer: 'Chiliz',
    title: 'Hacking Paris',
    location: 'Parc des Princes, Paris, France',
    date: 'Jul 11 - 13',
    domains: ['Blockchain', 'Web3'],
    applyLink: 'https://hacking-paris.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Hacking Paris.jpg',
    shareLink: '#hacking-paris',
  },
  {
    organizer: 'DeerHack Nepal',
    title: 'DeerHack 2025',
    location: 'Kathmandu, Nepal',
    date: 'Jul 11 - 13',
    domains: [
      'Interactive Technology',
      'Data Science',
      'ML',
      'Blockchain',
      'Open Innovation',
      'Ed-Tech',
      '36 hours Hackathon',
    ],
    applyLink: 'https://deerhack-25.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/DeerHack 2025.jpg',
    shareLink: '#deerhack-2025',
  },
  {
    organizer: 'Hack The League',
    title: 'Hack The League 4 - Build Beyond',
    location: 'Virtual',
    date: 'Aug 1 - Oct 30',
    domains: ['AI', 'Web3', 'L1', 'L2', 'Move', 'Solidity', 'Grant'],
    applyLink: 'https://dorahacks.io/hackathon/htl4-build-beyond/',
    poster: '/assets/Hackathons/Hack The League 4 - Build Beyond.jpg',
    shareLink: '#hacktheleague4',
  },
  {
    organizer: 'APUBCC',
    title: 'DEVMatch Hackathon 2025',
    location: 'Online',
    date: 'Aug 2 - 10',
    domains: ['Blockchain', 'WEB3', 'Decentralized Technology'],
    applyLink: 'https://devmatch-hackathon.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/DEVMatch.jpg',
    shareLink: '#devmatch',
  },
  {
    organizer: 'Seedify',
    title: 'Seedify Venture Studio',
    location: 'Virtual',
    date: 'Aug 22',
    domains: ['Open Innovation', 'web3', 'web2', 'Blockchain', 'Venture', 'Growth', 'Funding'],
    applyLink: 'https://dorahacks.io/navi?to=/hackathon/seedifyventurestudio/',
    poster: '/assets/Hackathons/Seedify Venture Studio.jpg',
    shareLink: '#seedify',
  },
  {
    organizer: 'IIIT Kalyani',
    title: 'StatusCode 2',
    location: 'Mohanpur, India',
    date: 'Aug 23 - 24',
    domains: ['Open Innovation', 'real-world challenges', '36 hours Hackathon'],
    applyLink: 'https://statuscode-2.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/StatusCode2.jpg',
    shareLink: '#statuscode2',
  },
  {
    organizer: 'Hack4Maharashtra',
    title: 'Hack4Maharashtra',
    location: 'Nagpur, India',
    date: 'Aug 25 - 26',
    domains: ['Open Innovation', 'real-world challenges', '24 hours Hackathon'],
    applyLink: 'https://hack4maharashtra.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Hack4Maharashtra.jpg',
    shareLink: '#hack4maharashtra',
  },
  {
    organizer: 'Google',
    title: 'GEN AI Exchange Program',
    location: 'Online',
    date: 'Aug 28',
    domains: ['Open Innovation', 'real-world challenges', 'Google Cloud', 'Generative AI', 'Google AI'],
    applyLink:
      'https://vision.hack2skill.com/event/genaiexchange/?utm_source=hack2skill&utm_medium=teamdashboard&utm_term=referral-1&utm_campaign=genaiexchange&utm_content=673a30cde4555f1991506e5f',
    poster: '/assets/Hackathons/GEN AI Exchange Program.jpg',
    shareLink: '#gen-ai-exchange-program',
  },
  {
    organizer: 'UEM Kolkata',
    title: 'Hack Synthesis 2.0',
    location: 'UEM Kolkata, India',
    date: 'Aug 30 - 31',
    domains: ['Open Innovation', 'real-world challenges', '30 hours hackathon'],
    applyLink:
      'https://unstop.com/hackathons/hack-synthesis-20-university-of-engineering-and-management-kolkata-1489501?lb=fAzXUaUr&utm_medium=Share&utm_source=shortUrl',
    poster: '/assets/Hackathons/Hack Synthesis 2.0.jpg',
    shareLink: '#hacksynthesis2',
  },
  {
    organizer: 'ETHAccra',
    title: 'ETHAccra Hackathon 2025',
    location: 'Accra, Greater Accra, Ghana',
    date: 'Sep 3 - 6',
    domains: ['Blockchain', 'WEB3', 'crypto'],
    applyLink: 'https://dorahacks.io/hackathon/ethaccrahackathon2025/',
    poster: '/assets/Hackathons/ETHAccra Hackathon 2025.jpg',
    shareLink: '#ethaccra',
  },
  {
    organizer: 'DCSE JIMS - Geek Room',
    title: 'Hack Quanta',
    location: 'Greater Noida, India',
    date: 'Sep 5 - 6',
    domains: ['Open Innovation', 'real-world challenges', 'No Restrictions', '36 hours Hackathon'],
    applyLink: 'https://hack-quanta.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Hack Quanta.jpg',
    shareLink: '#hack-quanta',
  },
  {
    organizer: 'RNSIT Bengaluru',
    title: 'RNS HackOverflow 2.0',
    location: 'Bengaluru, India',
    date: 'Nov 21 - 22',
    domains: ['Open Innovation', 'real-world challenges', '24 hours Hackathon'],
    applyLink: 'https://rns-hackoverflow-2.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/RNS HackOverflow 2.0.jpg',
    shareLink: '#rnshackoverflow2',
  },
  // {
  //   organizer: 'Hack4Bihar',
  //   title: 'Hack4Bihar - Lucknow Hacking Tour',
  //   location: 'Lucknow, UP, India',
  //   date: 'March 28',
  //   domains: ['AI', 'Web3 & Blockchain', 'Cyber security', 'Game devlopment', 'Open Innovation'],
  //   applyLink: 'https://dorahacks.io/hackathon/luckhnowhackingtour/',
  //   poster: '/assets/Hackathons/Hack4Bihar.png',
  //   shareLink: '#hack4bihar-lucknow-hacking-tour',
  // },
  // {
  //   organizer: 'GDG On Campus MIET',
  //   title: 'Hack Heist',
  //   location: 'Meerut, UP, India',
  //   date: 'March 29 - 30',
  //   domains: ['AI/ML', 'Web3 & Blockchain', 'IOT', 'AR/VR', 'App Development', 'Open Innovation'],
  //   applyLink: 'https://dorahacks.io/hackathon/hackheist/',
  //   poster: '/assets/Hackathons/Hack Heist.png',
  //   shareLink: '#hack-heist',
  // },
  // {
  //   organizer: 'GDG On Campus LNMIIT',
  //   title: 'HackCrux',
  //   location: 'Jaipur, Rājasthān, India',
  //   date: 'March 29 - 30',
  //   domains: ['AI', 'Web Development', 'IOT', 'Full Stack', 'Cloud and DevOps', 'Open Innovation'],
  //   applyLink: 'https://dorahacks.io/hackathon/gdg-hackcrux/',
  //   poster: '/assets/Hackathons/HackCrux.png',
  //   shareLink: '#hackcrux',
  // },
  // {
  //   organizer: 'AceHack',
  //   title: 'AceHack 4.0',
  //   location: 'UEM Jaipur, India',
  //   date: 'March 29 - 30',
  //   domains: [
  //     'AI/ML',
  //     'Web3, Blockchain & Crypto',
  //     'IOT',
  //     'Web & Mobile Dev',
  //     'Cloud & DevOps',
  //     'AR/VR',
  //     'Open Innovation',
  //   ],
  //   applyLink: 'https://dorahacks.io/hackathon/acehack4/',
  //   poster: '/assets/Hackathons/AceHack 4.0.jpg',
  //   shareLink: '#acehack-4-0',
  // },
  // {
  //   organizer: 'Espresso',
  //   title: 'Build & Brew - Global Hackathon',
  //   location: 'Virtual',
  //   date: 'March 31',
  //   domains: ['Blockchain', 'Infrastructure', 'Rollups', 'Composability', 'Interop', 'Ethereum'],
  //   applyLink: 'https://dorahacks.io/hackathon/build-and-brew/',
  //   poster: '/assets/Hackathons/Build & Brew.jpg',
  //   shareLink: '#build-and-brew-global-hackathon',
  // },
  // {
  //   organizer: 'ETHBucharest',
  //   title: 'ETHBucharest 2025',
  //   location: 'Bucharest, Bucureşti, Romania',
  //   date: 'April 2 - 5',
  //   domains: ['Blockchain', 'web3', 'crypto', 'Arbitrum', 'Ethereum'],
  //   applyLink: 'https://dorahacks.io/hackathon/ethbucharest2025/',
  //   poster: '/assets/Hackathons/ETHBucharest 2025.jpeg',
  //   shareLink: '#ethbucharest-2025',
  // },
  // {
  //   organizer: 'Code Rangers X Geek Room',
  //   title: 'Code Nakshatra',
  //   location: 'Greater Noida, India',
  //   date: 'Apr 3 - 4',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://code-nakshatra.devfolio.co/?ref=37575e18b3',
  //   poster: '/assets/Hackathons/Code Nakshatra.jpg',
  //   shareLink: '#code-nakshatra',
  // },
  // {
  //   organizer: 'Chandigarh University',
  //   title: 'whatthehack',
  //   location: 'Chandigarh, India',
  //   date: 'Apr 4 - 5',
  //   domains: ['AI', 'Blockchain', 'IOT', 'Open Innovation', 'web tech'],
  //   applyLink: 'https://dorahacks.io/hackathon/whatthehack/',
  //   poster: '/assets/Hackathons/whatthehack.jpg',
  //   shareLink: '#whatthehack',
  // },
  // {
  //   organizer: 'ABES Institute of Technology',
  //   title: 'Hacknovate 6.0',
  //   location: 'Ghaziabad - Offline, Online',
  //   date: 'Apr 4 - 5',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hacknovate6.devfolio.co/',
  //   poster: '/assets/Hackathons/Hacknovate 6.0.jpg',
  //   shareLink: '#hacknovate-6-0',
  // },
  // {
  //   organizer: 'IIIT Jabalpur',
  //   title: 'HackByte 3.0',
  //   location: 'Jabalpur, India',
  //   date: 'Apr 4 - 6',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hackbyte3.devfolio.co/',
  //   poster: '/assets/Hackathons/HackByte 3.0.jpg',
  //   shareLink: '#hackbyte-3-0',
  // },
  // {
  //   organizer: 'GDG VIT Chennai',
  //   title: 'DevsHouse 25',
  //   location: 'Chennai, India',
  //   date: 'Apr 4 - 6',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://devshouse25.devfolio.co/',
  //   poster: '/assets/Hackathons/DevsHouse 25.jpg',
  //   shareLink: '#devshouse-25',
  // },
  // {
  //   organizer: 'Bennett University',
  //   title: 'Hackaccino',
  //   location: 'Bennett University, Greater Noida',
  //   date: 'Apr 5 - 6',
  //   domains: ['AI/ML', 'Cloud Computing', 'AR/VR', 'Web3/Blockchain', 'Open Innovation'],
  //   applyLink: 'https://www.hackquest.io/hackathons/Hackaccino',
  //   poster: '/assets/Hackathons/Hackaccino.jpg',
  //   shareLink: '#hackaccino',
  // },
  // {
  //   organizer: 'LUKSO',
  //   title: 'Hack The Grid',
  //   location: 'Online',
  //   date: 'Apr 7',
  //   domains: ['Web3', 'Blockchain'],
  //   applyLink: 'https://hack-the-grid-level.devfolio.co/',
  //   poster: '/assets/Hackathons/Hack The Grid.jpg',
  //   shareLink: '#hack-the-grid',
  // },
  // {
  //   organizer: 'BIO',
  //   title: 'Bio x AI Hackathon 2025',
  //   location: 'Online',
  //   date: 'Apr 8',
  //   domains: ['AI', 'Biotechnology'],
  //   applyLink: 'https://bio-x-ai-berlin.devfolio.co/',
  //   poster: '/assets/Hackathons/Bio x AI Hackathon.jpg',
  //   shareLink: '#bio-x-ai-hackathon',
  // },
  // {
  //   organizer: 'GDGoC - NIT Jalandhar',
  //   title: 'HackMOL 6.0',
  //   location: 'Jalandhar, India',
  //   date: 'Apr 10 - 11',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hackmol-6.devfolio.co/',
  //   poster: '/assets/Hackathons/jalandhhar.png',
  //   shareLink: '#hackmol-6-0',
  // },
  // {
  //   organizer: 'AppTeam - NIT Hamirpur',
  //   title: 'Hack On Hills 6.0',
  //   location: 'Hamirpur, India',
  //   date: 'Apr 11 - 13',
  //   domains: ['AI/ML', 'Web', 'Blockchain', 'IoT', 'Cybersecurity'],
  //   applyLink: 'https://hack-on-hills.devfolio.co/',
  //   poster: '/assets/Hackathons/Hack On Hills 6.0.jpg',
  //   shareLink: '#hack-on-hills-6-0',
  // },
  // {
  //   organizer: 'GLA University',
  //   title: 'Intrusion X 2025',
  //   location: 'GLA University, Mathura',
  //   date: 'Apr 11 - 12',
  //   domains: ['Cyber Security'],
  //   applyLink: 'https://unstop.com/hackathons/24-hour-cybersecurity-hackathon-gla-university-1437657',
  //   poster: '/assets/Hackathons/Intrusion X.jpg',
  //   shareLink: '#intrusion-x',
  // },
  // {
  //   organizer: 'OSPC x CSED',
  //   title: 'Spectrum 25',
  //   location: 'Chennai, India',
  //   date: 'Apr 11 - 12',
  //   domains: ['Blockchain', 'AgriTech', 'MedTech', 'EdTech', 'IOT', 'Open Innovation'],
  //   applyLink: 'https://spectrum25.devfolio.co/',
  //   poster: '/assets/Hackathons/Spectrum 25.jpg',
  //   shareLink: '#spectrum-25',
  // },
  // {
  //   organizer: 'NAMESPACE Community',
  //   title: 'HACKHAZARDS 25',
  //   location: 'Online',
  //   date: 'Apr 11 - 20',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hackhazards25.devfolio.co/?ref=37575e18b3',
  //   poster: '/assets/Hackathons/HACKHAZARDS 25.jpg',
  //   shareLink: '#HACKHAZARDS-25',
  // },
  // {
  //   organizer: 'KJSSE',
  //   title: 'GajShield KJSSE Hack 8',
  //   location: 'Mumbai, India',
  //   date: 'Apr 12 - 13',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hack.kjsse.com',
  //   poster: '/assets/Hackathons/GajShield KJSSE Hack 8.jpg',
  //   shareLink: '#gajshield-kjsse-hack-8',
  // },
  // {
  //   organizer: 'BIT Sindri',
  //   title: 'HACKATRON 2K25',
  //   location: 'Sindri, Dhanbad, Jharkhand',
  //   date: 'Apr 13 - 14',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hackatron-k.devfolio.co/',
  //   poster: '/assets/Hackathons/HACKATRON 2K25.jpg',
  //   shareLink: '#hackatron-2k25',
  // },
  // {
  //   organizer: 'Computer Society of India',
  //   title: 'HackStasy 2025',
  //   location: 'Microsoft Taj Office, Noida',
  //   date: 'Apr 16 - 19',
  //   domains: ['AI/ML', 'Blockchain', 'Web3', 'Cloud Computing', 'Cybersecurity', 'IoT', 'Open Innovation'],
  //   applyLink: 'https://reskilll.com/hack/hackstasy',
  //   poster: '/assets/Hackathons/HackStasy 2025.jpg',
  //   shareLink: '#hackstasy-2025',
  // },
  // {
  //   organizer: 'ACE',
  //   title: 'HackVSIT6.0',
  //   location: 'New Delhi, India',
  //   date: 'Apr 25 - 26',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hackvsit-6.devfolio.co/?ref=37575e18b3',
  //   poster: '/assets/Hackathons/HackVSIT6.0.jpg',
  //   shareLink: '#hackvsit6-0',
  // },
  // {
  //   organizer: 'Anveshan BPIT',
  //   title: 'HackBlitz 2k25',
  //   location: 'New Delhi, India',
  //   date: 'Apr 26 - 27',
  //   domains: ['AI/ML', 'Web', 'Mobile', 'Web3', 'Health', 'FinTech'],
  //   applyLink: 'https://hackblitz2k25.devfolio.co/',
  //   poster: '/assets/Hackathons/HackBlitz 2k25.jpg',
  //   shareLink: '#hackblitz-2k25',
  // },
  // {
  //   organizer: 'Blockchain Pioneer Club',
  //   title: 'Cardano Blockchain Hackathon 2025',
  //   location: 'Hanoi, Hà Nội, Vietnam',
  //   date: 'May 6',
  //   domains: ['web3', 'Blockchain', 'aiken', 'plutus', 'vietnam', 'Cardano'],
  //   applyLink: 'https://dorahacks.io/hackathon/cardano-blockchain-hackathon2025/',
  //   poster: '/assets/Hackathons/Cardano Blockchain Hackathon 2025.png',
  //   shareLink: '#cardano-blockchain-hackathon-2025',
  // },
  // {
  //   organizer: 'codecraX',
  //   title: 'BrahmaX 1.0 - National Level Hackathon',
  //   location: 'BGIEM, Jabalpur, MP',
  //   date: 'May 9 - 10',
  //   domains: ['web3', 'Blockchain', 'Edtech', 'Greentech', 'Healthcare', 'Cybersecurity'],
  //   applyLink: 'https://unstop.com/o/Ch1wQ9l?utm_medium=Share&utm_source=shortUrl',
  //   poster: '/assets/Hackathons/BrahmaX.png',
  //   shareLink: '#brahmax-codecraX',
  // },
  // {
  //   organizer: 'Sui Foundation',
  //   title: 'Sui Overflow 2025',
  //   location: 'Online',
  //   date: 'May 11',
  //   domains: ['Web3', 'Blockchain'],
  //   applyLink: 'https://overflowportal.sui.io/',
  //   poster: '/assets/Hackathons/Sui Overflow 2025.jpg',
  //   shareLink: '#sui-overflow-2025',
  // },
  // {
  //   organizer: 'NITTE MIT',
  //   title: 'NMIT HACKS 2025',
  //   location: 'Bengaluru, India',
  //   date: 'May 16 - 18',
  //   domains: ['AI/ML', 'Blockchain', 'IOT', 'Game Development', 'Open Innovation'],
  //   applyLink: 'https://nmithacks25.devfolio.co/',
  //   poster: '/assets/Hackathons/NMIT HACKS 2025.jpg',
  //   shareLink: '#nmit-hacks-2025',
  // },
  //   {
  //   organizer: 'LISK',
  //   title: 'Lisk Builders Challenge',
  //   location: 'Online',
  //   date: 'May 31',
  //   domains: ['Blockchain', 'Web3'],
  //   applyLink: 'https://lisk-builders-challenge-1.devfolio.co/',
  //   poster: '/assets/Hackathons/Lisk Builders Challenge.jpg',
  //   shareLink: '#lisk-builders-challenge',
  // },
  // {
  //   organizer: 'Hack With Gujarat',
  //   title: 'Hack With Gujarat',
  //   location: 'Online',
  //   date: 'May 26 - 29',
  //   domains: ['Open Innovation', 'No Restrictions'],
  //   applyLink: 'https://hack-with-gujarat.devfolio.co/?ref=37575e18b3',
  //   poster: '/assets/Hackathons/Hack With Gujarat.jpg',
  //   shareLink: '#hack-with-gujarat',
  // },
  // ... Add others similarly
];

const StyledHackathonCard = styled.div`
  position: relative;
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 350px; /* Increased width */
  margin: 0.5rem; /* Decreased gap */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }

  .status-user {
    width: 8px;
    height: 8px;
    margin-right: 4px;
    border-radius: 50%;
    outline: solid 2px var(--bg-color, #fff);
    background-color: var(--online-status, #00a6fb);
    transition: var(--btn-transition, 0.5s);
    animation: active-status 2s ease-in-out infinite;
  }

  @keyframes active-status {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
`;

const HackathonCardComponent = React.forwardRef(
  ({ organizer, title, location, date, domains, applyLink, poster, shareLink }, ref) => (
    <StyledHackathonCard id={shareLink.substring(1)} ref={ref}>
      {/* <div className="dot"></div> */}
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-semibold text-white">
          <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#00a6fb]" /> {organizer}
        </span>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-1000 hover:bg-gray-1000 text-semibold relative flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-gray-300"
        >
          <div className="status-user" style={{ marginRight: '8px' }} />
          Apply Now
        </a>
      </div>

      <div className="h-50 relative w-full overflow-hidden rounded-xl p-2 shadow-md">
        <div className="absolute bottom-3 right-3 z-10">
          <button
            onClick={() => shareContent(window.location.href.split('#')[0] + shareLink)}
            className="bg-gray-1000 hover:bg-slate-1000 flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md transition-colors"
          >
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
        </div>
        <img
          src={poster}
          alt={`${title} Poster`}
          className="h-full w-full rounded-lg object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png';
          }}
        />
      </div>

      <h2 className="mt-1 p-1 text-center text-lg font-bold text-white">{title}</h2>

      <div className="flex justify-between p-2 text-sm text-[#00a6fb]">
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-white" /> {location}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-white" /> {date}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-2 p-2">
        {domains.map((domain, idx) => (
          <span key={idx} className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300">
            {domain}
          </span>
        ))}
      </div>
    </StyledHackathonCard>
  ),
);

<style>
  {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

          @font-face {
            font-family: "MerriweatherSans-SemiBold";
            src: url('/fonts/MerriweatherSans-SemiBold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
                    `}
</style>;

const HackathonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* Decreased gap */
  padding: 1rem;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column; /* Default: stacked for mobile */
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  input,
  select {
    padding: 0.75rem 1rem;
    border: 1px solid #00a6fb;
    border-radius: 9999px;
    background: rgba(15, 27, 53, 0.9);
    color: #ffffff;
    font-size: 1rem;
    min-width: 220px;
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: #a0aec0;
    }

    &:hover {
      background: rgba(25, 37, 67, 0.95);
      border-color: #14c8ff;
      transform: scale(1.02);
    }

    &:focus {
      outline: none;
      border-color: #14c8ff;
      box-shadow: 0 0 0 2px rgba(20, 200, 255, 0.4);
    }
  }

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout for tablets and larger */
  }
`;

const HackathonList = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [highlightId, setHighlightId] = useState(null);
  const cardRefs = useRef({});

  // Filter logic
  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesLocation = locationFilter
      ? hackathon.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    const matchesMonth = monthFilter
      ? new Date(hackathon.date.split(' - ')[0]).getMonth() + 1 === parseInt(monthFilter)
      : true;
    const matchesDomain = domainFilter
      ? hackathon.domains.some((domain) => domain.toLowerCase().includes(domainFilter.toLowerCase()))
      : true;
    return matchesLocation && matchesMonth && matchesDomain;
  });

  // Always include the card with the hash if present
  let displayHackathons = filteredHackathons;
  let hashId = null;
  if (typeof window !== 'undefined' && window.location.hash) {
    hashId = window.location.hash.substring(1);
    const exists = filteredHackathons.some((h) => h.shareLink.substring(1) === hashId);
    if (!exists) {
      const card = hackathons.find((h) => h.shareLink.substring(1) === hashId);
      if (card) displayHackathons = [card, ...filteredHackathons];
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setHighlightId(window.location.hash.substring(1));
    }
  }, [locationFilter, monthFilter, domainFilter]);

  useEffect(() => {
    if (highlightId && cardRefs.current[highlightId]) {
      const el = cardRefs.current[highlightId];
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.boxShadow = '0 0 0 4px #00a6fb, 0 0 20px #00a6fb';
      el.style.transition = 'box-shadow 0.5s';
      setTimeout(() => {
        el.style.boxShadow = '';
      }, 2000);
    }
  }, [highlightId, displayHackathons.length]);

  return (
    <>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <select value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)}>
          <option value="">Select month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <input
          type="text"
          placeholder="Search by domain"
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
        />
      </FilterContainer>
      <HackathonListContainer>
        {displayHackathons.map((hackathon) => (
          <HackathonCardComponent
            key={hackathon.shareLink}
            ref={(el) => (cardRefs.current[hackathon.shareLink.substring(1)] = el)}
            {...hackathon}
          />
        ))}
      </HackathonListContainer>
    </>
  );
};

export default HackathonList;
