import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { PricingForm } from '@/components/organisms/PricingForm';
import { Logo } from '@/components/atoms/Logo';
import { TextLink } from '@/components/atoms/TextLink';

const PricingHeader = () => (
  <div className="mb-8 text-center">
    <Logo />
    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
      Configuração de Valores
    </h2>
    <p className="mt-2 text-sm text-gray-600">
      Defina os preços de venda e taxas para cada modelo.
    </p>
  </div>
);

export default function CadastroValoresPage() {
  return (
    <AuthTemplate
      header={<PricingHeader />}
      form={<PricingForm />}
      footer={
        <p>
          <TextLink href="/maquinas/cadastro">← Voltar para cadastro de máquinas</TextLink>
        </p>
      }
    />
  );
}