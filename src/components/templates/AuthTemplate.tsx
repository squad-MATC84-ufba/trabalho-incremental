import React from 'react';

interface AuthTemplateProps {
  header: React.ReactNode;
  form: React.ReactNode;
  footer?: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ header, form, footer }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-xl border border-gray-100">
        {header}
        {form}
        {footer && <div className="mt-6 text-center text-sm text-gray-600">{footer}</div>}
      </div>
    </div>
  );
};