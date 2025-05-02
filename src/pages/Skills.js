import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SkillIcon from '../components/SkillIcon';
import { motion } from 'framer-motion';
const skillsData = [
    {
        title: "Languages",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" }
        ]
    },
    {
        title: "Backend",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring Boot" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", name: "GraphQL" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase" },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", name: "Redux" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" }
        ]
    },
    {
        title: "Database",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" }
        ]
    },
    {
        title: "Tools & Libraries",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", name: "NumPy" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas" },
        ]
    }
];
const Skills = ({ id }) => {
    return (_jsx("section", { id: id, className: "bg-section2 min-h-screen py-20 px-3 flex flex-col justify-center", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("h1", { className: "section-title text-center mb-16", children: ["My ", _jsx("span", { className: "text-header", children: "Skills" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: skillsData.map((group, idx) => (_jsxs(motion.div, { className: `bg-white rounded-lg shadow-lg p-10 ${group.title === "Tools & Libraries" ? "md:col-span-2" : ""}`, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: idx * 0.3 }, children: [_jsx("h2", { className: "text-3xl font-bold mb-8 border-b pb-3", children: group.title }), _jsx("div", { className: `grid grid-cols-3 md:grid-cols-${group.title === "Tools & Libraries" ? "6" : "3"} gap-10`, children: group.skills.map((skill, index) => (_jsx(SkillIcon, { iconSrc: skill.iconSrc, name: skill.name }, index))) })] }, idx))) })] }) }));
};
export default Skills;
