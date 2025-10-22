
// import { Label } from '../atoms/Label';
// import { Input } from '../atoms/Input';
// import { Text } from '../atoms/Text';

// interface FormFieldProps {
//   id: string;
//   label: string;
//   type?: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: string;
//   required?: boolean;
// }

// export const FormField = ({
//   id,
//   label,
//   type = 'text',
//   placeholder,
//   value,
//   onChange,
//   error,
//   required = false,
// }: FormFieldProps) => (
//   <div className="w-full">
//     <Label htmlFor={id} required={required}>
//       {label}
//     </Label>
//     <Input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       hasError={!!error}
//     />
//     {error && <Text variant="error" className="mt-1">{error}</Text>}
//   </div>
// );


// Proposta Nova 
import React from 'react';
import { Input, InputProps } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { HelperText } from '@/components/atoms/HelperText';

interface FormFieldProps extends InputProps {
  label: string;
  id: string; // Adicionado id para conectar label e input
  helperText?: string;
  error?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, helperText, error, className, ...inputProps }, ref) => {
    return (
      <div className={`mb-4 ${className}`}>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} ref={ref} {...inputProps} 
          className={error ? 'border-red-500 focus:ring-red-500' : ''} 
        />
        {helperText && !error && <HelperText>{helperText}</HelperText>}
        {error && <HelperText variant="error">{error}</HelperText>}
      </div>
    );
  }
);
FormField.displayName = "FormField";