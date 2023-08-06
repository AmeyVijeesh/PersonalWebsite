import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import img from "./ComponentAssets/ameypic2.png";
import LanguageShowcase from "./languagesShowcase.jsx";
import ProjectsShowcase from "./projectsShowcase";
import FavoriteItemsShowcase from "./favoriteItemsShowcase";

const About = () => {
  return (
    <>
      <div className="fixed-text-container2A">
        <h2 className="fixed-text2A">About me</h2>
      </div>
      <div className="aboutPageFullContainer">
        <div className="animatedBackground">
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <div className="aboutPageCont">
          <div className="aboutPageContText">
            <div className="tiltedTextContainer">
              <h1>I'm Amey</h1>
            </div>
            <p className="abtText">
              Hello there! I'm Amey Vijeesh, a 13-year-old individual currently
              residing in the sprawling cityscapes of Bangalore, India. I am
              very deeply passionate about cars, hence this website is
              car-themed. Programming serves as one of my main hobbies, and a
              close second comes reading. I am also a fan of exploring new
              realms in real life, in books, and in technology. I am also drawn
              to architectural designs, creating creative buildings and living
              spaces. <br />I have also made my own imaginary car garage, right
              in this website.
            </p>
            <button className="btnLearnMore">
              <Link to="/MyGarage" style={{ color: "#fff" }}>
                My Car Garage
              </Link>
            </button>
          </div>
          <div className="photoContainer">
            <div className="circularFrame">
              <img src={img} alt="Profile" className="profileImage" />
            </div>
          </div>
        </div>
      </div>
      <LanguageShowcase id="lola" />
      <ProjectsShowcase />
      <FavoriteItemsShowcase />
      <div className="fixed-text-container">
        <h2 className="fixed-text">Scroll</h2>
      </div>
    </>
  );
};

export default About;
