'use client';
import React, { useState } from 'react';
import { PageHeader } from '@/components/molecules/PageHeader';
import { FormField } from '@/components/molecules/FormField';
import { SubmitButton } from '@/components/molecules/SubmitButton';
import { FormFooter } from '@/components/molecules/FormFooter';


export default function MoleculeShowcase() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="bg-white p-6 rounded-lg shadow">
          <PageHeader
            title="Criar sua conta"
            subtitle="Junte-se ao UFBANK e tome o controle das suas finanças."
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <FormField
            id="name"
            label="Nome Completo"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <FormField
            id="email-error"
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value=""
            onChange={() => {}}
            error="Email é obrigatório"
            required
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <FormField
            id="password"
            label="Senha"
            type="password"
            placeholder="Mínimo 8 caracteres"
            value=""
            onChange={() => {}}
            required
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <SubmitButton onClick={() => alert('Clicked!')}>
            Criar Conta
          </SubmitButton>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <SubmitButton isLoading={true}>
            Criar Conta
          </SubmitButton>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <FormFooter
            text="Já tem uma conta?"
            linkText="Faça login"
            linkHref="#login"
          />
        </div>

      </div>
    </div>
  );
}