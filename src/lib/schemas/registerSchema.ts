import { z } from 'zod';

export const registerSchema = z.object({
  fullName: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  // Idealmente adicione uma regex de CPF aqui depois
  cpf: z.string().min(11, 'CPF inválido').max(14, 'CPF inválido'), 
  dob: z.string().refine((date) => new Date(date).toString() !== 'Invalid Date', {
    message: 'Data de nascimento inválida',
  }),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
  confirmPassword: z.string(),
  role: z.enum(['client', 'admin']),
  
  // CORREÇÃO AQUI:
  terms: z.boolean().refine((val) => val === true, {
    message: 'Você deve aceitar os termos de uso',
  }),

}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;