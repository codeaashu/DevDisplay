import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

function Globe() {
  const canvasRef = useRef();
  const [globeSize, setGlobeSize] = useState(window.innerWidth < 550 ? 300 : 500);

  useEffect(() => {
    // Adjust globe size on screen resize
    const handleResize = () => {
      setGlobeSize(window.innerWidth < 550 ? 300 : 500);
    };

    handleResize();
  }, [globeSize]);

  useEffect(() => {
    let phi = 0;

    // Initialize the globe with the canvas ref
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: globeSize, // Double the resolution for better quality
      height: globeSize, // Double the resolution for better quality
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // Example marker locations (longitude, latitude)
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 }, // New York
      ],
      onRender: (state) => {
        // Animation frame handler
        state.phi = phi;
        phi += 0.01; // Rotation speed
      },
    });

    return () => {
      globe.destroy();
    };
  }, [globeSize]);

  return (
    <div style={{ width: '100%', height: '100%' }} className="mt-10">
      <canvas
        ref={canvasRef}
        style={{
          width: globeSize, // Make canvas responsive
          height: 'auto', // Make canvas responsive
          maxWidth: '100%',
          aspectRatio: 1,
        }}
        className="overflow-visible"
      />
    </div>
  );
}

export default Globe;
