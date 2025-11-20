import React from "react";
import SkillIcon from "../components/SkillIcon";
import { motion } from "framer-motion";
import {
  Trophy,
  Code2,
  Leaf,
  Server,
  Zap,
  Database,
  Lock,
  Cloud,
  Container,
  GitBranch,
  TestTube,
  FileCode,
  Workflow,
  Shield,
  Globe,
  Package,
  Braces,
  Boxes,
  CheckCircle,
  Activity,
} from "lucide-react";

interface SkillsProps {
  id?: string;
}

const skillsData = [
  {
    title: "Backend & Frameworks",
    skills: [
      { icon: Code2, name: "Java 17" },
      { icon: Leaf, name: "Spring Boot" },
      { icon: Server, name: "Node.js" },
      { icon: Zap, name: "Express.js" },
      { icon: Braces, name: "GraphQL" },
      { icon: Database, name: "Hibernate" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: Code2, name: "React.js" },
      { icon: FileCode, name: "Next.js" },
      { icon: FileCode, name: "TypeScript" },
      { icon: Code2, name: "Angular" },
      { icon: Zap, name: "Tailwind" },
      { icon: Boxes, name: "Material UI" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: Database, name: "PostgreSQL" },
      { icon: Database, name: "MySQL" },
      { icon: Database, name: "MongoDB" },
      { icon: Database, name: "Redis" },
      { icon: Cloud, name: "DynamoDB" },
      { icon: Database, name: "Cassandra" },
    ],
  },
  {
    title: "Security & APIs",
    skills: [
      { icon: Shield, name: "Spring Security" },
      { icon: Lock, name: "OAuth2" },
      { icon: Lock, name: "JWT" },
      { icon: FileCode, name: "Swagger/OpenAPI" },
      { icon: Shield, name: "HIPAA/GDPR" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { icon: Cloud, name: "AWS" },
      { icon: Cloud, name: "Azure" },
      { icon: Container, name: "Docker" },
      { icon: Boxes, name: "Kubernetes" },
      { icon: Workflow, name: "Terraform" },
      { icon: Activity, name: "Jenkins" },
      { icon: GitBranch, name: "GitHub Actions" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { icon: TestTube, name: "JUnit" },
      { icon: TestTube, name: "Mockito" },
      { icon: Globe, name: "Selenium" },
      { icon: CheckCircle, name: "Cypress" },
      { icon: Package, name: "Postman" },
      { icon: Activity, name: "Performance Testing" },
    ],
  },
];

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-section2 min-h-screen py-20 px-3 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12 gap-3">
          <Trophy className="text-header w-8 h-8" />
          <h1 className="section-title text-center">
            My <span className="text-header">Skills</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-lg shadow-lg p-10 md:col-span-2`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 border-b pb-3">
                {group.title}
              </h2>
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6`}
              >
                {group.skills.map((skill, index) => (
                  <SkillIcon key={index} icon={skill.icon} name={skill.name} />
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
