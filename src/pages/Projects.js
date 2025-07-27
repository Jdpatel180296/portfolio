import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
const Projects = ({ id }) => {
    const projects = [
        {
            title: "Early Skin Cancer Detection",
            period: "Jan 2025 - May 2025",
            description: "Developed a deep learning model for melanoma detection using smartphone-quality images. Used CNNs (EfficientNet, ResNet, MobileNet) with metadata fusion to achieve 92.9% AUC.",
            technologies: ["Python", "TensorFlow", "NumPy", "EfficientNet", "ResNet", "MobileNet"],
            githubLink: "https://github.com/Jdpatel180296/cs5661-dsproject-Early-Skin-Cancer-Detection-Bringing-Dermatology-to-Everyone",
            image: "/photo/skin_cancer.png", // update this path or use placeholder if not available
        },
        {
            title: "Amazon Employee Access Chalange",
            period: "Oct 2024 - Dec 2024",
            description: "The Amazon Employee Access Challenge addresses the critical task of predicting employee access requirements within Amazon's internal network",
            technologies: ["Python", "Numpy", "Node.js", "GPT-4 API", "Convex"],
            githubLink: "https://github.com/Jdpatel180296/AmazonEmployeeAccessChalange",
            image: "/photo/Amazon_emp.jpeg",
        },
        {
            title: "AI Town Simulation",
            period: "Oct 2023 - Dec 2023",
            description: "Developed an interactive AI simulation where autonomous agents roam a virtual town and engage in dynamic conversations using GPT-4 API.",
            technologies: ["JavaScript", "TypeScript", "Node.js", "Python", "GPT-4 API", "Convex"],
            githubLink: "https://github.com/Jdpatel180296/ai-town",
            image: "/photo/AI_town.jpg",
        },
        {
            title: "Restaurant Application",
            period: "Sep 2023 - Nov 2023",
            description: "Mobile application for restaurant management with table reservation via QR codes and live traffic monitoring for revenue prediction.",
            technologies: ["React Native", "Firebase", "JavaScript", "Node.js"],
            githubLink: "https://github.com/Jdpatel180296/app",
            image: "photo/Restaurent_app.PNG",
        },
        {
            title: "E-Commerce Platform",
            period: "Jan 2022 - Apr 2022",
            description: "Full-stack e-commerce platform with product management, user authentication, and secure payment processing.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
            liveLink: "https://desilooklifestyle.com/",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        },
    ];
    return (_jsxs(motion.section, { id: id, className: "min-h-screen bg-section2 py-20 px-3 flex flex-col justify-center", initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 }, children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, viewport: { once: true }, children: [_jsxs("h1", { className: "section-title", children: ["My ", _jsx("span", { className: "text-header", children: "Projects" })] }), _jsx("p", { className: "text-gray-700 mt-4 text-lg", children: "Some of the projects I've worked on" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto", children: projects.map((project, index) => (_jsx(ProjectCard, { title: project.title, period: project.period, description: project.description, technologies: project.technologies, liveLink: project.liveLink, githubLink: project.githubLink, image: project.image }, index))) })] }));
};
export default Projects;
