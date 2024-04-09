import React, { useState, useEffect } from "react";
import img from "./ComponentAssets/trimg2.png";
import {
  faLinkedin,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import FavoriteItemsShowcase from "./favoriteItemsShowcase";
import LanguageShowcase from "./languagesShowcase";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        {" "}
        <div className="diva2">
          <button className="bttn2"></button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="fixed-text-container2">
            <h2 className="fixed-text2">ameyvijeesh@gmail.com</h2>
          </div>
          <div
            className="aboutCont"
            style={{ transform: `translateY(-${scrollPosition}px)` }}
          >
            <div className="profContainer">
              <h1 style={{ textWrap: "nowrap" }} className="abouth1">
                Hello, <br />
                I'm Amey Vijeesh
              </h1>
              <img
                src={img}
                alt=""
                className="profPic"
                style={{ opacity: 1 - scrollPosition / window.innerHeight }}
              />
              <div
                style={{
                  textAlign: "left",
                  opacity: 1 - scrollPosition / window.innerHeight,
                }}
              >
                <h4 className="abouth2">I am a</h4>
                <h2 className="aboutp">Programmer</h2>{" "}
                <h2 className="aboutp">Car Enthusiast</h2>
                <h2 className="aboutp">Reader</h2>
              </div>
            </div>
          </div>
          <div className="fixed-text-container">
            <h2 className="fixed-text">Scroll</h2>
          </div>
        </div>{" "}
        <div className="diva">
          <button
            className="bttn1"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvqKctKGdxrNgqptwMtwwfDntwBQSxcCXWnhdMkNHMdjPzsnMHXLSSwdqkGbjSSwWvSmSVmail.google.com"
              )
            }
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>{" "}
          <button
            className="bttn1"
            onClick={() =>
              window.open("https://www.linkedin.com/in/amey-vijeesh-4434711b5/")
            }
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button>{" "}
          <button
            className="bttn1"
            onClick={() => {
              window.open("https://github.com/AmeyVijeesh");
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            className="bttn1"
            onClick={() => {
              window.open("https://discord.com/users/827044709406998568");
            }}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </button>
        </div>
      </div>
      <div style={{ height: "100vh", backgroundColor: "#000" }}>
        <LanguageShowcase />
      </div>

      <FavoriteItemsShowcase />
    </>
  );
};

export default About;
