import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import "./CSS/projectsshowcase.css";
import amexpropic from "./ComponentAssets/amexpropic.png";
import wapic from "./ComponentAssets/weatherapp.png";
import atextpic from "./ComponentAssets/atext.png";
import amexpropic2 from "./ComponentAssets/amexpropic2.png";
import LazyLoad from "react-lazy-load";

const projects = [
  {
    title: "Amexpro (old)",
    description: "E-commerce website made with React. No longer maintained.",
    imageUrl: amexpropic,
    liveDemoUrl: "https://amexpro1.netlify.com",
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
    title: "Amexpro",
    description:
      "One of my largest projects. A beautiful replica of a good ecommerce site. Fully scaleable, responsive, and intuitive. ",
    imageUrl: amexpropic2,
    liveDemoUrl: "https://amexpro.netlify.com",
    sourceCodeUrl: "https://github.com/AmeyVijeesh/AmExpro/",
  },
];

const ProjectsShowcase = (cardSize) => {
  return (
    <div className="projects-showcase">
      <h1>My Projects</h1>
      <p>
        These are the projects I've made since I started to program. Go to my
        Github for the full list. Hover over the images to know more.
      </p>
      <Flipper flipKey={projects.length}>
        <center>
          <div className="projects-container" style={{ width: "70%" }}>
            {projects.map((project, index) => (
              <Flipped key={index} flipId={index}>
                <div className="project-card">
                  <LazyLoad>
                    <img src={project.imageUrl} alt={project.title} />
                  </LazyLoad>
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
        </center>
      </Flipper>
    </div>
  );
};

export default ProjectsShowcase;
