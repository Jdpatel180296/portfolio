
import React from 'react';

import ExperienceCard from '../components/ExperienceCard';
import { Code, Smartphone } from 'lucide-react';
interface ExperienceProps {
  id?: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <section id={id} className="min-h-screen py-8 px-3 bg-section1 snap-start flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title">My <span className="text-header">Experiences</span></h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExperienceCard
              title="Graduate Research Assistant"
              company="California State University"
              location="Los Angeles, California"
              period="Feb 2025 - present"
              description="Helping professor Armando Beltran in research in Themantic Analysis in LLM"              
              icon={<Code className="w-16 h-16 text-header" />}
            />
            <ExperienceCard
              title="Sr. Software Developer"
              company="Alphaved Pvt Ltd"
              location="Surat, Gujarat, India"
              period="Jun 2020 - Jul 2023"
              description="Implemented Libraries for Asynchronous data storage and caching in applications to reduce call to Database queries leading to a 24% improvement in API response times and overall website performance."              
              icon={<Code className="w-16 h-16 text-header" />}
            />
            
            <ExperienceCard
              title="Software Developer"
              company="WebcodeZ Infoway"
              location="Rajkot, Gujarat, India"
              period="Feb 2018 - May 2020"
              description="Revamped testing and debugging processes, employing tools like Jest and Enzyme for React components, leading to a 30% reduction in performance bottlenecks and significant improvements in load time."
              icon={<Code className="w-16 h-16 text-header" />}
            />
            
            <ExperienceCard
              title="Android Development Intern"
              company="Tech Innovations"
              location="Remote"
              period="Jan 2017 - May 2017"
              description="Assisted in developing and testing Android applications, contributed to database design and implementation using PostgreSQL, participated in code reviews and bug fixing process, gained hands-on experience with development tools and methodologies."
              icon={<Smartphone className="w-16 h-16 text-header" />}
            />
            
          </div>
        </div>
      </section>

  );
};

export default Experience;
