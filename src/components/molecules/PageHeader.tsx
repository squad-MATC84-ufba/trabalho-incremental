import { Text } from '../atoms/Text';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="text-center mb-8">
    <Text variant="title">{title}</Text>
    <Text variant="subtitle" className="mt-2">{subtitle}</Text>
  </div>
);