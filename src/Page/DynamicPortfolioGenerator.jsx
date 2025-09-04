import React, { useState, useRef } from 'react';

const availableWidgets = [
  { id: 'bio', label: 'Bio', content: 'Add a short bio about yourself.' },
  { id: 'projects', label: 'Projects', content: 'Showcase your best projects.' },
  { id: 'skills', label: 'Skills', content: 'Highlight your top skills.' },
  { id: 'contact', label: 'Contact', content: 'Share your contact info.' },
];

function DynamicPortfolioGenerator() {
  const [widgets, setWidgets] = useState([]);
  const [draggedWidget, setDraggedWidget] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const fileInputRef = useRef();

  const handleDragStart = (widget) => setDraggedWidget(widget);
  const handleDrop = () => {
    if (draggedWidget && !widgets.find((w) => w.id === draggedWidget.id)) {
      setWidgets([...widgets, draggedWidget]);
    }
    setDraggedWidget(null);
  };
  const handleRemoveWidget = (id) => setWidgets(widgets.filter((w) => w.id !== id));
  const handleScreenshotUpload = (e) => {
    if (e.target.files && e.target.files[0]) setScreenshot(e.target.files[0]);
  };

  return (
    <div className="mt-8 rounded-lg bg-gray-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">Dynamic Portfolio Generator</h2>
      <p className="mb-4">
        Build and customize your interactive portfolio with drag-and-drop widgets, live project demos, and real-time
        analytics.
      </p>
      <div className="mb-4">
        <label className="mb-2 block font-semibold">Upload Portfolio Screenshot</label>
        <input type="file" accept="image/*" className="mb-2" ref={fileInputRef} onChange={handleScreenshotUpload} />
        {screenshot && (
          <div className="mt-2 text-sm text-gray-300">
            <img
              src={URL.createObjectURL(screenshot)}
              alt="Portfolio Screenshot"
              style={{ maxWidth: 200, maxHeight: 120, borderRadius: 4, border: '1px solid #ccc' }}
            />
            <div>{screenshot.name}</div>
          </div>
        )}
      </div>
      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <h3 className="mb-2 font-bold">Available Widgets</h3>
          <ul>
            {availableWidgets.map((widget) => (
              <li
                key={widget.id}
                draggable
                onDragStart={() => handleDragStart(widget)}
                className="mb-2 cursor-move rounded bg-gray-700 p-2 hover:bg-gray-600"
                style={{ opacity: widgets.find((w) => w.id === widget.id) ? 0.5 : 1 }}
              >
                {widget.label}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="min-h-[200px] flex-1 rounded border border-gray-700 bg-gray-900 p-4"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <h3 className="mb-2 font-bold">Your Portfolio Layout</h3>
          {widgets.length === 0 && <div className="text-gray-500">Drag widgets here to build your portfolio.</div>}
          <ul>
            {widgets.map((widget) => (
              <li key={widget.id} className="relative mb-4 rounded bg-gray-700 p-3">
                <button
                  onClick={() => handleRemoveWidget(widget.id)}
                  className="absolute right-2 top-1 text-red-400 hover:text-red-600"
                  title="Remove"
                >
                  &times;
                </button>
                <strong>{widget.label}</strong>
                <div className="mt-1 text-sm">{widget.content}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-400">Analytics and live project demos coming soon.</div>
    </div>
  );
}

export default DynamicPortfolioGenerator;
