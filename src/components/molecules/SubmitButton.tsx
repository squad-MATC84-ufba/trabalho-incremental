import { Button } from '../atoms/Button';

interface SubmitButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
}

export const SubmitButton = ({ children, isLoading = false, onClick = () => {} }: SubmitButtonProps) => (
  <Button
    type="submit"
    onClick={onClick}
    disabled={isLoading}
    variant="primary"
    className="w-full"
  >
    {isLoading ? 'Carregando...' : children}
  </Button>
);
