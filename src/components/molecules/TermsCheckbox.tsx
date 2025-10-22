import React from 'react';
import { Checkbox, CheckboxProps } from '@/components/atoms/Checkbox';
import { TextLink } from '@/components/atoms/TextLink';

interface TermsCheckboxProps extends CheckboxProps {
  label?: string; // Opcional, para caso queira um texto diferente
}

export const TermsCheckbox = React.forwardRef<HTMLInputElement, TermsCheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className={`flex items-start mb-6 ${className}`}>
        <div className="flex items-center h-5">
          <Checkbox id="terms" ref={ref} {...props} />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-medium text-gray-700">
            Eu li e aceito os{' '}
            <TextLink href="/termos-de-uso" target="_blank" rel="noopener noreferrer">
              Termos de Uso
            </TextLink>{' '}
            e a{' '}
            <TextLink href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
              Política de Privacidade
            </TextLink>
            .
          </label>
        </div>
      </div>
    );
  }
);
TermsCheckbox.displayName = "TermsCheckbox";