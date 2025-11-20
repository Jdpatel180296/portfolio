import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";
import { Code, Database, Briefcase } from "lucide-react";

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
    <section
      id={id}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-xy"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Section Title */}
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
            <Briefcase className="w-12 h-12 text-purple-600" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building scalable solutions across healthcare and fintech domains
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical gradient line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 sm:left-1/2 transform sm:-translate-x-1/2 rounded-full" />

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
                  {/* Timeline dot with gradient ring */}
                  <motion.div
                    className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 top-4 z-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg border-4 border-white" />
                  </motion.div>

                  {/* Card */}
                  <div
                    className={`sm:w-1/2 ${
                      isLeft ? "sm:pr-8" : "sm:pl-8"
                    } w-full pl-12 sm:pl-0`}
                  >
                    <ExperienceCard {...exp} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
