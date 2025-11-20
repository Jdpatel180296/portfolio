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
      { icon: Code2, name: "Java 17", color: "text-orange-600" },
      { icon: Leaf, name: "Spring Boot", color: "text-green-600" },
      { icon: Server, name: "Node.js", color: "text-emerald-600" },
      { icon: Zap, name: "Express.js", color: "text-yellow-500" },
      { icon: Braces, name: "GraphQL", color: "text-pink-600" },
      { icon: Database, name: "Hibernate", color: "text-purple-600" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: Code2, name: "React.js", color: "text-cyan-500" },
      { icon: FileCode, name: "Next.js", color: "text-gray-800" },
      { icon: FileCode, name: "TypeScript", color: "text-blue-600" },
      { icon: Code2, name: "Angular", color: "text-red-600" },
      { icon: Zap, name: "Tailwind", color: "text-teal-500" },
      { icon: Boxes, name: "Material UI", color: "text-blue-500" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { icon: Database, name: "PostgreSQL", color: "text-blue-700" },
      { icon: Database, name: "MySQL", color: "text-blue-600" },
      { icon: Database, name: "MongoDB", color: "text-green-600" },
      { icon: Database, name: "Redis", color: "text-red-600" },
      { icon: Cloud, name: "DynamoDB", color: "text-indigo-600" },
      { icon: Database, name: "Cassandra", color: "text-teal-600" },
    ],
  },
  {
    title: "Security & APIs",
    skills: [
      { icon: Shield, name: "Spring Security", color: "text-green-700" },
      { icon: Lock, name: "OAuth2", color: "text-purple-600" },
      { icon: Lock, name: "JWT", color: "text-pink-600" },
      { icon: FileCode, name: "Swagger/OpenAPI", color: "text-emerald-600" },
      { icon: Shield, name: "HIPAA/GDPR", color: "text-red-700" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { icon: Cloud, name: "AWS", color: "text-orange-500" },
      { icon: Cloud, name: "Azure", color: "text-blue-600" },
      { icon: Container, name: "Docker", color: "text-blue-500" },
      { icon: Boxes, name: "Kubernetes", color: "text-indigo-600" },
      { icon: Workflow, name: "Terraform", color: "text-purple-700" },
      { icon: Activity, name: "Jenkins", color: "text-red-600" },
      { icon: GitBranch, name: "GitHub Actions", color: "text-gray-800" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { icon: TestTube, name: "JUnit", color: "text-green-600" },
      { icon: TestTube, name: "Mockito", color: "text-emerald-600" },
      { icon: Globe, name: "Selenium", color: "text-teal-600" },
      { icon: CheckCircle, name: "Cypress", color: "text-cyan-600" },
      { icon: Package, name: "Postman", color: "text-orange-600" },
      { icon: Activity, name: "Performance Testing", color: "text-pink-600" },
    ],
  },
];

const Skills: React.FC<SkillsProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen relative py-20 px-3 flex flex-col justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"></div>

      {/* Animated blob shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-12 gap-3">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <Trophy className="text-yellow-500 w-12 h-12" />
          </motion.div>
          <motion.h1
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              className="backdrop-blur-sm bg-white/80 border border-white/40 rounded-2xl shadow-2xl p-10 md:col-span-2 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-8 pb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent border-b-2 border-purple-200">
                {group.title}
              </h2>
              <div
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6`}
              >
                {group.skills.map((skill, index) => (
                  <SkillIcon
                    key={index}
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                  />
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
