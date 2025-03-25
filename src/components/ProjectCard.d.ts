import React from 'react';
interface ProjectCardProps {
    title: string;
    period: string;
    description: string;
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    image: string;
}
declare const ProjectCard: React.FC<ProjectCardProps>;
export default ProjectCard;
