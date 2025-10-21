import React from "react";

interface LabelProps {
    children?: React.ReactNode, 
    className?: string,
}

export default function Label({
    children,
    className,
}: Readonly<LabelProps>) {
    return (
        <label style={{ display: 'block', marginBottom: 8 }} className={`truncate font-medium text-md text-gray-500 dark:text-gray-900 ${className}`}>
            {children}
        </label>
    );
}