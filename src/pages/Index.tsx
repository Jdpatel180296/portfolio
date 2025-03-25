
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import Experience from './Experience';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

const Index = () => {
  return (
    <>
      <Home id="home" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Certificates id="certificates" />
      <Resume id="resume" />
      <Contact id="contact" />
    </>
  );
};

export default Index;