import React from "react";
import {
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

interface ResumeProps {
  id?: string;
}

// 👇 Moved up
const fadeInProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const Resume: React.FC<ResumeProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 animate-gradient-xy"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="w-12 h-12 text-teal-600" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
              Resume
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My educational background, skills, and professional experience
          </p>
        </motion.div>
        {/* Download Resume */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/Resume.pdf"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
          </a>
        </motion.div>
        {/* Education */}
        <motion.div
          className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl shadow-xl p-8 mb-10"
          {...fadeInProps}
        >
          <SectionHeader icon={GraduationCap} title="Education" />
          <TimelineItem
            title="Master of Science in Computer Science"
            subtitle="California State University, Los Angeles"
            location="Los Angeles, CA"
            time="Aug 2023 – May 2025"
            details={["GPA: 3.89/4"]}
          />
        </motion.div>
        {/* Skills */}
        <motion.div
          className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl shadow-xl p-8 mb-10"
          {...fadeInProps}
        >
          <SectionHeader icon={Trophy} title="Skills" />
          <p className="text-gray-600">
            <strong>Backend & Frameworks:</strong>
            Java 17, Spring Boot, Hibernate, Node.js, Express.js, GraphQL,
            Microservices
            <br />
            <strong>Frontend:</strong>
            React.js, Next.js, TypeScript, Angular, Tailwind, Material UI
            <br />
            <strong>Databases:</strong>
            PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, Cassandra
            <br />
            <strong>Cloud & DevOps:</strong>
            AWS (EC2, S3, RDS, Lambda), Azure (App Services, AKS), Docker,
            Kubernetes, Terraform, Jenkins, GitHub Actions
            <br />
            <strong>Security & APIs:</strong>
            Spring Security, OAuth2, JWT, Swagger/OpenAPI, HIPAA/GDPR
            <br />
            <strong>Testing:</strong>
            JUnit, Mockito, Selenium, Cypress, Postman, Performance Testing{" "}
          </p>
        </motion.div>
        {/* Work Experience */}
        <motion.div
          className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl shadow-xl p-8 mb-10"
          {...fadeInProps}
        >
          <SectionHeader icon={Briefcase} title="Work Experience" />
          <TimelineItem
            title="Software Developer II"
            subtitle="United Health (Contract)"
            location="USA"
            time="Jan 2025 – Present"
            details={[
              "Redesigned healthcare backend services with Java 17 & Spring Boot microservices, boosting throughput 2.3x.",
              "Built React.js/TypeScript apps improving telehealth workflows, reducing missed consultations by 22%.",
              "Optimized APIs with GraphQL + Redis caching, cutting latency from 1.9s to 400ms.",
              "Engineered CI/CD pipelines with Jenkins, GitHub Actions, Docker, and Kubernetes, reducing release cycles from 3 weeks to 4 days.",
              "Secured 1M+ patient records with HIPAA/GDPR-compliant Spring Security + OAuth2/JWT.",
            ]}
          />
          <TimelineItem
            title="Senior Software Engineer"
            subtitle="Cognitive"
            location="India"
            time="Sep 2017 – Jul 2023"
            details={[
              "Designed microservices-based payment settlement system (80K+ daily transactions) with Spring Boot & Kafka.",
              "Built React.js portals reducing customer queries by 18% and increasing engagement.",
              "Cut loan approval times from 90s to 12s via PostgreSQL optimization & Redis caching.",
              "Automated CI/CD with Docker, Kubernetes, Terraform, reducing rollbacks by 35%.",
              "Enhanced fraud detection with Kafka + ML, blocking 1,500+ fraudulent transactions monthly.",
            ]}
          />
        </motion.div>
        {/* Certifications */}
        <motion.div
          className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl shadow-xl p-8"
          {...fadeInProps}
        >
          <SectionHeader icon={Award} title="Certifications" />{" "}
          <TimelineItem
            title="Walmart Advanced Software Engineering Simulation"
            subtitle="Forage"
            time="Sep 2024"
          />{" "}
          <TimelineItem
            title="J.P. Morgan Software Engineering Virtual Experience"
            subtitle="Forage"
            time="Jul 2024"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Subcomponents
const SectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) => (
  <div className="flex items-center mb-6">
    <Icon className="text-header mr-3 w-6 h-6" />
    <h2 className="text-2xl font-bold">{title}</h2>
  </div>
);

const TimelineItem = ({
  title,
  subtitle,
  location,
  time,
  details = [],
}: {
  title: string;
  subtitle?: string;
  location?: string;
  time: string;
  details?: string[];
}) => (
  <div className="border-l-2 border-gray-200 pl-5 ml-3 relative space-y-2 mb-8">
    <div className="absolute -left-7 top-0 w-3 h-3 rounded-full bg-header" />
    <h3 className="text-xl font-bold">{title}</h3>
    {subtitle && <p className="text-gray-700">{subtitle}</p>}
    {location && <p className="text-gray-500">{location}</p>}
    <p className="text-gray-600">{time}</p>
    {Array.isArray(details) && details.length > 0 && (
      <ul className="list-disc pl-5 space-y-1 text-gray-600">
        {details.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
    )}
  </div>
);

export default Resume;
