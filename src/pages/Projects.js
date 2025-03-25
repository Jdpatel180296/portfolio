import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProjectCard from '../components/ProjectCard';
const Projects = ({ id }) => {
    const projects = [
        {
            title: "Amazon Employee Access Chalange",
            period: "Oct 2024 - Dec 2024",
            description: "The Amazon Employee Access Challenge addresses the critical task of predicting employee access requirements within Amazon's internal network",
            technologies: ["Python", "Numpy", "Node.js", "Python", "GPT-4 API", "Convex"],
            githubLink: "https://github.com/Jdpatel180296/AmazonEmployeeAccessChalange",
            image: "/photo/AI_town.jpg"
        },
        {
            title: "AI Town Simulation",
            period: "Oct 2023 - Dec 2023",
            description: "Developed an interactive AI simulation where autonomous agents roam a virtual town and engage in dynamic conversations using GPT-4 API.",
            technologies: ["JavaScript", "TypeScript", "Node.js", "Python", "GPT-4 API", "Convex"],
            githubLink: "https://github.com/Jdpatel180296/ai-town",
            image: "/photo/AI_town.jpg"
        },
        {
            title: "Restaurant Application",
            period: "Sep 2023 - Nov 2023",
            description: "Mobile application for restaurant management with table reservation via QR codes and live traffic monitoring for revenue prediction.",
            technologies: ["React Native", "Firebase", "JavaScript", "Node.js"],
            githubLink: "https://github.com/Jdpatel180296/app",
            image: "photo/Restaurent_app.PNG"
        },
        {
            title: "E-Commerce Platform",
            period: "Jan 2022 - Apr 2022",
            description: "Full-stack e-commerce platform with product management, user authentication, and secure payment processing.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
            liveLink: "https://desilooklifestyle.com/",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
        }
    ];
    return (_jsx("section", { id: id, className: "min-h-screen bg-section2 py-20 px-3 flex flex-col justify-center", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h1", { className: "section-title", children: ["My ", _jsx("span", { className: "text-header", children: "Projects" })] }), _jsx("p", { className: "text-gray-700 mt-4 text-lg", children: "Some of the projects I've worked on" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: projects.map((project, index) => (_jsx(ProjectCard, { title: project.title, period: project.period, description: project.description, technologies: project.technologies, liveLink: project.liveLink, githubLink: project.githubLink, image: project.image }, index))) })] }) }));
};
export default Projects;
