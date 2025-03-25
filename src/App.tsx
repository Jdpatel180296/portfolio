import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Home id="home" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Certificates id="certificates" />
      <Resume id="resume" />
      <Contact id="contact" />
    </Layout>
  );
};

export default App;