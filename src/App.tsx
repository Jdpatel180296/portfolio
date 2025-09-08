import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { motion } from 'framer-motion';



const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedSection: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    variants={sectionVariants}
    className="py-1 animation-smooth-page-transition"
  >
    {children}
  </motion.section>
);

const App: React.FC = () => {
  return (
    <Layout>
      <AnimatedSection id="home">
        <Home />
      </AnimatedSection>

      <AnimatedSection id="skills">
        <Skills />
      </AnimatedSection>

      <AnimatedSection id="experience">
        <Experience />
      </AnimatedSection>

      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="certificates">
        <Certificates />
      </AnimatedSection>

      <AnimatedSection id="resume">
        <Resume />
      </AnimatedSection>

      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
    </Layout>
  );
};

export default App;
