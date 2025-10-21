import { Text } from '../atoms/Text';

interface FormFooterProps {
  text: string;
  linkText: string;
  linkHref: string;
}

export const FormFooter = ({
  text,
  linkText,
  linkHref,
}: FormFooterProps) => (
  <div className="text-center mt-6">
    <Text variant="caption">
      {text}{' '}
      <a href={linkHref} className="font-semibold text-indigo-600 hover:underline">
        {linkText}
      </a>
    </Text>
  </div>
);