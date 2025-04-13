import React, { useState } from 'react';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference('your_huggingface_api_key'); // Replace with your API key

const analyzeResume = async (file) => {
  try {
    const response = await hf.textClassification({
      model: 'resume-analysis-model', // Replace with an actual model
      inputs: file,
    });
    return response;
  } catch (error) {
    console.error('Error analyzing resume:', error);
    return null;
  }
};

const templates = [
  { id: 1, name: 'Modern Template', preview: '/templates/modern.png' },
  { id: 2, name: 'Classic Template', preview: '/templates/classic.png' },
  { id: 3, name: 'Creative Template', preview: '/templates/creative.png' },
];

const ResumeBuilderPage = () => {
  const [uploadedResume, setUploadedResume] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedResume(file);

    // Placeholder for ATS analysis logic
    const analysisResults = await analyzeResume(file);
    if (analysisResults) {
      setAtsScore(analysisResults.score || 85); // Example score
      setSuggestions(
        analysisResults.suggestions || [
          'Add more keywords related to JavaScript',
          'Improve formatting for ATS readability',
        ],
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <header className="mb-6 w-full rounded-md bg-blue-600 py-4 text-center">
        <h1 className="text-4xl font-bold">ATS-Optimized Resume Builder</h1>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Build Your Resume</h2>
        <p className="mt-2">Choose from professionally designed templates optimized for ATS.</p>
        <button className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">Start Building</button>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Choose a Template</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {templates.map((template) => (
            <div key={template.id} className="rounded border border-gray-700 bg-gray-800 p-4 text-center">
              <img src={template.preview} alt={template.name} className="mx-auto mb-2 h-32 w-32 object-cover" />
              <h3 className="text-lg font-bold">{template.name}</h3>
              <button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Select</button>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold">Analyze Your Resume</h2>
        <p className="mt-2">Upload your existing resume to check its ATS score and get suggestions for improvement.</p>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="mt-4 block w-full cursor-pointer rounded border border-gray-700 bg-gray-800 p-2 text-white"
        />
        {uploadedResume && (
          <div className="mt-4">
            <h3 className="text-xl font-bold">Analysis Results</h3>
            <p>ATS Score: {atsScore}%</p>
            <ul className="mt-2 list-disc pl-6">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <footer className="mt-8 text-center">
        <p>Powered by DevDisplay</p>
      </footer>
    </div>
  );
};

export default ResumeBuilderPage;
