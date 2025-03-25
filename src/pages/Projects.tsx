
import React from 'react';

import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  id?: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
 
  const projects = [
    {
      title: "Amazon Employee Access Chalange",
      period: "Oct 2024 - Dec 2024",
      description: "The Amazon Employee Access Challenge addresses the critical task of predicting employee access requirements within Amazon's internal network",
      technologies: ["Python", "Numpy", "Node.js", "Python", "GPT-4 API", "Convex"],
      githubLink: "https://github.com/Jdpatel180296/AmazonEmployeeAccessChalange",
      image: "/photo/AI_town.jpg"
    },
    {
      title: "AI Town Simulation",
      period: "Oct 2023 - Dec 2023",
      description: "Developed an interactive AI simulation where autonomous agents roam a virtual town and engage in dynamic conversations using GPT-4 API.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "Python", "GPT-4 API", "Convex"],
      githubLink: "https://github.com/Jdpatel180296/ai-town",
      image: "/photo/AI_town.jpg"
    },
    {
      title: "Restaurant Application",
      period: "Sep 2023 - Nov 2023",
      description: "Mobile application for restaurant management with table reservation via QR codes and live traffic monitoring for revenue prediction.",
      technologies: ["React Native", "Firebase", "JavaScript", "Node.js"],
      githubLink: "https://github.com/Jdpatel180296/app",
      image: "photo/Restaurent_app.PNG"
    },
    {
      title: "E-Commerce Platform",
      period: "Jan 2022 - Apr 2022",
      description: "Full-stack e-commerce platform with product management, user authentication, and secure payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      liveLink:"https://desilooklifestyle.com/",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (

      <section id={id} className="min-h-screen bg-section2 py-20 px-3 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title">
              My <span className="text-header">Projects</span>
            </h1>
            <p className="text-gray-700 mt-4 text-lg">Some of the projects I've worked on</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                period={project.period}
                description={project.description}
                technologies={project.technologies}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

  );
};

export default Projects;
