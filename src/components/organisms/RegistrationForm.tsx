"use client";

import React from 'react';
import { FormField } from '@/components/molecules/FormField';
import { PasswordField } from '@/components/molecules/PasswordField';
import { TermsCheckbox } from '@/components/molecules/TermsCheckbox';
import { Button } from '@/components/atoms/Button';

export const RegistrationForm = () => {
  // Para fins de demonstração (não funcional ainda)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulário de cadastro enviado (simulado)!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField 
        label="Nome Completo" 
        id="fullName" 
        placeholder="Seu nome completo" 
        autoComplete="name"
      />
      <FormField 
        label="E-mail" 
        id="email" 
        type="email" 
        placeholder="seu@email.com" 
        autoComplete="email"
      />
      <FormField 
        label="CPF" 
        id="cpf" 
        placeholder="000.000.000-00" 
        helperText="Apenas números, formato 000.000.000-00"
      />
      <FormField 
        label="Data de Nascimento" 
        id="dob" 
        type="date" 
        helperText="Formato DD/MM/AAAA"
      />
      <PasswordField 
        label="Crie sua senha" 
        id="password" 
        helperText="Mínimo 8 caracteres, com letras e números" 
        autoComplete="new-password"
      />
      <PasswordField 
        label="Confirme sua senha" 
        id="confirmPassword" 
        autoComplete="new-password"
      />
      
      <TermsCheckbox />

      <Button type="submit" size="full">
        Criar Minha Conta
      </Button>
    </form>
  );
};