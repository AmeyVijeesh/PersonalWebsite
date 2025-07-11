import React from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './CSS/projectsshowcase.css';
import atextpic from './ComponentAssets/atext.png';
import amexpropic2 from './ComponentAssets/amexpropic2.png';
import plstudypic from './ComponentAssets/plstudy.png';
import liminalitypic from './ComponentAssets/liminalitypic.png';
import psim from './ComponentAssets/psim.png';
import spotify from './ComponentAssets/spotify.png';
import LazyLoad from 'react-lazy-load';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'PLStudy',
    description:
      'An all-in-one productivity tracker with personalised statistics and integrated timer.',
    imageUrl: plstudypic,
    liveDemoUrl: 'https://plstudy.vercel.app',
    sourceCodeUrl: 'https://github.com/AmeyVijeesh/study-app',
  },
  {
    title: 'Liminality - An Immersive Experience',
    description:
      'An interactive, immersive website that explores liminality and surreality in a single page.',
    imageUrl: liminalitypic,
    liveDemoUrl: 'https://liminality-three.vercel.app/',
    sourceCodeUrl: 'https://github.com/AmeyVijeesh/Liminality',
  },
  {
    title: 'AText Editor',
    description:
      'Lightweight rich text/code editor with syntax highlighting. One of my favorite projects, made using Python.',
    imageUrl: atextpic,
    liveDemoUrl: 'https://github.com/AmeyVijeesh/Text-Editor2',
    sourceCodeUrl: 'https://github.com/AmeyVijeesh/Text-Editor2',
  },
  {
    title: 'Amexpro',
    description:
      'One of my largest projects. A beautiful replica of a good ecommerce site. Fully scaleable, responsive, and intuitive. ',
    imageUrl: amexpropic2,
    liveDemoUrl: 'https://amexpro.netlify.app/',
    sourceCodeUrl: 'https://github.com/AmeyVijeesh/AmExpro/',
  },
];

const ProjectsShowcase = () => {
  return (
    <div className="projects-showcase">
      <Flipper flipKey={projects.length}>
        <center>
          <div className="projects-container" style={{ width: '70%' }}>
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
                        Try it out
                      </a>
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Repo
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
