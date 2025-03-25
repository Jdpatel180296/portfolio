
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillIconProps {
  icon: LucideIcon;
  name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon: Icon, name }) => {
  return (
    <div className="icon-container flex flex-col items-center">
      <div className="skill-icon mb-3">
        <Icon className="w-10 h-10 " />
      </div>
      <span className="text-lg font-medium text-center text-gray-800">{name}</span>
    </div>
  );
};

export default SkillIcon;
