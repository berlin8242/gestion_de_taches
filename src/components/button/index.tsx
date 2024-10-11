import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
