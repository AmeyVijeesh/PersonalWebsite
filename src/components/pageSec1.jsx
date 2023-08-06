import React from "react";
import bgVideo from "./ComponentAssets/bgvideo2.mp4";
import { fadeIn } from "react-animations";
import { TypeAnimation } from "react-type-animation";

import "./CSS/pageSec1.css";

const PageSec1 = () => {
  return (
    <>
      <div className="fixed-text-container2">
        <h2 className="fixed-text2">ameyvijeesh@gmail.com</h2>
      </div>
      <div className="scroll-item">
        <div id="outerContainer">
          <div id="home-top-video">
            <div className="video-wrapper">
              <video autoPlay loop muted>
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag. It would be better
                to view this website with an upgraded browser.
              </video>
            </div>
            <div id="home-text">
              <h1
                className="titleText animatedHoverH1"
                style={{ animation: fadeIn }}
              >
                Hello there! I'm Amey
              </h1>
              <h4>Programmer, Car Enthusiast, and an Avid Reader</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-text-container">
        <h2 className="fixed-text">Scroll</h2>
      </div>
    </>
  );
};

export default PageSec1;
