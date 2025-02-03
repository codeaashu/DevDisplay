import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

function Globe() {
  const canvasRef = useRef();
  const [globeSize, setGlobeSize] = useState(getGlobeSize());

  function getGlobeSize() {
    if (window.innerWidth >= 1280) return 1000;
    if (window.innerWidth >= 1024) return 800;
    if (window.innerWidth >= 768) return 670;
    if (window.innerWidth >= 640) return 580;
    if (window.innerWidth >= 475) return 420;
    return 300;
  }

  useEffect(() => {
    const handleResize = () => {
      setGlobeSize(getGlobeSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      width: globeSize,
      height: globeSize,
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
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.1 }, // New York
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [globeSize]);

  return (
    <div className="mx-auto flex w-full items-center  justify-center overflow-hidden">
      <div className="w-[300px]overflow-hidden xs:w-[420px] sm:w-[580px] md:w-[670px] lg:w-[800px] xl:w-[1000px]">
        <canvas
          ref={canvasRef}
          style={{
            width: `${globeSize}px`,
            height: `${globeSize}px`,
          }}
          className="overflow-hidden"
        />
      </div>
    </div>
  );
}

export default Globe;
