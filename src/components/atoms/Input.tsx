interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  className?: string;
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  hasError = false,
  className = '',
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border-b-2 py-2 focus:outline-none transition-colors ${
        hasError 
          ? 'border-red-500 focus:border-red-600' 
          : 'border-gray-300 focus:border-indigo-500'
      } ${className}`}
    />
  );
}