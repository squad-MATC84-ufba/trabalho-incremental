// interface InputProps {
//   type?: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   hasError?: boolean;
//   className?: string;
// }

// export function Input({
//   type = 'text',
//   placeholder,
//   value,
//   onChange,
//   hasError = false,
//   className = '',
// }: InputProps) {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={`w-full border-b-2 py-2 focus:outline-none transition-colors ${
//         hasError 
//           ? 'border-red-500 focus:border-red-600' 
//           : 'border-gray-300 focus:border-indigo-500'
//       } ${className}`}
//     />
//   );
// }

// Proposta Nova
import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";