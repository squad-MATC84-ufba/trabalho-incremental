import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { AuthHeader } from '@/components/organisms/AuthHeader';
import { RegistrationForm } from '@/components/organisms/RegistrationForm';
import { TextLink } from '@/components/atoms/TextLink';

export default function CadastroPage() {
  return (
    <AuthTemplate
      header={<AuthHeader />}
      form={<RegistrationForm />}
      footer={
        <p>
          Já possui uma conta?{' '}
          <TextLink href="/login">Faça login aqui</TextLink>
        </p>
      }
    />
  );
}