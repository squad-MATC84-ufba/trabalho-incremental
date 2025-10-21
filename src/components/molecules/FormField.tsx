
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';
import { Text } from '../atoms/Text';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
}: FormFieldProps) => (
  <div className="w-full">
    <Label htmlFor={id} required={required}>
      {label}
    </Label>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      hasError={!!error}
    />
    {error && <Text variant="error" className="mt-1">{error}</Text>}
  </div>
);