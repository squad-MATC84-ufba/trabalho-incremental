interface TitleProps {
    children?: React.ReactNode;
    className?: string;
}

export function Title({children, className}: TitleProps) {
  return (
    <div style={{ textAlign: 'center' }}>
        <h1 className={`truncate font-medium text-lg text-gray-900 ${className}`}>
            {children}
        </h1>
    </div>
  );
}