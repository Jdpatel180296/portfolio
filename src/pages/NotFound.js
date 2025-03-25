import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-8xl font-bold text-header mb-4", children: "404" }), _jsx("p", { className: "text-2xl text-gray-700 mb-8", children: "Oops! Page not found" }), _jsx("a", { href: "/", className: "px-6 py-3 bg-header text-white rounded-md shadow-md hover:shadow-lg transition-all inline-block", children: "Return to Home" })] }) }));
};
export default NotFound;
