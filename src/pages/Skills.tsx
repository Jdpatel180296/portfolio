
import React from 'react';

import SkillIcon from '../components/SkillIcon';
import { Code, FileCode, Box, Server, Database, Cpu, GitBranch, PenTool, BrainCircuit, Wrench } from 'lucide-react';


interface SkillsProps {
  id?: string;
}
const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (

      <section id={id} className="bg-section2 min-h-screen py-20 px-3 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title">
              My <span className="text-header">Skills</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">Languages</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <SkillIcon icon={FileCode} name="JavaScript" />
                <SkillIcon icon={Code} name="Java" />
                <SkillIcon icon={FileCode} name="Python" />
                <SkillIcon icon={FileCode} name="HTML" />
                <SkillIcon icon={FileCode} name="CSS" />
                <SkillIcon icon={FileCode} name="TypeScript" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">Backend</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <SkillIcon icon={Server} name="Node.js" />
                <SkillIcon icon={Server} name="Express.js" />
                <SkillIcon icon={Box} name="Spring Boot" />
                <SkillIcon icon={Server} name="REST API" />
                <SkillIcon icon={Server} name="GraphQL" />
                <SkillIcon icon={Server} name="Firebase" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">Frontend</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <SkillIcon icon={Box} name="React" />
                <SkillIcon icon={Box} name="Vue.js" />
                <SkillIcon icon={Box} name="React Native" />
                <SkillIcon icon={PenTool} name="UI/UX Design" />
                <SkillIcon icon={PenTool} name="Tailwind CSS" />
                <SkillIcon icon={Box} name="Redux" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">Database</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <SkillIcon icon={Database} name="MongoDB" />
                <SkillIcon icon={Database} name="SQL" />
                <SkillIcon icon={Database} name="Firebase" />
                <SkillIcon icon={Database} name="Redis" />
                <SkillIcon icon={Database} name="PostgreSQL" />
                <SkillIcon icon={Database} name="MySQL" />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-10 md:col-span-2">
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">Tools & Libraries</h2>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
                <SkillIcon icon={Wrench} name="Pandas" />
                <SkillIcon icon={Wrench} name="Matplotlib" />
                <SkillIcon icon={Wrench} name="scikit-learn" />
                <SkillIcon icon={Wrench} name="NumPy" />
                <SkillIcon icon={GitBranch} name="GitHub" />
                <SkillIcon icon={GitBranch} name="Git" />
                <SkillIcon icon={Wrench} name="Jira" />
                <SkillIcon icon={Cpu} name="Docker" />
                <SkillIcon icon={Cpu} name="Kubernetes" />
                <SkillIcon icon={BrainCircuit} name="AI & ML" />
                <SkillIcon icon={BrainCircuit} name="Data Science" />
                <SkillIcon icon={Cpu} name="Microservices" />
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Skills;
