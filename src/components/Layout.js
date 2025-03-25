import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Header from './Header';
import { Button } from './ui/button';
const Layout = ({ children }) => {
    const [activeSection, setActiveSection] = useState('home');
    const sections = [
        'home',
        'skills',
        'experience',
        'projects',
        'certificates',
        'resume',
        'contact',
    ];
    const customSmoothScroll = (target, duration) => {
        const start = window.scrollY;
        const change = target - start;
        const startTime = performance.now();
        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = (t) => t * t * (3 - 2 * t);
            window.scrollTo(0, start + change * ease(progress));
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };
        requestAnimationFrame(animateScroll);
    };
    useEffect(() => {
        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            root: null, // Use the viewport as the root
            threshold: 0.1,
            rootMargin: `-${headerHeight}px 0px 0px 0px`,
        });
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element)
                observer.observe(element);
        });
        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element)
                    observer.unobserve(element);
            });
        };
    }, []);
    const handleScrollToTop = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const elementPosition = homeSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight - 10;
            customSmoothScroll(offsetPosition, 300);
        }
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx(Header, { activeSection: activeSection, setActiveSection: setActiveSection }), _jsxs("main", { className: "pt-14", children: [children, _jsx(Button, { onClick: handleScrollToTop, className: `fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-header text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 z-50 ${activeSection !== 'home' ? 'opacity-100 visible' : 'opacity-0 invisible'}`, children: _jsx("i", { className: "bx bx-chevron-up text-xl md:text-2xl" }) })] })] }));
};
export default Layout;
