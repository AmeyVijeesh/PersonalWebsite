import React from "react";
import "./CSS/languageShowcase.css";

const languages = [
  {
    name: "JavaScript",
    color: "#f7df1e",
    tooltip:
      "Used for web-development. I mainly use it with React. This website is made with Javascript.",
  },
  {
    name: "Python",
    color: "#306998",
    tooltip:
      "My favorite language. One of the most popular, versatile languages out there.",
  },
  {
    name: "Java",
    color: "#e15258",
    tooltip: "I just know the basics of this, Is don't program much in Java.",
  },
  {
    name: "HTML/CSS",
    color: "#FF4500",
    tooltip: "Markup language along with styling. Very common and popular.",
  },
];

const LanguageShowcase = () => {
  return (
    <>
      <h1 className="plh1">Programming Languages/Frameworks</h1>
      <p className="plp">
        Below are the programming languages/frameworks/libraries I know. Hover
        over them to know more.
      </p>
      <div className="language-grid">
        {languages.map((language, index) => (
          <div
            key={index}
            className="language-card"
            style={{ backgroundColor: language.color }}
            data-tooltip={language.tooltip}
          >
            <span>{language.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default LanguageShowcase;
