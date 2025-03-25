import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SkillIcon = ({ icon: Icon, name }) => {
    return (_jsxs("div", { className: "icon-container flex flex-col items-center", children: [_jsx("div", { className: "skill-icon mb-3", children: _jsx(Icon, { className: "w-10 h-10 " }) }), _jsx("span", { className: "text-lg font-medium text-center text-gray-800", children: name })] }));
};
export default SkillIcon;
