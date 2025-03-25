import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from './ui/button';
const Header = ({ activeSection }) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
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
    const handleLinkClick = (section) => {
        setShowMobileMenu(false);
        const element = document.getElementById(section);
        if (element) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight - 10;
            customSmoothScroll(offsetPosition, 300);
        }
    };
    const toggleMobileMenu = (e) => {
        e.stopPropagation();
        setShowMobileMenu(!showMobileMenu);
    };
    return (_jsx("header", { className: "bg-header py-5 px-6 sm:px-10 fixed w-full top-0 left-0 z-50 shadow-md", children: _jsxs("div", { className: "w-full flex justify-between items-center", children: [_jsx(Button, { onClick: () => handleLinkClick('home'), className: "text-white text-3xl font-bold cursor-pointer transition-transform hover:scale-105", children: "Jaydeep Gondaliya" }), _jsx(Button, { onClick: toggleMobileMenu, className: "md:hidden", children: _jsx("i", { className: `bx ${showMobileMenu ? 'bx-x' : 'bx-menu'} text-white text-3xl` }) }), _jsx("nav", { className: `${showMobileMenu ? 'flex' : 'hidden'} md:flex opacity-100 md:opacity-100 visible md:visible absolute md:static top-full right-0 w-80 md:w-auto bg-header md:bg-transparent flex-col md:flex-row min-h-screen md:min-h-fit space-y-6 md:space-y-0 md:space-x-6 p-6 md:p-0 transition-all duration-300 z-[60] items-center`, children: sections.map((section) => (_jsx(Button, { onClick: () => handleLinkClick(section), className: `nav-link ${activeSection === section ? 'active-nav-link' : ''}`, children: section.charAt(0).toUpperCase() + section.slice(1) }, section))) })] }) }));
};
export default Header;
