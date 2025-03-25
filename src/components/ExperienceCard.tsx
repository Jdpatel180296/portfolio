
import React from 'react';
import { Calendar, MapPin, Code } from 'lucide-react';


interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  icon?: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  description,
  icon = <Code className="w-16 h-16 text-header " />
}) => {
  return (
    <div className="experience-box min-h-[480px] flex flex-col">
      <div className="text-center mb-4">
        {icon}
      </div>
      
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <h4 className="text-2xl font-semibold text-gray-800 mb-2">{company}</h4>
      
      <div className="flex flex-wrap text-gray-600 mb-4 justify-center">
        <div className="flex items-center mr-6 mb-2">
          <MapPin className="w-5 h-5 mr-1" />
          <span className="text-base">{location}</span>
        </div>
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-1" />
          <span className="text-base">{period}</span>
        </div>
      </div>
      
      <p className="text-lg text-gray-700 flex-grow mb-6 text-justify">
        {description}
      </p>
      
    </div>
  );
};

export default ExperienceCard;
