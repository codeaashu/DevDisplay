import React, { lazy, Suspense } from 'react';

// Lazy load the Globe component
const Globe = lazy(() => import('./Globe'));

// Loading placeholder component
const GlobeLoadingPlaceholder = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden">
      <div className="w-[300px] overflow-hidden xs:w-[320px] sm:w-[380px] md:w-[470px] lg:w-[500px] xl:w-[600px]">
        <div
          style={{
            width: '100%',
            aspectRatio: '1', // Maintain square aspect ratio
            background: 'linear-gradient(135deg, rgba(0, 22, 35, 0.8) 0%, rgba(0, 42, 65, 0.8) 100%)',
            borderRadius: '50%', // Circular shape like the globe
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            animation: 'pulse 2s infinite', // Subtle animation while loading
          }}
        >
          <div className="text-center">
            <div className="mb-2">🌍</div> {/* Globe emoji for instant recognition */}
            <div>Loading Interactive Globe...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * MAIN LAZY GLOBE COMPONENT
 *
 * Combines React.lazy() with Suspense for optimal loading experience.
 * The Suspense boundary catches the loading state and shows our placeholder.
 */
const LazyGlobe = () => {
  return (
    <Suspense fallback={<GlobeLoadingPlaceholder />}>
      <Globe />
    </Suspense>
  );
};

export default LazyGlobe;
