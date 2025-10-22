// Para mensagens de erro ou de ajuda
import React from 'react';

export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'info' | 'error';
}

export const HelperText: React.FC<HelperTextProps> = ({ children, variant = 'info', className, ...props }) => {
  const variantClasses = {
    info: 'text-gray-500',
    error: 'text-red-600',
  };

  return (
    <p className={`text-xs mt-1 ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};