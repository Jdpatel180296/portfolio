import React from 'react';
interface HeaderProps {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
