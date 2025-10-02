import React from 'react';
import Navbar from './commonComponents/Navbar';
import { Footer } from '../components/Footer/Footer';

const aiTools = [
  {
    title: 'OpenAI GPT-4',
    description:
      'OpenAI’s GPT-4 is an advanced AI language model that can generate human-like text and perform a variety of language-based tasks.',
    features: [
      'Natural language understanding and generation',
      'Text summarization',
      'Code generation and debugging',
      'Multilingual capabilities',
    ],
    url: 'https://openai.com/gpt-4',
  },
  {
    title: 'Google AI Platform',
    description:
      'Google AI Platform provides a suite of machine learning tools and APIs to help developers build and deploy AI applications.',
    features: [
      'Pre-trained models for image recognition, NLP, and more',
      'Custom model training and deployment',
      'Scalable cloud infrastructure',
    ],
    url: 'https://cloud.google.com/products/ai',
  },
  {
    title: 'IBM Watson',
    description:
      'IBM Watson is an AI platform offering a variety of services for natural language processing, data analysis, and machine learning.',
    features: ['Natural language understanding', 'Watson Assistant for building AI chatbots', 'AI-driven analytics'],
    url: 'https://www.ibm.com/watson',
  },
  {
    title: 'Hugging Face Transformers',
    description:
      'Hugging Face offers an extensive library of pre-trained transformer models for natural language processing tasks.',
    features: [
      'State-of-the-art NLP models',
      'Text generation, sentiment analysis, translation',
      'Easy-to-use Python API',
    ],
    url: 'https://huggingface.co/transformers/',
  },
  {
    title: 'RunwayML',
    description:
      'RunwayML is a creative toolkit that empowers artists and creators to use AI tools for art, video, and design.',
    features: [
      'AI models for video and image generation',
      'Real-time video editing',
      'Collaboration features for teams',
    ],
    url: 'https://runwayml.com/',
  },
  {
    title: 'DeepSeek AI',
    description:
      'DeepSeek AI is a cutting-edge platform offering AI-driven tools for data analysis, business insights, and predictive analytics.',
    features: [
      'AI-powered data analysis and reporting',
      'Predictive analytics for smarter decision-making',
      'Customizable dashboards and visualization tools',
    ],
    url: 'https://www.deepseek.com',
  },
  // Added more AI tools here
  {
    title: 'ElevenLabs Voice AI',
    description:
      'ElevenLabs provides advanced voice synthesis and analysis tools for creating realistic and expressive speech.',
    features: ['High-quality voice generation', 'Voice cloning and customization', 'Emotion detection in speech'],
    url: 'https://elevenlabs.io',
  },
  {
    title: 'Memelord Meme Resource',
    description: 'Memelord offers a collection of AI-generated memes and meme templates for creative expression.',
    features: ['AI-generated meme suggestions', 'Customizable meme templates', 'Trending meme collections'],
    url: 'https://memelord.com',
  },
  {
    title: 'Clonify UI Library',
    description: 'Clonify provides a library of pre-built UI components and templates for rapid web development.',
    features: ['Responsive UI components', 'Customizable templates', 'Easy integration with frameworks'],
    url: 'https://clonify.com',
  },
  {
    title: 'Inbound Email Platform',
    description: 'Inbound offers an AI-powered email platform for personalized marketing and customer engagement.',
    features: [
      'Automated email campaigns',
      'Personalized content recommendations',
      'Analytics and performance tracking',
    ],
    url: 'https://inbound.com',
  },
  {
    title: 'Uncode Framer Components',
    description: 'Uncode provides a set of components for Framer, enabling designers to create interactive prototypes.',
    features: ['Pre-built Framer components', 'Interactive animations', 'Customizable design elements'],
    url: 'https://uncode.com',
  },
  {
    title: 'V30 Social Media Tool',
    description: 'V30 offers AI tools for social media management, including content scheduling and analytics.',
    features: ['Automated content scheduling', 'Social media analytics', 'Audience engagement tools'],
    url: 'https://v30.com',
  },
  {
    title: 'VoiceTypr Voice Dictation',
    description: 'VoiceTypr provides AI-powered voice dictation tools for transcribing speech to text.',
    features: ['Real-time voice transcription', 'Multi-language support', 'Customizable voice models'],
    url: 'https://voicetypr.com',
  },
];

const AITools = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">AI Tools</h1>
        <div className="grid grid-cols-1 gap-8">
          {aiTools.map((tool, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-8 shadow-lg transition hover:shadow-xl">
              <h2 className="mb-4 text-2xl font-semibold text-[#00a6fb]">{tool.title}</h2>
              <p className="mb-4 text-sm text-gray-300">{tool.description}</p>
              <h3 className="mb-4 text-sm text-gray-300">Key Features:</h3>
              <ul className="mb-6 text-sm text-gray-400">
                {tool.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00a6fb] hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AITools;
