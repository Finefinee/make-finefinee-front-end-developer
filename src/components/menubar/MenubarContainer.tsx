import * as React from "react";

interface ContainerProps {
    children: React.ReactNode; // ?????
}

const MenubarContainer = ({ children }: ContainerProps) => {
    return (
        <div id="menubar-container">
            {children}
        </div>
    );
};

export default MenubarContainer;