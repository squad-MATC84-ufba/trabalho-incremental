// interface ButtonProps {
//   children?: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   type?: "button" | "submit" | "reset";
//   disabled?: boolean;
//   variant?: 'primary' | 'secondary';
//   className?: string;
// }

// export function Button({
//   children,
//   onClick,
//   type = 'button',
//   disabled = false,
//   variant = 'secondary',
//   className = '',
// }: ButtonProps) {
//   const variants = {
//     primary: 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600',
//     secondary: 'bg-transparent hover:bg-indigo-100 border',
//   };

//   return (
//     <button
//       className={`px-4 py-2 rounded-md font-medium focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${variants[variant]} ${className}`}
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }

// Proposta Nova
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority'; // npm install class-variance-authority

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-indigo-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        full: "h-10 py-2 px-4 w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";