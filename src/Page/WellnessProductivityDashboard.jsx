import React, { useState, useRef } from 'react';

const wellnessTips = [
  'Take regular breaks using the 50/10 rule.',
  'Stay hydrated and stretch every hour.',
  'Use a focus timer to boost productivity.',
  'Reflect on your daily achievements.',
  'Practice mindful breathing for 2 minutes.',
];

function WellnessProductivityDashboard() {
  const [screenshot, setScreenshot] = useState(null);
  const [timer, setTimer] = useState(25 * 60); // 25 min focus timer
  const [isRunning, setIsRunning] = useState(false);
  const [tip, setTip] = useState(wellnessTips[0]);
  const intervalRef = useRef();

  React.useEffect(() => {
    if (isRunning && timer > 0) {
      intervalRef.current = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (!isRunning) {
      clearInterval(intervalRef.current);
    }
    if (timer === 0) setIsRunning(false);
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timer]);

  const handleScreenshotUpload = (e) => {
    if (e.target.files && e.target.files[0]) setScreenshot(e.target.files[0]);
  };
  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setTimer(25 * 60);
    setIsRunning(false);
  };
  const handleNextTip = () => setTip(wellnessTips[Math.floor(Math.random() * wellnessTips.length)]);

  const min = String(Math.floor(timer / 60)).padStart(2, '0');
  const sec = String(timer % 60).padStart(2, '0');

  return (
    <section className="container mx-auto mt-12 p-8 text-center">
      <div className="mt-8 rounded-lg bg-green-900 p-6">
        <h2 className="mb-4 text-2xl font-bold text-green-300">Wellness & Productivity Dashboard</h2>
        <p className="mb-4">
          Maintain a healthy work-life balance while coding with wellness tips, focus timers, and productivity
          analytics.
        </p>
        <div className="mb-4">
          <label className="mb-2 block font-semibold">Upload Wellness Screenshot</label>
          <input type="file" accept="image/*" className="mb-2" onChange={handleScreenshotUpload} />
          {screenshot && (
            <div className="mt-2 text-sm text-gray-300">
              <img
                src={URL.createObjectURL(screenshot)}
                alt="Wellness Screenshot"
                style={{ maxWidth: 200, maxHeight: 120, borderRadius: 4, border: '1px solid #ccc' }}
              />
              <div>{screenshot.name}</div>
            </div>
          )}
        </div>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-bold text-green-200">Focus Timer</h3>
          <div className="mb-2 font-mono text-3xl">
            {min}:{sec}
          </div>
          <button onClick={handleStart} className="mr-2 rounded bg-green-700 px-3 py-1 hover:bg-green-600">
            Start
          </button>
          <button onClick={handlePause} className="mr-2 rounded bg-green-700 px-3 py-1 hover:bg-green-600">
            Pause
          </button>
          <button onClick={handleReset} className="rounded bg-green-700 px-3 py-1 hover:bg-green-600">
            Reset
          </button>
        </div>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-bold text-green-200">Wellness Tip</h3>
          <div className="mb-2 text-green-100">{tip}</div>
          <button onClick={handleNextTip} className="rounded bg-green-700 px-3 py-1 hover:bg-green-600">
            Next Tip
          </button>
        </div>
        <div className="mt-4 text-sm text-green-200">Productivity analytics coming soon.</div>
      </div>
    </section>
  );
}

export default WellnessProductivityDashboard;
