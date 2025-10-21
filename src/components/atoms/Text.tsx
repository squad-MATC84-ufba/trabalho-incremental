interface TextProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'caption' | 'error';
  className?: string;
}

export function Text({
  children,
  variant = 'body',
  className = '',
}: TextProps) {
  const variants = {
    title: 'text-2xl font-bold text-gray-900',
    subtitle: 'text-base text-gray-600',
    body: 'text-sm text-gray-900',
    caption: 'text-xs text-gray-500',
    error: 'text-xs text-red-500',
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}