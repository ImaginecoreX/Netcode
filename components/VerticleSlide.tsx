'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VerticalCarouselProps {
  children: React.ReactNode[];
}
const VerticleSlide: React.FC<VerticalCarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Automatically advance the carousel every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [children.length]);
  return (

        <div className={'verticalCarousel'}>
          <div className={'carouselSlides'}>
            <AnimatePresence initial={false} exitBeforeEnter={false} mode="wait">
              {children.map((slide, index) => (
                <motion.div
                  key={index}
                  className={'carouselSlide'}
                  initial={{ translateY: '0%' }}
                  animate={{ translateY: activeIndex === index ? '0%' : '-100%' }}
                  exit={{ translateY: '-100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  {slide}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className={'navigationBar'}>
            {children.map((_, index) => (
              <div
                key={index}
                className={`${'navBarItem'} ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              ></div>
            ))}
          </div>
        </div>
    
  )
}

export default VerticleSlide