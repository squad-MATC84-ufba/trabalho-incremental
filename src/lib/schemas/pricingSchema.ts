import { z } from 'zod';

export const pricingSchema = z.object({
  model: z.enum(['smartpos_pro', 'minizinha_wifi', 'tef_wired'], {
    message: 'Selecione o modelo da máquina',
  }),

  // Custos Fixos (Mantivemos igual)
  acquisitionPrice: z.coerce.number().min(0),
  rentPrice: z.coerce.number().min(0),

  // DÉBITO
  debitCharged: z.coerce.number().min(0).max(100),   // O que o cliente paga
  debitCost: z.coerce.number().min(0).max(100),      // O que é repassado (custo)

  // CRÉDITO À VISTA
  creditSightCharged: z.coerce.number().min(0).max(100),
  creditSightCost: z.coerce.number().min(0).max(100),

  // CRÉDITO PARCELADO
  creditInstallmentCharged: z.coerce.number().min(0).max(100),
  creditInstallmentCost: z.coerce.number().min(0).max(100),
})
.refine((data) => data.debitCharged >= data.debitCost, {
  message: "A taxa cobrada deve ser maior que o repasse (prejuízo)",
  path: ["debitCharged"],
})
.refine((data) => data.creditSightCharged >= data.creditSightCost, {
  message: "Margem negativa no Crédito à Vista",
  path: ["creditSightCharged"],
})
.refine((data) => data.creditInstallmentCharged >= data.creditInstallmentCost, {
  message: "Margem negativa no Parcelado",
  path: ["creditInstallmentCharged"],
});

export type PricingFormData = z.infer<typeof pricingSchema>;