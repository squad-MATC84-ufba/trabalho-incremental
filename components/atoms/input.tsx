import React from "react";

interface InputProps {
  type: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  className?: string,
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
 } : Readonly<InputProps>) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-b-1 border-gray-900 focus:border-b-2 focus:border-indigo-300 focus:outline-none ${className}`}
    />
  );
}