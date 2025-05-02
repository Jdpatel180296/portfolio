
// import React from 'react';
// import { Calendar, Link as LinkIcon, Github } from 'lucide-react';

// interface ProjectCardProps {
//   title: string;
//   period: string;
//   description: string;
//   technologies: string[];
//   liveLink?: string;
//   githubLink?: string;
//   image: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   period,
//   description,
//   technologies,
//   liveLink,
//   githubLink,
//   image
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//       <div className="relative h-48 overflow-hidden">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//         />
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-3xl font-bold mb-2">{title}</h3>
        
//         <div className="flex items-center text-gray-600 mb-4">
//           <Calendar className="w-5 h-5 mr-2" />
//           <span className="text-base">{period}</span>
//         </div>
        
//         <p className="text-gray-700 mb-4 text-lg">{description}</p>
        
//         <div className="mb-4">
//           <h4 className="text-base font-semibold text-gray-500 mb-2">TECHNOLOGIES</h4>
//           <div className="flex flex-wrap gap-2">
//             {technologies.map((tech, index) => (
//               <span 
//                 key={index} 
//                 className="px-3 py-1 bg-skills text-gray-700 text-sm font-medium rounded-full"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
        
//         <div className="flex space-x-4 mt-4">
//           {liveLink && (
//             <a 
//               href={liveLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="social-icon"
//               aria-label="Live Demo"
//             >
//               <LinkIcon className="w-6 h-6" />
//             </a>
//           )}
          
//           {githubLink && (
//             <a 
//               href={githubLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="social-icon"
//               aria-label="GitHub Repository"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;



import React from 'react';
import { Calendar, Link as LinkIcon, Github } from 'lucide-react';
import { motion } from 'framer-motion';

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
  image,
}) => {
  return (
    <motion.div
      className="project-card group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 z-10 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 bg-header p-3 rounded-full hover:bg-opacity-80"
              aria-label="Live Demo"
            >
              <LinkIcon className="w-5 h-5" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mx-2 bg-header p-3 rounded-full hover:bg-opacity-80"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-header">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{period}</span>
        </div>

        <p className="text-gray-700 mb-4 text-base leading-relaxed">{description}</p>

        <div className="mb-2">
          <h4 className="text-sm font-semibold text-gray-500 mb-1">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-skills text-sm text-gray-800 font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
