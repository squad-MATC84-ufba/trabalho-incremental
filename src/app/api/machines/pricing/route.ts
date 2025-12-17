import { NextResponse } from 'next/server';
import { pricingSchema } from '@/lib/schemas/pricingSchema';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validação Zod (inclui a conversão de string para number)
    const validData = pricingSchema.parse(body);

    console.log("💰 [API] Novos valores recebidos:", validData);

    // 2. Simulação de delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. Retorno de Sucesso
    return NextResponse.json({ 
      message: 'Plano comercial configurado com sucesso!',
      data: validData
    }, { status: 200 });

  } catch (error: any) {
    if (error.errors) {
      return NextResponse.json({ message: 'Dados inválidos', errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}