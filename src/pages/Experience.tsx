import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { motion } from 'framer-motion';
import { Code, Smartphone } from 'lucide-react';

interface ExperienceProps {
  id?: string;
}

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'California State University',
    location: 'Los Angeles, CA',
    period: 'Feb 2025 – Present',
    description:
      'Engineered full-stack pipeline to analyze human vs. AI-generated text. Developed cosine similarity backend with 90% accuracy and automated CSV dataset generation for large-scale NLP research.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Software Developer',
    company: 'Alphaved Pvt Ltd',
    location: 'Surat, Gujarat, India',
    period: 'Jun 2020 – Jul 2023',
    description:
      'Developed secure APIs using Node.js and Express with JWT-based access control. Boosted system performance by 40% using Redis caching, lazy loading, and server-side pagination. Integrated Razorpay for real-time payments, cutting errors by 60%.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Junior Software Developer',
    company: 'Webcodez Infoway',
    location: 'Rajkot, Gujarat, India',
    period: 'Feb 2018 – May 2020',
    description:
      'Built RESTful APIs for Angel Cineworld using Node.js and MongoDB, improving data retrieval by 25%. Participated in code reviews and bug fixing, reducing support tickets by 15%.',
    icon: <Code className="w-16 h-16 text-header" />,
  },
  {
    title: 'Intern – Junior Programmer Trainee',
    company: 'Aisomex Pvt. Ltd.',
    location: 'Rajkot, Gujarat, India',
    period: 'Jun 2016 – Dec 2016',
    description:
      'Designed dual-role user system with real-time Firebase chat. Optimized Android image uploads with compression and resizing, improving speed by 50% and reducing crashes on low-end devices.',
    icon: <Smartphone className="w-16 h-16 text-header" />,
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
