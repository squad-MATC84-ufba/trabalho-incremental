// src/components/atoms/TextLink.tsx
import React from 'react';
import Link from 'next/link';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ className, href, children, ...props }, ref) => {
    
    return (
      <Link
        href={href}
        className={`font-medium text-indigo-600 hover:text-indigo-500 ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

TextLink.displayName = "TextLink";