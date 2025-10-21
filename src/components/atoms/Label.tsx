interface LabelProps {
  children?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

export function Label({
  children,
  htmlFor,
  required = false,
  className = '',
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 font-medium text-sm text-gray-700 ${className}`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}