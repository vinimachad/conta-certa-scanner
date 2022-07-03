
import { Text } from 'react-native';
import { Container } from './styles';

interface ButtonProps {
  didTapButton: () => void
  title: string
}

export function Button({ didTapButton, title }: ButtonProps) {
  return (
    <Container onPressIn={didTapButton}>
      <Text>{title}</Text>
    </Container>
  );
}
