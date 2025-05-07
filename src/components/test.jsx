import React, { useEffect, useRef } from 'react';
import './test.css';
import bgVideo2 from './ComponentAssets/bgvideo8.mp4';
import Lenis from 'lenis';
import gsap from 'gsap';

const Test = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Init Lenis smooth scroll
    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Pause the video
    const video = videoRef.current;
    video.pause();

    // Update video time on scroll
    const updateVideo = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      const duration = video.duration || 1; // avoid NaN
      video.currentTime = scrollFraction * duration;
    };

    window.addEventListener('scroll', updateVideo);
    return () => {
      window.removeEventListener('scroll', updateVideo);
      lenis.destroy();
    };
  }, []);
  return (
    <div style={{ height: '200vh' }} className="homeCont">
      <video ref={videoRef} muted>
        <source src={bgVideo2} type="video/mp4" />
      </video>{' '}
    </div>
  );
};

export default Test;
