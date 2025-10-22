import React from 'react';
import { Logo } from '@/components/atoms/Logo';

export const AuthHeader = () => {
  return (
    <div className="mb-8 text-center">
      <Logo />
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
        Crie sua conta
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Junte-se ao UFBANK e tome o controle das suas finanças.
      </p>
    </div>
  );
};