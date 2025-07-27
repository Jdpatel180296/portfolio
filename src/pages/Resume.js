import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Download, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
const Resume = ({ id }) => {
    return (_jsx(motion.section, { id: id, className: "bg-section2 min-h-screen py-16 px-6 flex-col", initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: 'easeOut' }, viewport: { once: true, amount: 0.2 }, children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, viewport: { once: true }, children: [_jsx("h1", { className: "section-title", children: "Resume" }), _jsx("p", { className: "text-gray-600 mt-4", children: "My educational background and professional experience" })] }), _jsx("div", { className: "flex justify-center mb-10", children: _jsxs("a", { href: "/Resume.pdf", className: "btn", target: "_blank", children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Download Resume"] }) }), _jsxs(motion.div, { className: "bg-section1 rounded-lg shadow-lg p-8 mb-10", ...fadeInProps, children: [_jsx(SectionHeader, { icon: _jsx(GraduationCap, {}), title: "Education" }), _jsx(TimelineItem, { title: "Master's in Computer Science", subtitle: "California State University, Los Angeles", location: "Los Angeles, California", time: "Aug 2023 \u2013 May 2025", details: ["GPA: 3.89"] }), _jsx(TimelineItem, { title: "Bachelor of Computer Engineering", subtitle: "Gujarat Technological University", location: "Gujarat, India", time: "Aug 2013 \u2013 Jun 2017", details: ["GPA: 3.44"] })] }), _jsxs(motion.div, { className: "bg-section1 rounded-lg shadow-lg p-8 mb-10", ...fadeInProps, children: [_jsx(SectionHeader, { icon: _jsx(GraduationCap, {}), title: "Coursework" }), _jsx("p", { className: "text-gray-600", children: "Advanced Web Development, Algorithms, Advanced Functional Programming, Advanced AI, Data Science, Advanced Data Science, Advanced Software Engineering" })] }), _jsxs(motion.div, { className: "bg-section1 rounded-lg shadow-lg p-8 mb-10", ...fadeInProps, children: [_jsx(SectionHeader, { icon: _jsx(Trophy, {}), title: "Skills" }), _jsxs("p", { className: "text-gray-600", children: [_jsx("strong", { children: "Languages:" }), " Python, Java, JavaScript, SQL, HTML/CSS", _jsx("br", {}), _jsx("strong", { children: "Tools/Libraries:" }), " Pandas, NumPy, Scikit-learn, TensorFlow, Matplotlib", _jsx("br", {}), _jsx("strong", { children: "Frameworks:" }), " Node.js, Express.js, Spring Boot, Vue.js, React", _jsx("br", {}), _jsx("strong", { children: "Database:" }), " MongoDB, Firebase, SQL", _jsx("br", {}), _jsx("strong", { children: "Other:" }), " Git, Redis, JIRA, Convex, Vercel"] })] }), _jsxs(motion.div, { className: "bg-section1 rounded-lg shadow-lg p-8 mb-10", ...fadeInProps, children: [_jsx(SectionHeader, { icon: _jsx(Briefcase, {}), title: "Work Experience" }), _jsx(TimelineItem, { title: "Graduate Research Assistant", subtitle: "California State University", time: "Feb 2025 \u2013 Present", details: [
                                "Developed front-end/backend pipeline to analyze human vs. AI-generated text.",
                                "Engineered cosine similarity backend with 90% accuracy.",
                                "Automated conversion to structured CSV datasets.",
                            ] }), _jsx(TimelineItem, { title: "Software Developer", subtitle: "Alphaved Pvt Ltd | Surat, Gujarat, India", time: "Jun 2020 \u2013 Jul 2023", details: [
                                "Built secure backend APIs with JWT authentication and access control.",
                                "Optimized system using Redis, lazy loading, and server-side pagination.",
                                "Integrated Razorpay for real-time secure payments with failure handling.",
                            ] }), _jsx(TimelineItem, { title: "Junior Software Developer", subtitle: "Webcodez Infoway | Rajkot, Gujarat, India", time: "Feb 2018 \u2013 May 2020", details: [
                                "Built Node.js APIs for Angel Cineworld project with MongoDB integration.",
                                "Reduced support tickets by 15% through code maintenance and debugging.",
                            ] }), _jsx(TimelineItem, { title: "Intern \u2013 Junior Programmer Trainee", subtitle: "Aisomex Pvt. Ltd. | Rajkot, Gujarat, India", time: "Jun 2016 \u2013 Dec 2016", details: [
                                "Designed dual-role user system with Firebase-based chat.",
                                "Optimized Android image uploads, improving stability by 50%.",
                            ] })] }), _jsxs(motion.div, { className: "bg-section1 rounded-lg shadow-lg p-8 mb-10", ...fadeInProps, children: [_jsx(SectionHeader, { icon: _jsx(Trophy, {}), title: "Projects" }), _jsx(TimelineItem, { title: "Early Skin Cancer Detection", time: "Jan 2025 \u2013 May 2025", details: [
                                "Developed DL pipeline using EfficientNet, ResNet, MobileNet with metadata fusion.",
                                "Achieved AUC of 92.9% using EfficientNetV2-B0.",
                            ] }), _jsx(TimelineItem, { title: "Amazon Employee Access Prediction", time: "Oct 2024 \u2013 Dec 2024", details: [
                                "Built models with Logistic Regression, Random Forest, XGBoost, CatBoost (95.6% accuracy).",
                                "Evaluated models with AUC, precision, recall, F1-score.",
                            ] }), _jsx(TimelineItem, { title: "AI Town Simulation", time: "Oct 2023 \u2013 Dec 2023", details: [
                                "Built GPT-4 based agent simulation with real-time backend (Convex).",
                                "Enabled dynamic memory-based conversations.",
                            ] }), _jsx(TimelineItem, { title: "Restaurant Application", time: "Sep 2023 \u2013 Nov 2023", details: [
                                "React Native app with QR-based reservations and live revenue prediction.",
                                "Boosted search speed by 83% using binary search.",
                            ] })] }), _jsxs(motion.div, { className: "bg-section1 rounded-lg shadow-lg p-8", ...fadeInProps, children: [_jsx(SectionHeader, { icon: _jsx(Award, {}), title: "Certifications" }), _jsx(TimelineItem, { title: "Walmart\u2019s Advanced Software Engineering Job Simulation", subtitle: "Forage", time: "Sep 2024" }), _jsx(TimelineItem, { title: "J.P. Morgan Software Engineering Virtual Experience", subtitle: "Forage", time: "Jul 2024" })] })] }) }));
};
// Reusable Subcomponents
const SectionHeader = ({ icon, title }) => (_jsxs("div", { className: "flex items-center mb-6", children: [_jsx("div", { className: "text-header mr-3", children: icon }), _jsx("h2", { className: "text-2xl font-bold", children: title })] }));
const TimelineItem = ({ title, subtitle, location, time, details = [], }) => (_jsxs("div", { className: "border-l-2 border-gray-200 pl-5 ml-3 relative space-y-2 mb-8", children: [_jsx("div", { className: "absolute -left-7 top-0 w-3 h-3 rounded-full bg-header" }), _jsx("h3", { className: "text-xl font-bold", children: title }), subtitle && _jsx("p", { className: "text-gray-700", children: subtitle }), location && _jsx("p", { className: "text-gray-500", children: location }), _jsx("p", { className: "text-gray-600", children: time }), details.length > 0 && (_jsx("ul", { className: "list-disc pl-5 space-y-1 text-gray-600", children: details.map((d, idx) => (_jsx("li", { children: d }, idx))) }))] }));
const fadeInProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
};
export default Resume;
