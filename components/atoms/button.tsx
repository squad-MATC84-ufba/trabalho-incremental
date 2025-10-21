import React from "react";

interface ButtonProps {
    children?: React.ReactNode, 
    onClick?: React.MouseEventHandler<HTMLButtonElement>, 
    type?: "button" | "submit" | "reset",
    className?: string,
}

export default function Button({
    children,
    onClick,
    type,
    className,
}: Readonly<ButtonProps>) {
    return (
        <button className={`bg-tranparent hover:bg-indigo-100 border px-4 py-2 rounded-md font-medium focus:ring-1 focus:ring-offset-1 focus:ring-indigo-300 ${className ?? ''}`}
    type={type} onClick={onClick}>
            {children}
        </button>
    );
}