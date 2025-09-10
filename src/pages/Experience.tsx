import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";
import { Code, Database } from "lucide-react";

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    title: "Software Developer II",
    company: "United Health (Contract)",
    location: "USA",
    period: "Jan 2025 – Present",
    description:
      "Redesigned backend healthcare SDK integrations with Java 17 & Spring Boot microservices, improving system throughput by 2.3x. Built patient-facing React apps, reducing missed telehealth consultations by 22%. Engineered CI/CD pipelines with Jenkins, GitHub Actions, Docker, Kubernetes, and Terraform, cutting release cycles from 3 weeks to 4 days. Secured 1M+ patient records with HIPAA/GDPR-compliant OAuth2/JWT authentication. Migrated healthcare services to AWS, supporting 250K+ concurrent users and reducing infrastructure costs by 18%.",
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: "Senior Software Engineer",
    company: "Cognitive",
    location: "India",
    period: "Sep 2017 – Jul 2023",
    description:
      "Designed scalable payment settlement platform (80K+ daily transactions) with Java 17, Spring Boot, and Kafka. Built responsive React.js portals reducing service queries by 18%. Optimized PostgreSQL + Redis, cutting loan approval times from 90s to 12s. Automated deployments with Docker, Kubernetes, Terraform, reducing rollbacks by 35%. Developed fraud detection with Kafka + ML, blocking 1,500+ suspicious transactions monthly. Delivered treasury dashboards with Next.js, GraphQL, and D3.js, improving reconciliation by 40%.",
    icon: <Database className="w-16 h-16 text-header" />,
  },
];

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen py-20 px-4 bg-section1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h1 className="section-title">
          My <span className="text-header">Experiences</span>
        </h1>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* vertical line (center on desktop, left on mobile) */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-header sm:left-1/2 transform sm:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* timeline dot */}
                <div className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 top-4 w-4 h-4 bg-header rounded-full" />

                {/* card */}
                <div
                  className={`sm:w-1/2 ${
                    isLeft ? "sm:pr-8" : "sm:pl-8"
                  } w-full`}
                >
                  <ExperienceCard {...exp} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
