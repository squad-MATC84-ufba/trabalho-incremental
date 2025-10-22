// Assumindo um SVG simples ou texto
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo = ({ size = 'md', className }: LogoProps) => {
  const width = size === 'sm' ? 24 : size === 'md' ? 32 : 48; // px
  const height = width;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Você pode usar um <Image /> do Next.js para um SVG ou PNG */}
      {/* Exemplo com um ícone simples para demonstração */}
      <span className="text-3xl font-bold text-indigo-600">
        UFBANK<span className="text-gray-900"></span>
      </span>
      {/* Ou se tiver um SVG real: */}
      {/* <Image 
        src="/logo-fintech.svg" // Certifique-se de ter um logo em /public
        alt="FintechApp Logo" 
        width={width} 
        height={height} 
        priority 
      /> */}
    </div>
  );
};