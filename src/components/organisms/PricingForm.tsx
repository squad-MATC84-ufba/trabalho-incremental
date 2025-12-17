"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { pricingSchema, PricingFormData } from '@/lib/schemas/pricingSchema';

import { FormField } from '@/components/molecules/FormField';
import { SelectField } from '@/components/molecules/SelectField';
import { Button } from '@/components/atoms/Button';

export const PricingForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(pricingSchema),
    defaultValues: {
      debitCharged: 1.99,
      debitCost: 1.49, // Exemplo de spread
    }
  });

  const onSubmit = async (data: PricingFormData) => {
    setServerError(null);
    try {
      const response = await fetch('/api/machines/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao salvar valores');
      }

      setSuccess(true);
      reset(); 
    } catch (error: any) {
      setServerError(error.message);
    }
  };

  if (success) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200 text-green-700 animate-fade-in">
        <h3 className="text-xl font-bold">Tabela de Preços Salva!</h3>
        <p className="mt-2 text-sm">Os valores de repasse e cobrança foram atualizados.</p>
        <Button variant="secondary" className="mt-6 w-full" onClick={() => setSuccess(false)}>
          Continuar editando
        </Button>
      </div>
    );
  }

  // Componente auxiliar interno para evitar repetição de código (Clean Code)
  const RateRow = ({ title, chargedName, costName }: { title: string, chargedName: any, costName: any }) => (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <h4 className="text-sm font-bold text-gray-700 mb-3">{title}</h4>
      <div className="grid grid-cols-2 gap-4">
        <FormField 
          label="% Cliente (Cobrado)" 
          id={chargedName} 
          type="number" 
          step="0.01"
          placeholder="0.00"
          error={errors[chargedName as keyof PricingFormData]?.message}
          {...register(chargedName)}
        />
        <FormField 
          label="% Custo (Repassado)" 
          id={costName} 
          type="number" 
          step="0.01"
          placeholder="0.00"
          className="bg-gray-50" // Leve destaque visual para diferenciar custo
          error={errors[costName as keyof PricingFormData]?.message}
          {...register(costName)}
        />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      {serverError && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
          ⚠️ {serverError}
        </div>
      )}

      <SelectField
        label="Modelo da Máquina"
        id="model"
        error={errors.model?.message}
        {...register('model')}
      >
        <option value="">Selecione...</option>
        <option value="smartpos_pro">SmartPOS Pro</option>
        <option value="minizinha_wifi">Mini Leitor</option>
        <option value="tef_wired">TEF Cabeado</option>
      </SelectField>

      <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
        <h3 className="text-md font-semibold text-gray-900 mb-4 border-b pb-2">Configuração de Taxas (MDR)</h3>
        
        {/* Usando nosso componente auxiliar para criar as linhas */}
        <RateRow 
          title="Débito" 
          chargedName="debitCharged" 
          costName="debitCost" 
        />
        
        <RateRow 
          title="Crédito à Vista" 
          chargedName="creditSightCharged" 
          costName="creditSightCost" 
        />
        
        <RateRow 
          title="Crédito Parcelado (12x)" 
          chargedName="creditInstallmentCharged" 
          costName="creditInstallmentCost" 
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Custos do Equipamento</h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField 
            label="Venda (R$)" 
            id="acquisitionPrice" 
            type="number" 
            step="0.01"
            error={errors.acquisitionPrice?.message}
            {...register('acquisitionPrice')}
          />
          <FormField 
            label="Aluguel (R$)" 
            id="rentPrice" 
            type="number" 
            step="0.01"
            error={errors.rentPrice?.message}
            {...register('rentPrice')}
          />
        </div>
      </div>

      <Button type="submit" size="full" disabled={isSubmitting}>
        {isSubmitting ? 'Salvando Tabela...' : 'Salvar Configuração'}
      </Button>
    </form>
  );
};