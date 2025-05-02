import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
};
const SkillIcon = ({ iconSrc, name }) => {
    return (_jsxs(motion.div, { className: "icon-container flex flex-col items-center", variants: iconVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, transition: { duration: 0.5, ease: "easeOut" }, whileHover: { scale: 1.1 }, children: [_jsx("div", { className: "skill-icon mb-3", children: _jsx("img", { src: iconSrc, alt: name, className: "w-12 h-12 object-contain" }) }), _jsx("span", { className: "text-lg font-medium text-center text-gray-800", children: name })] }));
};
export default SkillIcon;
