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
    <motion.section
      id={id}
      className="bg-section2 min-h-screen py-16 px-6 flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }} // ✅ safer for Safari
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="section-title">Resume</h1>
          <p className="text-gray-600 mt-4">
            My educational background, skills, and professional experience
          </p>
        </motion.div>
        {/* Download Resume */}
        <div className="flex justify-center mb-10">
          <a
            href="/Resume.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </div>
        {/* Education */}
        <motion.div
          className="bg-section1 rounded-lg shadow-lg p-8 mb-10"
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
          className="bg-section1 rounded-lg shadow-lg p-8 mb-10"
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
          className="bg-section1 rounded-lg shadow-lg p-8 mb-10"
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
          className="bg-section1 rounded-lg shadow-lg p-8"
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
        </motion.div>{" "}
      </div>
    </motion.section>
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
