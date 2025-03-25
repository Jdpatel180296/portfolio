import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
const App = () => {
    return (_jsxs(Layout, { children: [_jsx(Home, { id: "home" }), _jsx(Skills, { id: "skills" }), _jsx(Experience, { id: "experience" }), _jsx(Projects, { id: "projects" }), _jsx(Certificates, { id: "certificates" }), _jsx(Resume, { id: "resume" }), _jsx(Contact, { id: "contact" })] }));
};
export default App;
