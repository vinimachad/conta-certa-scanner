import { Container, Input, Title } from './styles';

interface TextFieldProps {
  didChangeText: (text: string) => void
  title: string
}

export function TextField({ didChangeText, title }: TextFieldProps) {
  return (
    <Container>
      <Title children={title} />
      <Input placeholder='Ex: 4,33' keyboardType='decimal-pad' onChangeText={didChangeText} />
    </Container>
  );
}
