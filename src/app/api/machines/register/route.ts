import { NextResponse } from 'next/server';
import { machineSchema } from '@/lib/schemas/machineSchema';

export async function POST(request: Request) {
  try {
    console.log("🔔 [API] Recebi uma chamada de cadastro de máquina!");

    const body = await request.json();
    console.log("📦 [API] Dados recebidos:", body);

    // 1. Validação com Zod
    const validData = machineSchema.parse(body);

    // 2. Simulação de delay (1 segundo)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. Retorno de Sucesso (JSON)
    return NextResponse.json({ 
      message: 'Máquina cadastrada com sucesso!',
      machine: {
        ...validData,
        id: 'maq_123_simulado',
        createdAt: new Date().toISOString()
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error("❌ [API] Erro:", error);

    // Tratamento de erro do Zod (Dados inválidos)
    if (error.errors) {
      return NextResponse.json({ 
        message: 'Dados inválidos', 
        errors: error.errors 
      }, { status: 400 });
    }
    
    // Qualquer outro erro (retorna JSON para não quebrar o front com "<")
    return NextResponse.json({ 
      message: 'Erro interno no servidor (API)',
      details: String(error)
    }, { status: 500 });
  }
}