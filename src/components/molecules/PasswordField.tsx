"use client";

import React, { useState } from 'react';
import { Input, InputProps } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { HelperText } from '@/components/atoms/HelperText';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // npm install @heroicons/react

interface PasswordFieldProps extends Omit<InputProps, 'type'> {
  label: string;
  id: string;
  helperText?: string;
  error?: string;
}

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, id, helperText, error, className, ...inputProps }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={`mb-4 ${className}`}>
        <Label htmlFor={id}>{label}</Label>
        <div className="relative">
          <Input
            id={id}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={error ? 'pr-10 border-red-500 focus:ring-red-500' : 'pr-10'}
            {...inputProps}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        {helperText && !error && <HelperText>{helperText}</HelperText>}
        {error && <HelperText variant="error">{error}</HelperText>}
      </div>
    );
  }
);
PasswordField.displayName = "PasswordField";