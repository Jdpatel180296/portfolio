
import React from 'react';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a 
        href="https://www.linkedin.com/in/jaydeepgondaliya/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn Profile"
      >
        <i className="bx bxl-linkedin text-2xl"></i>
      </a>
      <a 
        href="https://github.com/Jdpatel180296" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub Profile"
      >
        <i className="bx bxl-github text-2xl"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
