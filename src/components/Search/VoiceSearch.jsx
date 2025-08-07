import { useEffect } from 'react';

export default function VoiceSearch({ setVoiceText, isListening, setIsListening }) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true; // Continue listening after a result
  recognition.interimResults = true; // Show interim results before finalizing
  recognition.lang = 'en-US'; // Language code (adjust if needed)

  // Start/stop listening
  const handleListen = () => {
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  };

  // Listen for changes in isListening state to toggle recognition
  useEffect(() => {
    handleListen();
  }, [isListening]);

  // Handle recognized results
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join('');
    setVoiceText(transcript);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  return (
    <>
      {isListening ? (
        <div className="fixed left-1/2 top-1/2 z-40 flex w-72 min-w-64 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-around rounded-lg border-2 border-[#F3F4F6] bg-[#FFFFFF] p-8 dark:border-[#141D2F] dark:bg-[#1E2A47]">
          <p className="mt-2 text-xl font-semibold text-black dark:text-white">Listening...</p>
          <iframe src="https://lottie.host/embed/8471708b-a8cd-4b44-84e3-e5631dec0227/zbiCH7Sctr.json"></iframe>
          <button
            className="m-2 flex flex-row items-center rounded-md border-2 border-[#00A6FB] bg-[#00A6FB] p-2 px-10 text-black transition-colors duration-1000 ease-in-out hover:bg-white hover:text-[#00A6FB] dark:text-white dark:hover:bg-[#141D2F]"
            onClick={() => setIsListening(false)}
          >
            Stop
          </button>
        </div>
      ) : null}
    </>
  );
}
