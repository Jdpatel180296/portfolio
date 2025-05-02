import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar, MapPin, Code } from 'lucide-react';
import { motion } from 'framer-motion';
const ExperienceCard = ({ title, company, location, period, description, icon = _jsx(Code, { className: "w-16 h-16 text-header" }) }) => {
    return (_jsxs(motion.div, { className: "experience-box min-h-[480px] flex flex-col", initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.5, ease: "easeOut" }, whileHover: { scale: 1.02 }, children: [_jsx("div", { className: "text-center mb-4", children: icon }), _jsx("h3", { className: "text-3xl font-bold mb-2", children: title }), _jsx("h4", { className: "text-2xl font-semibold text-gray-800 mb-2", children: company }), _jsxs("div", { className: "flex flex-wrap text-gray-600 mb-4 justify-center", children: [_jsxs("div", { className: "flex items-center mr-6 mb-2", children: [_jsx(MapPin, { className: "w-5 h-5 mr-1" }), _jsx("span", { className: "text-base", children: location })] }), _jsxs("div", { className: "flex items-center mb-2", children: [_jsx(Calendar, { className: "w-5 h-5 mr-1" }), _jsx("span", { className: "text-base", children: period })] })] }), _jsx("p", { className: "text-lg text-gray-700 flex-grow mb-6 text-justify", children: description })] }));
};
export default ExperienceCard;
