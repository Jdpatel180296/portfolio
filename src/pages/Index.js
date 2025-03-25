import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import Experience from './Experience';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';
const Index = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Home, { id: "home" }), _jsx(Skills, { id: "skills" }), _jsx(Experience, { id: "experience" }), _jsx(Projects, { id: "projects" }), _jsx(Certificates, { id: "certificates" }), _jsx(Resume, { id: "resume" }), _jsx(Contact, { id: "contact" })] }));
};
export default Index;
