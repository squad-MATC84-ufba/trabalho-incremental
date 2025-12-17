import React from 'react';
import { Select, SelectProps } from '@/components/atoms/Select';
import { Label } from '@/components/atoms/Label';
import { HelperText } from '@/components/atoms/HelperText';

interface SelectFieldProps extends SelectProps {
  label: string;
  id: string;
  helperText?: string;
  error?: string;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, id, helperText, error, className, children, ...props }, ref) => {
    return (
      <div className={`mb-4 ${className}`}>
        <Label htmlFor={id}>{label}</Label>
        <Select id={id} ref={ref} {...props} className={error ? 'border-red-500 focus:ring-red-500' : ''}>
          {children}
        </Select>
        {helperText && !error && <HelperText>{helperText}</HelperText>}
        {error && <HelperText variant="error">{error}</HelperText>}
      </div>
    );
  }
);
SelectField.displayName = "SelectField";