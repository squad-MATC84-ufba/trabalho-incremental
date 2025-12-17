import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { MachineForm } from '@/components/organisms/MachineForm';
import { Logo } from '@/components/atoms/Logo';
import { TextLink } from '@/components/atoms/TextLink';

// Podemos criar um header específico ou customizar o existente.
// Para ser rápido, vou criar um "Header Local" aqui mesmo, mas o ideal seria um Organismo.
const MachineHeader = () => (
  <div className="mb-8 text-center">
    <Logo />
    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
      Nova Maquininha
    </h2>
    <p className="mt-2 text-sm text-gray-600">
      Cadastre o terminal para começar a vender.
    </p>
  </div>
);

export default function CadastroMaquinaPage() {
  return (
    <AuthTemplate
      header={<MachineHeader />}
      form={<MachineForm />}
      footer={
        <p>
          Precisa de ajuda?{' '}
          <TextLink href="/suporte">Fale com o suporte</TextLink>
        </p>
      }
    />
  );
}