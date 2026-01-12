'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Delay showing banner to appear after splash screen
      const timer = setTimeout(() => {
        setShowBanner(true);
        // Small delay for animation
        setTimeout(() => setIsVisible(true), 100);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[9998] transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Cookie Icon & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="text-4xl flex-shrink-0">🍪</div>
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-1">We use cookies</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-body">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors duration-200"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 shadow-lg shadow-red-600/20"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
