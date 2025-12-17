"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// Certifique-se de que o caminho do schema está correto conforme seu projeto
import { machineSchema, MachineFormData } from '@/lib/schemas/machineSchema';

// Importando nossos componentes do Atomic Design
import { FormField } from '@/components/molecules/FormField';
import { SelectField } from '@/components/molecules/SelectField';
import { Button } from '@/components/atoms/Button';

export const MachineForm = () => {
  // Estados para controlar o feedback da UI
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Configuração do React Hook Form com Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, // Usado para limpar o form após sucesso
  } = useForm<MachineFormData>({
    resolver: zodResolver(machineSchema),
  });

  // Função de envio
  const onSubmit = async (data: MachineFormData) => {
    setServerError(null); // Limpa erros antigos

    try {
      // Chamada para a nossa API Route (que simula o banco por enquanto)
      const response = await fetch('/api/machines/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Se a API retornar erro (ex: 409 Conflict ou 400 Bad Request)
        throw new Error(result.message || 'Erro ao cadastrar máquina');
      }

      // Se deu tudo certo
      setSuccess(true);
      console.log('Sucesso:', result);
      reset(); // Limpa os campos do formulário

    } catch (error: any) {
      setServerError(error.message || 'Erro desconhecido ao conectar com o servidor');
    }
  };

  // Renderização do Estado de Sucesso
  if (success) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200 text-green-700 animate-fade-in">
        <h3 className="text-xl font-bold">Máquina Cadastrada!</h3>
        <p className="mt-2 text-sm text-green-800">
          O dispositivo foi vinculado com sucesso e já está pronto para transacionar.
        </p>
        <Button 
          variant="secondary" 
          className="mt-6 w-full border border-gray-300" 
          onClick={() => setSuccess(false)}
        >
          Cadastrar outra máquina
        </Button>
      </div>
    );
  }

  // Renderização do Formulário
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      {/* Exibição de Erro do Servidor (ex: Serial Number duplicado) */}
      {serverError && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
          ⚠️ {serverError}
        </div>
      )}

      {/* Campo: Apelido */}
      <FormField 
        label="Apelido da Máquina" 
        id="machineLabel" 
        placeholder="Ex: Caixa Principal - Loja 01" 
        error={errors.machineLabel?.message}
        {...register('machineLabel')}
      />

      {/* Campo: Serial Number */}
      <FormField 
        label="Número de Série (S/N)" 
        id="serialNumber" 
        placeholder="Localizado no verso da máquina" 
        error={errors.serialNumber?.message}
        {...register('serialNumber')}
      />

      {/* Campo: Modelo (Select) */}
      <SelectField
        label="Modelo do Equipamento"
        id="model"
        error={errors.model?.message}
        {...register('model')}
      >
        <option value="">Selecione o modelo...</option>
        <option value="smartpos_pro">SmartPOS Pro (Android)</option>
        <option value="minizinha_wifi">Mini Leitor (Wi-Fi)</option>
        <option value="tef_wired">Pinpad TEF (Cabeado)</option>
      </SelectField>

      {/* Campo: Estabelecimento */}
      <FormField 
        label="Código do Estabelecimento" 
        id="establishmentId" 
        placeholder="0001" 
        helperText="Vincular a qual filial?"
        error={errors.establishmentId?.message}
        {...register('establishmentId')}
      />

      {/* Botão de Submit */}
      <Button type="submit" size="full" disabled={isSubmitting}>
        {isSubmitting ? 'Cadastrando...' : 'Cadastrar Máquina'}
      </Button>
    </form>
  );
};