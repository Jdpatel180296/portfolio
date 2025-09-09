import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SkillIcon from '../components/SkillIcon';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react'; // Assuming you are using lucide icons
const skillsData = [
    {
        title: "Backend & Frameworks",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java 17" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring Boot" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", name: "GraphQL" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microservices/microservices-original.svg", name: "Microservices" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg", name: "Hibernate" },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", name: "Angular" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", name: "Material UI" },
        ]
    },
    {
        title: "Databases",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", name: "Redis" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg", name: "DynamoDB" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg", name: "Cassandra" },
        ]
    },
    {
        title: "Security & APIs",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Spring Security" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg", name: "OAuth2" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg", name: "JWT" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", name: "Swagger/OpenAPI" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/security/security-original.svg", name: "HIPAA/GDPR" },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg", name: "AWS" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", name: "Terraform" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", name: "Jenkins" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub Actions" },
        ]
    },
    {
        title: "Testing",
        skills: [
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "JUnit" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mockito/mockito-original.svg", name: "Mockito" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", name: "Selenium" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg", name: "Cypress" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", name: "Postman" },
            { iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/performance/performance-testing.svg", name: "Performance Testing" },
        ]
    }
];
const Skills = ({ id }) => {
    return (_jsx("section", { id: id, className: "bg-section2 min-h-screen py-20 px-3 flex flex-col justify-center", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "flex items-center justify-center mb-12 gap-3", children: [_jsx(Trophy, { className: "text-header w-8 h-8" }), _jsxs("h1", { className: "section-title text-center", children: ["My ", _jsx("span", { className: "text-header", children: "Skills" })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: skillsData.map((group, idx) => (_jsxs(motion.div, { className: `bg-white rounded-lg shadow-lg p-10 ${group.title === "Cloud & DevOps" || group.title === "Testing" ? "md:col-span-2" : ""}`, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: idx * 0.3 }, children: [_jsx("h2", { className: "text-3xl font-bold mb-8 border-b pb-3", children: group.title }), _jsx("div", { className: `grid grid-cols-2 md:grid-cols-${group.title === "Cloud & DevOps" || group.title === "Testing" ? "6" : "3"} gap-10`, children: group.skills.map((skill, index) => (_jsx(SkillIcon, { iconSrc: skill.iconSrc, name: skill.name }, index))) })] }, idx))) })] }) }));
};
export default Skills;
