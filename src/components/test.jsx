import React, { useEffect, useRef } from 'react';
import './test.css';
import bgVideo2 from './ComponentAssets/videoplayback3.mp4';
import Lenis from 'lenis';

const Test = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const video = videoRef.current;
    video.pause();

    const updateVideo = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      const duration = video.duration || 1;
      video.currentTime = scrollFraction * duration;
    };

    window.addEventListener('scroll', updateVideo);
    return () => {
      window.removeEventListener('scroll', updateVideo);
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {/* Fixed background video */}
      <video ref={videoRef} muted className="videoo">
        <source src={bgVideo2} type="video/mp4" />
      </video>

      {/* Scrollable content */}
      <div
        className="scrollContent"
        style={{ height: '200vh', position: 'relative', zIndex: 1 }}
      >
        <h1 style={{ color: 'white', padding: '20px' }}>
          Scroll to control the video
        </h1>
      </div>
    </div>
  );
};

export default Test;
