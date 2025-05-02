import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CertificateCard from '../components/CertificateCard';
import { motion } from 'framer-motion';
const certificates = [
    {
        title: "Walmart Simulation",
        issuer: "Forage",
        date: "September 2024",
        image: "certificates/Wallmart.png",
        description: [
            "Completed the Advanced Software Engineering Job Simulation where I solved difficult technical projects for various teams at Walmart.",
            "Developed a novel heap data structure in Java for Walmart's shipping department, showcasing strong problem-solving skills.",
            "Designed a UML class diagram for a data processor.",
            "Created an entity relationship diagram for Walmart's pet department database."
        ]
    },
    {
        title: "JP Morgan",
        issuer: "Forage",
        date: "July 2024",
        image: "certificates/JPMorgan.png",
        description: [
            "Set up local development environments by downloading necessary files and dependencies.",
            "Fixed broken files to ensure correct web application output.",
            "Utilized JPMorgan's Perspective library for dynamic data visualization."
        ]
    },
    {
        title: "React Training Certificate",
        issuer: "LinkedIn Learning",
        date: "Nov 2024",
        image: "certificates/ReactTraining.png",
        description: [
            "Mastered advanced React concepts and patterns.",
            "Built complex applications using hooks and context API.",
            "Implemented efficient state management techniques."
        ]
    },
    {
        title: "JavaScript Practitioner",
        issuer: "LinkedIn Learning",
        date: "Oct 2024",
        image: "certificates/jsprectice.png",
        description: [
            "Developed advanced JavaScript skills and patterns",
            "Mastered asynchronous programming techniques",
            "Created high-performance web applications"
        ]
    },
    {
        title: "Numpy Training",
        issuer: "LinkedIn Learning",
        date: "Nov 2024",
        image: "certificates/NumpyCerti.png",
        description: [
            "Learned data manipulation with NumPy arrays",
            "Mastered scientific computing fundamentals",
            "Applied numerical methods to real-world problems"
        ]
    }
];
const containerVariants = {
    visible: { transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};
const Certificates = ({ id }) => {
    return (_jsx("section", { id: id, className: "py-16 px-3 bg-section1 min-h-screen flex flex-col justify-center", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "section-title", children: "Certificates" }), _jsx("p", { className: "text-gray-600 mt-4", children: "Professional certificates and achievements" })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-8", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.1 }, variants: containerVariants, children: certificates.map((cert, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsx(CertificateCard, { title: cert.title, issuer: cert.issuer, date: cert.date, image: cert.image, description: cert.description }) }, index))) })] }) }));
};
export default Certificates;
