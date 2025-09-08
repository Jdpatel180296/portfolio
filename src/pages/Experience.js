import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ExperienceCard from '../components/ExperienceCard';
import { motion } from 'framer-motion';
import { Code, Database } from 'lucide-react';
const experiences = [
    {
        title: 'Software Developer II',
        company: 'United Health (Contract)',
        location: 'USA',
        period: 'Jan 2025 – Present',
        description: 'Redesigned backend healthcare SDK integrations with Java 17 & Spring Boot microservices, improving system throughput by 2.3x. Built patient-facing React apps, reducing missed telehealth consultations by 22%. Engineered CI/CD pipelines with Jenkins, GitHub Actions, Docker, Kubernetes, and Terraform, cutting release cycles from 3 weeks to 4 days. Secured 1M+ patient records with HIPAA/GDPR-compliant OAuth2/JWT authentication. Migrated healthcare services to AWS, supporting 250K+ concurrent users and reducing infrastructure costs by 18%.',
        icon: _jsx(Code, { className: "w-16 h-16 text-header" }),
    },
    {
        title: 'Senior Software Engineer',
        company: 'Cognitive',
        location: 'India',
        period: 'Sep 2017 – Jul 2023',
        description: 'Designed scalable payment settlement platform (80K+ daily transactions) with Java 17, Spring Boot, and Kafka. Built responsive React.js portals reducing service queries by 18%. Optimized PostgreSQL + Redis, cutting loan approval times from 90s to 12s. Automated deployments with Docker, Kubernetes, Terraform, reducing rollbacks by 35%. Developed fraud detection with Kafka + ML, blocking 1,500+ suspicious transactions monthly. Delivered treasury dashboards with Next.js, GraphQL, and D3.js, improving reconciliation by 40%.',
        icon: _jsx(Database, { className: "w-16 h-16 text-header" }),
    },
];
const Experience = ({ id }) => {
    return (_jsxs(motion.section, { id: id, className: "min-h-screen py-20 px-4 bg-section1", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 }, children: [_jsx(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: -30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, viewport: { once: true }, children: _jsxs("h1", { className: "section-title", children: ["My ", _jsx("span", { className: "text-header", children: "Experiences" })] }) }), _jsx("div", { className: "timeline max-w-5xl mx-auto", children: experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    return (_jsx("div", { className: "relative grid grid-cols-9 gap-4 items-start mb-12", children: isLeft ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "col-span-4 w-full", initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true }, children: _jsx(ExperienceCard, { ...exp }) }), _jsx("div", { className: "col-span-1 flex justify-center", children: _jsx("div", { className: "w-1 bg-header h-full relative", children: _jsx("div", { className: "w-4 h-4 bg-header rounded-full absolute -left-1.5 top-4" }) }) }), _jsx("div", { className: "col-span-4" })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "col-span-4" }), _jsx("div", { className: "col-span-1 flex justify-center", children: _jsx("div", { className: "w-1 bg-header h-full relative", children: _jsx("div", { className: "w-4 h-4 bg-header rounded-full absolute -left-1.5 top-4" }) }) }), _jsx(motion.div, { className: "col-span-4 w-full", initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6, ease: 'easeOut' }, viewport: { once: true }, children: _jsx(ExperienceCard, { ...exp }) })] })) }, index));
                }) })] }));
};
export default Experience;
