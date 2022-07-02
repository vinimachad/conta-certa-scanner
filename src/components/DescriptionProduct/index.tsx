import { Container, Description, Title } from './styles';

interface DescriptionProductProps {
  title: string
  description: string
}

export function DescriptionProduct({ title, description }: DescriptionProductProps) {
  return (
    <Container>
      <Title children={`${title}: `} />
      <Description children={description} />
    </Container>
  );
}
