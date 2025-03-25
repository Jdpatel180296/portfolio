
import React from 'react';
import { Calendar, Link as LinkIcon, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  period,
  description,
  technologies,
  liveLink,
  githubLink,
  image
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="text-base">{period}</span>
        </div>
        
        <p className="text-gray-700 mb-4 text-lg">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-500 mb-2">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-skills text-gray-700 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4 mt-4">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Live Demo"
            >
              <LinkIcon className="w-6 h-6" />
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Repository"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
