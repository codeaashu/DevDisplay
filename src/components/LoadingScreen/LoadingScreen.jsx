import React from 'react';
import './LoadingScreen.css';

/**
 * ANIMATED LOADING SCREEN COMPONENT
 *
 * PURPOSE: Show an engaging loading experience while the homepage data loads
 *
 * FEATURES IMPLEMENTED:
 * 1. DevDisplay branding with logo and tagline
 * 2. Multiple animated elements for visual interest
 * 3. Pulsing dots indicating activity
 * 4. Animated progress bar
 * 5. Floating code-themed elements (brackets, keywords)
 * 6. Spinning ring animations
 * 7. Subtle background pattern
 * 8. Responsive design for all screen sizes
 *
 * PERFORMANCE CONSIDERATIONS:
 * - Uses CSS animations instead of JavaScript for better performance
 * - Optimized for 60fps smooth animations
 * - Minimal DOM elements to reduce rendering overhead
 * - GPU-accelerated transforms where possible
 */
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src="/DevDisplay ICON.png" alt="DevDisplay" className="loading-logo" />
          <h1 className="loading-title">DevDisplay</h1>
          <p className="loading-subtitle">Paradise for developers</p>
        </div>

        {/* Animated Elements */}
        <div className="loading-elements">
          {/* Pulsing Dots */}
          <div className="pulse-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="loading-text">Loading amazing developers...</span>
          </div>

          {/* Floating Code Elements */}
          <div className="floating-elements">
            <div className="code-element code-1">&lt;/&gt;</div> {/* HTML/JSX closing tag */}
            <div className="code-element code-2">{'{}'}</div> {/* JavaScript object */}
            <div className="code-element code-3">( )</div> {/* Function parentheses */}
            <div className="code-element code-4">[ ]</div> {/* Array brackets */}
            <div className="code-element code-5">git</div> {/* Version control */}
            <div className="code-element code-6">dev</div> {/* Developer keyword */}
          </div>

          {/* Spinning Ring */}
          <div className="spinner-ring">
            <div className="ring-part"></div>
            <div className="ring-part"></div>
            <div className="ring-part"></div>
            <div className="ring-part"></div>
          </div>
        </div>
      </div>

      {/* BACKGROUND PATTERN */}
      {/* Subtle grid pattern for visual depth */}
      <div className="bg-pattern">
        <div className="pattern-grid"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
