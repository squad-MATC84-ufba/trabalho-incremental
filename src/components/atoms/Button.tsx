interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'secondary',
  className = '',
}: ButtonProps) {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600',
    secondary: 'bg-transparent hover:bg-indigo-100 border',
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${variants[variant]} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}