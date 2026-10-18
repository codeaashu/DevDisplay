import { useEffect, useRef, useState } from 'react';

export default function VoiceSearch({ setVoiceText, isListening, setIsListening }) {
  const recognitionRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const [isFirefox, setIsFirefox] = useState(false);

  // Check browser and initialize recognition
  useEffect(() => {
    const isFirefoxBrowser = /Firefox/.test(navigator.userAgent);
    setIsFirefox(isFirefoxBrowser);

    if (isFirefoxBrowser) {
      setShowNotification(true);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setVoiceText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [setVoiceText, setIsListening]);

  // Handle start/stop listening
  useEffect(() => {
    if (!recognitionRef.current || isFirefox) return;

    try {
      if (isListening) {
        recognitionRef.current.start();
      } else {
        recognitionRef.current.stop();
      }
    } catch (err) {
      console.error('Failed to control recognition:', err);
    }
  }, [isListening, isFirefox]);

  return (
    <>
      {showNotification && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg border border-yellow-400 bg-yellow-50 p-4 dark:border-yellow-600 dark:bg-yellow-900">
          <span className="text-sm text-yellow-800 dark:text-yellow-200">
            Speech recognition is not available on Firefox. Please use Chrome, Edge, or Safari.
          </span>
          <button
            onClick={() => setShowNotification(false)}
            className="text-yellow-800 hover:text-yellow-900 dark:text-yellow-200"
          >
            ✕
          </button>
        </div>
      )}

      {isListening && !isFirefox ? (
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
