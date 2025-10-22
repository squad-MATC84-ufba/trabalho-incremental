// interface LabelProps {
//   children?: React.ReactNode;
//   htmlFor?: string;
//   required?: boolean;
//   className?: string;
// }

// export function Label({
//   children,
//   htmlFor,
//   required = false,
//   className = '',
// }: LabelProps) {
//   return (
//     <label
//       htmlFor={htmlFor}
//       className={`block mb-2 font-medium text-sm text-gray-700 ${className}`}
//     >
//       {children}
//       {required && <span className="text-red-500 ml-1">*</span>}
//     </label>
//   );
// }

// Proposta Nova
import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";