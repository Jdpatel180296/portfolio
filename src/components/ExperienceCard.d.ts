import React from 'react';
interface ExperienceCardProps {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    icon?: React.ReactNode;
}
declare const ExperienceCard: React.FC<ExperienceCardProps>;
export default ExperienceCard;
