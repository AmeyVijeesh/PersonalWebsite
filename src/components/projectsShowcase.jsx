import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./CSS/projectsshowcase.css";
import amexpropic from "./ComponentAssets/amexpropic.png";
import wapic from "./ComponentAssets/weatherapp.png";
import atextpic from "./ComponentAssets/atext.png";
import amart from "./ComponentAssets/amart.png";

const projects = [
  {
    title: "AmExpro",
    description:
      "E-commerce website made with React. Uses Firebase for database",
    imageUrl: amexpropic,
    liveDemoUrl: "https://amexpro.netlify.com",
    sourceCodeUrl: "https://github.com/username/project1",
  },
  {
    title: "Weather App",
    description:
      "Compact weather app, one of my first projects. Made using Tkinter, Python.",
    imageUrl: wapic,
    liveDemoUrl: "https://github.com/AmeyVijeesh/Weather-App/tree/main",
    sourceCodeUrl: "https://github.com/AmeyVijeesh/Weather-App/tree/main",
  },
  {
    title: "AText Editor",
    description:
      "Lightweight rich text/code editor with syntax highlighting. One of my favorite projects, made using Python.",
    imageUrl: atextpic,
    liveDemoUrl: "https://github.com/AmeyVijeesh/Text-Editor2",
    sourceCodeUrl: "https://github.com/AmeyVijeesh/Text-Editor2",
  },
  {
    title: "AmeyMart",
    description:
      "My first React project. Non-responsive, no longer maintained.",
    imageUrl: amart,
    liveDemoUrl: "https://ameyvijeesh.github.io/AmeyMart/",
    sourceCodeUrl: "https://ameyvijeesh.github.io/AmeyMart/",
  },
];

const ProjectsShowcase = () => {
  return (
    <div className="projects-showcase">
      <h1>My Projects</h1>
      <p>
        These are the projects I've made since I started to program. Go to my
        Github for the full list. Hover over the images to know more.
      </p>
      <Flipper flipKey={projects.length}>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Flipped key={index} flipId={index}>
              <div className="project-card">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-details">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

export default ProjectsShowcase;
