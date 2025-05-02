import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const AnimatedSection = ({ id, children }) => (_jsx(motion.section, { id: id, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, transition: { duration: 0.6, ease: "easeOut" }, variants: sectionVariants, className: "py-1", children: children }));
const App = () => {
    return (_jsxs(Layout, { children: [_jsx(AnimatedSection, { id: "home", children: _jsx(Home, {}) }), _jsx(AnimatedSection, { id: "skills", children: _jsx(Skills, {}) }), _jsx(AnimatedSection, { id: "experience", children: _jsx(Experience, {}) }), _jsx(AnimatedSection, { id: "projects", children: _jsx(Projects, {}) }), _jsx(AnimatedSection, { id: "certificates", children: _jsx(Certificates, {}) }), _jsx(AnimatedSection, { id: "resume", children: _jsx(Resume, {}) }), _jsx(AnimatedSection, { id: "contact", children: _jsx(Contact, {}) })] }));
};
export default App;
