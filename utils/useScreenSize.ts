import React, { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 359) {
        setScreenSize('ns');
      } else if (width >= 359 && width <= 767) {
        setScreenSize('nsTsm');
      } else if (width >= 768 && width <= 1119) {
        setScreenSize('md');
      } else if (width >= 1120 && width <= 1279) {
        setScreenSize('lg');
      } else if (width >= 1280 && width <= 1399) {
        setScreenSize('xl');
      } else if (width >= 1400 && width <= 1859) {
        setScreenSize('2xl');
      } else {
        setScreenSize('3xl');
      }
    };

    // Initial call to set the screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (screenSize);
};

export default useScreenSize;
