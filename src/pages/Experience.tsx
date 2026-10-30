import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";
import { Code, Database, Briefcase, Smartphone, Layers, Globe, Brain } from "lucide-react";

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    title: "Software Developer",
    company: "Zevrona",
    location: "Los Angeles, CA",
    period: "Aug 2026 – Present",
    description:
      "Modernizing legacy static websites for multiple small-business clients into full-stack applications with Next.js/React, Node.js/Express and a database layer. Architecting a shared platform with reusable login, email-notification and Stripe payment modules adapted per client. Designing mobile-ready REST APIs so each platform can extend to iOS and Android apps without rebuilding the backend. Building user and admin dashboards with finance monitoring and customer data capture, a ticketing and finance platform integrating the Ticketmaster API, and GoHighLevel CRM automation. Building AI agents (LangChain/LangGraph) to automate Shopify inventory sync and listings.",
    icon: <Smartphone className="w-16 h-16 text-header" />,
  },
  {
    title: "Software Developer",
    company: "Studiobloomla",
    location: "USA",
    period: "Jan 2026 – Aug 2026",
    description:
      "Designed and developed a full-stack platform from scratch using Node.js and React.js, supporting multiple service offerings in one application. Built and integrated an AI-driven financial analysis tool to evaluate client credit and financial data, automating funding-eligibility assessment. Developed backend services and automation workflows for data processing, validation and decision logic, speeding up client onboarding.",
    icon: <Layers className="w-16 h-16 text-header" />,
  },
  {
    title: "Software Developer Intern",
    company: "Pyramid Inc.",
    location: "USA",
    period: "Aug 2025 – Jan 2026",
    description:
      "Built and maintained web applications with Node.js, React.js and TypeScript for telehealth scheduling, contributing to a 22% reduction in missed consultations. Optimized RESTful and GraphQL APIs for EHR and pharmacy systems, cutting response latency from 1.9s to 400ms with query optimization, Redis caching and PostgreSQL indexing. Worked with product, design and QA in an Agile team.",
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: "Full Stack Developer",
    company: "Koios Enterprises LLC",
    location: "USA",
    period: "Oct 2025",
    description:
      "Developed RESTful APIs for service listings, enabling dynamic service configuration in a React-based marketplace. Implemented role-based authorization to secure API endpoints across user roles and services. Researched and integrated a middleware platform for third-party transportation services.",
    icon: <Globe className="w-16 h-16 text-header" />,
  },
  {
    title: "Graduate Research Assistant",
    company: "California State University, Los Angeles",
    location: "Los Angeles, CA",
    period: "Feb 2025 – Oct 2025",
    description:
      "Migrated an NLP research system from cloud LLM APIs (OpenAI, Mistral) to locally hosted open-source models with Ollama, cutting token costs by about 90%. Optimized the thematic analysis algorithm for the local models, improving thematic accuracy by 12% and analysis speed by 75%. Built and deployed a Streamlit web app for real-time conversation analysis.",
    icon: <Brain className="w-16 h-16 text-header" />,
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 animate-gradient-xy"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>

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
            <Briefcase className="w-12 h-12 text-purple-600 dark:text-purple-400" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 dark:text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building web, mobile-ready and AI-powered solutions across healthcare, fintech and small business
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
