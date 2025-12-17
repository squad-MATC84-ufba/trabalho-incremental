// "use client";

// import React from 'react';
// import { FormField } from '@/components/molecules/FormField';
// import { PasswordField } from '@/components/molecules/PasswordField';
// import { TermsCheckbox } from '@/components/molecules/TermsCheckbox';
// import { Button } from '@/components/atoms/Button';

// export const RegistrationForm = () => {
//   // Para fins de demonstração (não funcional ainda)
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Formulário de cadastro enviado (simulado)!');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <FormField 
//         label="Nome Completo" 
//         id="fullName" 
//         placeholder="Seu nome completo" 
//         autoComplete="name"
//       />
//       <FormField 
//         label="E-mail" 
//         id="email" 
//         type="email" 
//         placeholder="seu@email.com" 
//         autoComplete="email"
//       />
//       <FormField 
//         label="CPF" 
//         id="cpf" 
//         placeholder="000.000.000-00" 
//         helperText="Apenas números, formato 000.000.000-00"
//       />
//       <FormField 
//         label="Data de Nascimento" 
//         id="dob" 
//         type="date" 
//         helperText="Formato DD/MM/AAAA"
//       />
//       <PasswordField 
//         label="Crie sua senha" 
//         id="password" 
//         helperText="Mínimo 8 caracteres, com letras e números" 
//         autoComplete="new-password"
//       />
//       <PasswordField 
//         label="Confirme sua senha" 
//         id="confirmPassword" 
//         autoComplete="new-password"
//       />
      
//       <TermsCheckbox />

//       <Button type="submit" size="full">
//         Criar Minha Conta
//       </Button>
//     </form>
//   );
// };

"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // <--- Hook principal
import { zodResolver } from '@hookform/resolvers/zod'; // <--- Conector Zod
import { registerSchema, RegisterFormData } from '@/lib/schemas/registerSchema'; // <--- Nosso schema

import { FormField } from '@/components/molecules/FormField';
import { PasswordField } from '@/components/molecules/PasswordField';
import { TermsCheckbox } from '@/components/molecules/TermsCheckbox';
import { Button } from '@/components/atoms/Button';

export const RegistrationForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Inicializando o formulário com validação Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'client', // Por padrão, quem se cadastra é cliente
      terms: false 
    }
  });

  const onSubmit = async (data: RegisterFormData) => {
    setServerError(null);
    try {
      // Chamada para a API Route que criamos
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao cadastrar');
      }

      setSuccess(true);
      console.log('Sucesso:', result);
      // Aqui você redirecionaria o usuário: router.push('/login')
    } catch (error: any) {
      setServerError(error.message);
    }
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg text-green-700">
        <h3 className="text-xl font-bold">Cadastro realizado!</h3>
        <p>Verifique seu e-mail para confirmar a conta.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Exemplo de campo com react-hook-form */}
      <FormField 
        label="Nome Completo" 
        id="fullName" 
        placeholder="Seu nome completo" 
        error={errors.fullName?.message} // Passando erro do Zod
        {...register('fullName')} // Registrando o input
      />

      <FormField 
        label="E-mail" 
        id="email" 
        type="email" 
        placeholder="seu@email.com" 
        error={errors.email?.message}
        {...register('email')}
      />

      <FormField 
        label="CPF" 
        id="cpf" 
        placeholder="000.000.000-00" 
        error={errors.cpf?.message}
        {...register('cpf')}
      />

      <FormField 
        label="Data de Nascimento" 
        id="dob" 
        type="date"
        error={errors.dob?.message} 
        {...register('dob')}
      />

      <PasswordField 
        label="Crie sua senha" 
        id="password" 
        error={errors.password?.message}
        {...register('password')}
      />

      <PasswordField 
        label="Confirme sua senha" 
        id="confirmPassword" 
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      {/* Input Oculto para Role (Se for página pública) */}
      <input type="hidden" {...register('role')} value="client" />
      
      {/* Checkbox precisa de atenção especial para funcionar o erro */}
      <div className="relative">
        <TermsCheckbox 
          {...register('terms')} 
        />
        {errors.terms && <p className="text-xs text-red-600 mt-1 absolute -bottom-4">{errors.terms.message}</p>}
      </div>

      {serverError && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
          {serverError}
        </div>
      )}

      <Button type="submit" size="full" disabled={isSubmitting}>
        {isSubmitting ? 'Cadastrando...' : 'Criar Minha Conta'}
      </Button>
    </form>
  );
};