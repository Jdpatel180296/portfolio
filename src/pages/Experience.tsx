import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { motion } from 'framer-motion';
import { Code, Database} from 'lucide-react';

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    title: 'Software Developer II',
    company: 'United Health (Contract)',
    location: 'USA',
    period: 'Jan 2025 – Present',
    description:
      'Redesigned backend healthcare SDK integrations with Java 17 & Spring Boot microservices, improving system throughput by 2.3x. Built patient-facing React apps, reducing missed telehealth consultations by 22%. Engineered CI/CD pipelines with Jenkins, GitHub Actions, Docker, Kubernetes, and Terraform, cutting release cycles from 3 weeks to 4 days. Secured 1M+ patient records with HIPAA/GDPR-compliant OAuth2/JWT authentication. Migrated healthcare services to AWS, supporting 250K+ concurrent users and reducing infrastructure costs by 18%.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Cognitive',
    location: 'India',
    period: 'Sep 2017 – Jul 2023',
    description:
      'Designed scalable payment settlement platform (80K+ daily transactions) with Java 17, Spring Boot, and Kafka. Built responsive React.js portals reducing service queries by 18%. Optimized PostgreSQL + Redis, cutting loan approval times from 90s to 12s. Automated deployments with Docker, Kubernetes, Terraform, reducing rollbacks by 35%. Developed fraud detection with Kafka + ML, blocking 1,500+ suspicious transactions monthly. Delivered treasury dashboards with Next.js, GraphQL, and D3.js, improving reconciliation by 40%.',
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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
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

      <div className="timeline max-w-5xl mx-auto">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative grid grid-cols-9 gap-4 items-start mb-12">
              {isLeft ? (
                <>
                  <motion.div
                    className="col-span-4 w-full"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <ExperienceCard {...exp} />
                  </motion.div>
                  <div className="col-span-1 flex justify-center">
                    <div className="w-1 bg-header h-full relative">
                      <div className="w-4 h-4 bg-header rounded-full absolute -left-1.5 top-4"></div>
                    </div>
                  </div>
                  <div className="col-span-4" />
                </>
              ) : (
                <>
                  <div className="col-span-4" />
                  <div className="col-span-1 flex justify-center">
                    <div className="w-1 bg-header h-full relative">
                      <div className="w-4 h-4 bg-header rounded-full absolute -left-1.5 top-4"></div>
                    </div>
                  </div>
                  <motion.div
                    className="col-span-4 w-full"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <ExperienceCard {...exp} />
                  </motion.div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Experience;
