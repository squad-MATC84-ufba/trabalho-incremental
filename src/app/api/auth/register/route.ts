import { NextResponse } from 'next/server';
import { registerSchema } from '@/lib/schemas/registerSchema';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validação no Backend (Segurança)
    // Se os dados não baterem com o schema, o Zod lança um erro aqui.
    const validData = registerSchema.parse(body);

    // 2. Simulação de Banco de Dados
    // Aqui você usaria o Prisma/TypeORM para salvar no Postgres/MySQL.
    // Exemplo: const newUser = await prisma.user.create({ data: validData });
    
    console.log('📦 Dados recebidos no servidor:', validData);

    // Lógica para Admin vs Cliente:
    // Se for uma página pública, geralmente forçamos o role='client'.
    // Se for um painel interno, aceitamos o role que veio do form.
    
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      message: 'Usuário cadastrado com sucesso!',
      user: { name: validData.fullName, role: validData.role } 
    }, { status: 201 });

  } catch (error: any) {
    // Tratamento de erro do Zod
    if (error.errors) {
      return NextResponse.json({ message: 'Erro de validação', errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 });
  }
}