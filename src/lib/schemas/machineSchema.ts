import { z } from 'zod';

export const machineSchema = z.object({
  machineLabel: z.string().min(3, 'Dê um apelido para a máquina (ex: Caixa 01)'),
  serialNumber: z.string().min(6, 'Número de série inválido (mínimo 6 caracteres)'),
  model: z.enum(['smartpos_pro', 'minizinha_wifi', 'tef_wired'], {
    message: 'Selecione um modelo válido', 
  }),
  establishmentId: z.string().min(1, 'Código do estabelecimento é obrigatório'), // Num cenário real, isso viria automático do login
});

export type MachineFormData = z.infer<typeof machineSchema>;