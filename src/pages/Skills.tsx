// import React from 'react';
// import SkillIcon from '../components/SkillIcon';
// import { motion } from 'framer-motion';
// import { Code, FileCode, Box, Server, Database, Cpu, GitBranch, PenTool, BrainCircuit, Wrench } from 'lucide-react';

// interface SkillsProps {
//   id?: string;
// }

// const groupVariants = {
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const Skills: React.FC<SkillsProps> = ({ id }) => {
//   return (
//     <section id={id} className="bg-section2 min-h-screen py-20 px-3 flex flex-col justify-center">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="section-title">
//             My <span className="text-header">Skills</span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {[
//             { title: "Languages", skills: [ {icon: FileCode, name: "JavaScript"}, {icon: Code, name: "Java"}, {icon: FileCode, name: "Python"}, {icon: FileCode, name: "HTML"}, {icon: FileCode, name: "CSS"}, {icon: FileCode, name: "TypeScript"} ] },
//             { title: "Backend", skills: [ {icon: Server, name: "Node.js"}, {icon: Server, name: "Express.js"}, {icon: Box, name: "Spring Boot"}, {icon: Server, name: "REST API"}, {icon: Server, name: "GraphQL"}, {icon: Server, name: "Firebase"} ] },
//             { title: "Frontend", skills: [ {icon: Box, name: "React"}, {icon: Box, name: "Vue.js"}, {icon: Box, name: "React Native"}, {icon: PenTool, name: "UI/UX Design"}, {icon: PenTool, name: "Tailwind CSS"}, {icon: Box, name: "Redux"} ] },
//             { title: "Database", skills: [ {icon: Database, name: "MongoDB"}, {icon: Database, name: "SQL"}, {icon: Database, name: "Firebase"}, {icon: Database, name: "Redis"}, {icon: Database, name: "PostgreSQL"}, {icon: Database, name: "MySQL"} ] },
//             { title: "Tools & Libraries", skills: [ {icon: Wrench, name: "Pandas"}, {icon: Wrench, name: "Matplotlib"}, {icon: Wrench, name: "scikit-learn"}, {icon: Wrench, name: "NumPy"}, {icon: GitBranch, name: "GitHub"}, {icon: GitBranch, name: "Git"}, {icon: Wrench, name: "Jira"}, {icon: Cpu, name: "Docker"}, {icon: Cpu, name: "Kubernetes"}, {icon: BrainCircuit, name: "AI & ML"}, {icon: BrainCircuit, name: "Data Science"}, {icon: Cpu, name: "Microservices"} ] },
//           ].map((group, idx) => (
//             <motion.div
//               key={idx}
//               className={`bg-white rounded-lg shadow-lg p-10 ${group.title === "Tools & Libraries" ? "md:col-span-2" : ""}`}
//               variants={groupVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.1 }}
//             >
//               <h2 className="text-3xl font-bold mb-8 border-b pb-3">{group.title}</h2>
//               <div className={`grid grid-cols-2 ${group.title === "Tools & Libraries" ? "md:grid-cols-6" : "md:grid-cols-3"} gap-10`}>
//                 {group.skills.map((skill, index) => (
//                   <SkillIcon key={index} icon={skill.icon} name={skill.name} />
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import SkillIcon from '../components/SkillIcon';
import { motion } from 'framer-motion';

interface SkillsProps {
  id?: string;
}

const skillsData = [
  {
    title: "Languages",
    skills: [
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express.js" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring Boot" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", name: "GraphQL" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", name: "Redux" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" }
    ]
  },
  {
    title: "Database",
    skills: [
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" }
    ]
  },
  {
    title: "Tools & Libraries",
    skills: [
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", name: "NumPy" },
      { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas" },
    ]
  }
];

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section id={id} className="bg-section2 min-h-screen py-20 px-3 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-center mb-16">My <span className="text-header">Skills</span></h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-lg shadow-lg p-10 ${group.title === "Tools & Libraries" ? "md:col-span-2" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">{group.title}</h2>
              <div className={`grid grid-cols-3 md:grid-cols-${group.title === "Tools & Libraries" ? "6" : "3"} gap-10`}>
                {group.skills.map((skill, index) => (
                  <SkillIcon key={index} iconSrc={skill.iconSrc} name={skill.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
